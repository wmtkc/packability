import '@styles/global.css'
import 'katex/dist/katex.css'
import type { AppProps } from "next/app"
import { ApolloProvider } from "@apollo/client"
import { useApollo } from "@lib/apolloClient"

import Footer from '../components/footer'

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps);
  
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
      <Footer />
    </ApolloProvider>
  );
}

export default MyApp;