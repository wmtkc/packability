import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import ExtLink from '@components/rich-text/ext-link'

import styles from '@styles/header.module.css'

import { useLogoutMutation, useMeQuery } from '@lib/generated/graphql'
import { accessTokenVar } from '@lib/vars/accessToken'

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
    const { data, loading } = useMeQuery()
    const [logout, { client }] = useLogoutMutation()

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
            {!loading && data && data.me ? (
                <button
                    onClick={async () => {
                        await logout()
                        accessTokenVar(null)
                        await client.resetStore()
                    }}>
                    Logout
                </button>
            ) : (
                <></>
            )}
        </header>
    )
}

export default Header
