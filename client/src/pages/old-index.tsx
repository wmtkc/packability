import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "@styles/Home.module.css";
import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
  query {
    books {
      title
      author
    }
  }
`;

type Book = {
  title: string,
  author: string
}

const Home: NextPage = () => {
  const { data, loading, error } = useQuery(GET_BOOKS);

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div className={styles.container}>
      <Head>
        <title>Packability</title>
        <meta name="description" content="Pack your bags" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Packability</h1>

        <p className={styles.description}>Pack your bags!</p>

        <div className={styles.grid}>
          { data.books.forEach((book: Book, i: number) => (
            <div className={styles.card} key={i}>
              <h2>{book.title} &larr;</h2>
              <p>{book.author}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;
