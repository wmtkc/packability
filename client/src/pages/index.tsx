import App from 'src/components/App'
import InfoBox from 'src/components/InfoBox'
import Header from 'src/components/Header'
import Register from 'src/components/Forms/Register'
import BookList from 'src/components/BookList'
import { ALL_BOOKS_QUERY, allBooksQueryVars } from 'src/lib/queries/books'
import { initializeApollo, addApolloState } from 'src/lib/apolloClient'
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