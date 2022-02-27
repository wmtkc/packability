import { NextPage } from 'next'

import App from '@components/App'
import BookList from '@components/BookList'
import InfoBox from '@components/InfoBox'
import Header from '@components/OldHeader'
import Register from '@components/forms/Register'

import { addApolloState, initializeApollo } from '@lib/apolloClient'
import { BooksDocument } from '@lib/generated/graphql'
import { booksQueryVars } from '@lib/graphql/variables/books'

const IndexPage: NextPage = () => (
    <App>
        <Header />
        <InfoBox>ℹ️ This page shows how to use SSG with Apollo.</InfoBox>
        <Register />
        <BookList />
    </App>
)

export async function getStaticProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: BooksDocument,
        variables: booksQueryVars,
    })

    return addApolloState(apolloClient, {
        props: {},
        revalidate: 1,
    })
}

export default IndexPage
