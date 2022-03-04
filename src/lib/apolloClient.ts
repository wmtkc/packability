import {
    ApolloClient,
    ApolloLink,
    HttpLink,
    InMemoryCache,
} from '@apollo/client'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { TokenRefreshLink } from 'apollo-link-token-refresh'
import merge from 'deepmerge'
import jwtDecode from 'jwt-decode'
import isEqual from 'lodash/isEqual'
import getConfig from 'next/config'
import { useMemo } from 'react'

import { typePolicies } from './typePolicies'
import { accessTokenVar } from './vars/authTokens'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const { publicRuntimeConfig } = getConfig()

const cache = new InMemoryCache({ typePolicies })

const linkRefresh = new TokenRefreshLink({
    accessTokenField: 'accessToken',
    isTokenValidOrUndefined: () => {
        const accessToken = accessTokenVar()

        if (!accessToken) return true

        try {
            const { exp }: { exp: number } = jwtDecode(accessToken)
            console.log(exp)
            return Date.now() < exp * 1000
        } catch (err) {
            return false
        }
    },
    fetchAccessToken: async () => {
        return fetch('http://localhost:4000/refresh_token', {
            method: 'POST',
            credentials: 'include',
        })
    },
    handleFetch: accessToken => {
        accessTokenVar(accessToken)
    },
    handleError: err => {
        console.warn('Your refresh token is invalid, try re-login')
        console.error(err)
    },
})

const linkError = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors)
        graphQLErrors.forEach(({ message, locations, path }) =>
            console.log(
                `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
            ),
        )
    if (networkError) console.log(`[Network error]: ${networkError}`)
})

const linkHeaders = setContext((_, { headers }) => {
    const accessToken = accessTokenVar()
    return {
        headers: {
            ...headers,
            authorization: accessToken ? `Bearer ${accessToken}` : '',
        },
    }
})

const linkMain = new HttpLink({
    uri: publicRuntimeConfig.API_URL,
    credentials: 'include',
})

let apolloClient: any
function createApolloClient() {
    return new ApolloClient({
        cache,
        ssrMode: typeof window === 'undefined',
        link: ApolloLink.from([linkRefresh, linkError, linkHeaders, linkMain]),
        // TODO: bind to prod/dev env
        connectToDevTools: true,
    })
}

export function initializeApollo(initialState: any = null) {
    const _apolloClient = apolloClient ?? createApolloClient()

    // If your page has Next.js data fetching methods that use Apollo Client, the initial state
    // gets hydrated here
    if (initialState) {
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract()

        // Merge the initialState from getStaticProps/getServerSideProps in the existing cache
        const data = merge(existingCache, initialState, {
            // combine arrays using object equality (like in sets)
            arrayMerge: (
                destinationArray: Array<any>,
                sourceArray: Array<any>,
            ) => [
                ...sourceArray,
                ...destinationArray.filter(d =>
                    sourceArray.every((s: any) => !isEqual(d, s)),
                ),
            ],
        })

        // Restore the cache with the merged data
        _apolloClient.cache.restore(data)
    }
    // For SSG and SSR always create a new Apollo Client
    if (typeof window === 'undefined') return _apolloClient
    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient

    return _apolloClient
}

export function addApolloState(client: any, pageProps: any) {
    if (pageProps?.props) {
        pageProps.props[APOLLO_STATE_PROP_NAME] = client.cache.extract()
    }

    return pageProps
}

export function useApollo(pageProps: any) {
    const state = pageProps[APOLLO_STATE_PROP_NAME]
    const store = useMemo(() => initializeApollo(state), [state])
    return store
}
