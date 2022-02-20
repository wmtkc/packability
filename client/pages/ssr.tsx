import App from "@components/App";
import InfoBox from "@components/InfoBox";
import Header from "@components/Header";
import Submit from "@components/Forms/BookSubmit";
import BookList, {
  ALL_BOOKS_QUERY,
  allBooksQueryVars,
} from "@components/BookList";
import { initializeApollo, addApolloState } from "@lib/apolloClient";
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
