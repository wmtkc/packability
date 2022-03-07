import { ApolloProvider } from '@apollo/client'
import { Box, ChakraProvider } from '@chakra-ui/react'
import 'katex/dist/katex.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import Layout from '@components/layout/layout'

import { useApollo } from '@lib/apolloClient'
import { accessTokenVar } from '@lib/vars/accessToken'

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps)
    // TODO: Use loading to set spinner
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        try {
            fetch('http://localhost:4000/refresh_token', {
                method: 'POST',
                credentials: 'include',
            }).then(async res => {
                const data = await res.json()
                accessTokenVar(data.accessToken)
                setLoading(false)
            })
        } catch (err) {
            console.error(err)
        }
    })

    if (loading) return <Box>Loading...</Box>

    return (
        <ApolloProvider client={apolloClient}>
            <ChakraProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ChakraProvider>
        </ApolloProvider>
    )
}

export default MyApp
