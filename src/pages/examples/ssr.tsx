import { NextPage } from 'next'

import App from '@components/App'
import BookList from '@components/BookList'
import InfoBox from '@components/InfoBox'
import Header from '@components/OldHeader'
import Submit from '@components/forms/BookSubmit'

import { addApolloState, initializeApollo } from '@lib/apolloClient'
import { BooksDocument } from '@lib/generated/graphql'
import { booksQueryVars } from '@lib/graphql/variables/books'

const SSRPage: NextPage = () => (
    <App>
        <Header />
        <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>
        <Submit />
        <BookList />
    </App>
)

export async function getServerSideProps() {
    const apolloClient = initializeApollo()

    await apolloClient.query({
        query: BooksDocument,
        variables: booksQueryVars,
    })

    return addApolloState(apolloClient, {
        props: {},
    })
}

export default SSRPage
