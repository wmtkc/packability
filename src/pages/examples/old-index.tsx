import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '@styles/Home.module.css'

import { useBooksQuery } from '@lib/generated/graphql'

type Book = {
    title: string
    author: string
}

const Home: NextPage = () => {
    const { data, loading, error } = useBooksQuery()

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
                    {data.books.map((book: Book, i: number) => (
                        <div className={styles.card} key={i}>
                            <h2>{book.title} &larr;</h2>
                            <p>{book.author}</p>
                        </div>
                    ))}
                </div>
            </main>

            <footer className={styles.footer}></footer>
        </div>
    )
}

export default Home
