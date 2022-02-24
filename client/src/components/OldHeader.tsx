import { useRouter } from 'next/router'
import Link from 'next/link'

export default function Header() {
    const { pathname } = useRouter()

    return (
        <header>
            <Link href="/">
                <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
            </Link>
            <Link href="/examples/about">
                <a
                    className={
                        pathname === '/examples/about' ? 'is-active' : ''
                    }
                >
                    About
                </a>
            </Link>
            <Link href="/examples/client-only">
                <a
                    className={
                        pathname === '/examples/client-only' ? 'is-active' : ''
                    }
                >
                    Client-Only
                </a>
            </Link>
            <Link href="/examples/ssr">
                <a className={pathname === '/examples/ssr' ? 'is-active' : ''}>
                    SSR
                </a>
            </Link>
            <style jsx>{`
                header {
                    margin-bottom: 25px;
                }
                a {
                    font-size: 14px;
                    margin-right: 15px;
                    text-decoration: none;
                }
                .is-active {
                    text-decoration: underline;
                }
            `}</style>
        </header>
    )
}
