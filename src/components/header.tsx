import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

import styles from '../styles/header.module.css'
import ExtLink from './rich-text/ext-link'

const navItems: { label: string; page?: string; link?: string }[] = [
    { label: 'Home', page: '/' },
    { label: 'Blog', page: '/blog' },
    { label: 'Login', page: '/login' },
    { label: 'Account', page: '/account' },
]

const ogImageUrl = 'https://notion-blog.now.sh/og-image.png'

const Header = ({ titlePre = '' }) => {
    const { pathname } = useRouter()

    return (
        <header className={styles.header}>
            <Head>
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
        </header>
    )
}

export default Header