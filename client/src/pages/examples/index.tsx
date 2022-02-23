import App from '@components/App'
import InfoBox from '@components/InfoBox'
import Header from '@components/OldHeader'
import Register from '@components/forms/Register'
import BookList from '@components/BookList'
import { ALL_BOOKS_QUERY, allBooksQueryVars } from '@lib/queries/books'
import { initializeApollo, addApolloState } from '@lib/apolloClient'
import { NextPage } from 'next'

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
    query: ALL_BOOKS_QUERY,
    variables: allBooksQueryVars,
  })

  return addApolloState(apolloClient, {
    props: {},
    revalidate: 1,
  })
}

export default IndexPage