import App from "src/components/App";
import InfoBox from "src/components/InfoBox";
import Header from "src/components/Header";
import Submit from "src/components/Forms/BookSubmit";
import BookList from "src/components/BookList";
import { ALL_BOOKS_QUERY, allBooksQueryVars } from "src/lib/queries/books";
import { initializeApollo, addApolloState } from "src/lib/apolloClient";
import { NextPage } from "next";

const SSRPage: NextPage = () => (
  <App>
    <Header />
    <InfoBox>ℹ️ This page shows how to use SSR with Apollo.</InfoBox>
    <Submit />
    <BookList />
  </App>
);

export async function getServerSideProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: ALL_BOOKS_QUERY,
    variables: allBooksQueryVars,
  });

  return addApolloState(apolloClient, {
    props: {},
  });
}

export default SSRPage;
