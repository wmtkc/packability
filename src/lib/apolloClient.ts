import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client'
import merge from 'deepmerge'
import isEqual from 'lodash/isEqual'
import getConfig from 'next/config'
import { useMemo } from 'react'

import { typePolicies } from './typePolicies'

export const APOLLO_STATE_PROP_NAME = '__APOLLO_STATE__'

const { publicRuntimeConfig } = getConfig()

const cache = new InMemoryCache({ typePolicies })

let apolloClient: any
function createApolloClient() {
    return new ApolloClient({
        cache,
        ssrMode: typeof window === 'undefined',
        link: new HttpLink({
            uri: publicRuntimeConfig.API_URL, // Server URL (must be absolute)
            credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
        }),
    })
}

export function initializeApollo(initialState = null) {
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