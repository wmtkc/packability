import { ApolloProvider } from '@apollo/client'
import 'katex/dist/katex.css'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react'

import '@styles/global.css'

import { useApollo } from '@lib/apolloClient'
import { accessTokenVar } from '@lib/vars/accessToken'

import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
    const apolloClient = useApollo(pageProps)
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

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <ApolloProvider client={apolloClient}>
            <Component {...pageProps} />
            <Footer />
        </ApolloProvider>
    )
}

export default MyApp
