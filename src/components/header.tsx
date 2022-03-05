import { useReactiveVar } from '@apollo/client'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import { useMeQuery } from '@lib/generated/graphql'
import { accessTokenVar } from '@lib/vars/authTokens'

import styles from '../styles/header.module.css'
import ExtLink from './rich-text/ext-link'

const navItems: { label: string; page?: string; link?: string }[] = [
    { label: 'Home', page: '/' },
    { label: 'Blog', page: '/blog' },
    { label: 'Login', page: '/login' },
    { label: 'Account', page: '/account' },
    { label: 'Book Example', page: '/examples' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
    const { pathname } = useRouter()
    const { data, loading } = useMeQuery({ fetchPolicy: 'network-only' })

    let meBody = null

    if (loading) {
        meBody = null
    } else if (data && data.me) {
        meBody = <div>Logged in as {data.me.email}</div>
    } else {
        meBody = <div>Not Logged In</div>
    }

    return (
        <header className={styles.header}>
            <Head>
                {/** TODO: Replace meta tags */}
                <title>{titlePre ? `${titlePre} |` : ''} Packability</title>
                <meta
                    name="description"
                    content="An example Next.js site using Notion for the blog"
                />
                <meta name="og:title" content="Packability" />
                <meta property="og:image" content={ogImageUrl} />
                <meta name="twitter:site" content="@_ijjk" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:image" content={ogImageUrl} />
            </Head>
            <ul>
                {navItems.map(({ label, page, link }) => (
                    <li key={label}>
                        {page ? (
                            <Link href={page}>
                                <a
                                    className={
                                        pathname === page ? 'active' : undefined
                                    }>
                                    {label}
                                </a>
                            </Link>
                        ) : (
                            <ExtLink href={link}>{label}</ExtLink>
                        )}
                    </li>
                ))}
            </ul>
            {meBody}
        </header>
    )
}

export default Header
