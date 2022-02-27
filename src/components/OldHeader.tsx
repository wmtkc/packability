import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
    const { pathname } = useRouter()

    return (
        <header>
            <Link href="/examples">
                <a className={pathname === '/examples' ? 'is-active' : ''}>
                    Home
                </a>
            </Link>
            <Link href="/examples/about">
                <a
                    className={
                        pathname === '/examples/about' ? 'is-active' : ''
                    }>
                    About
                </a>
            </Link>
            <Link href="/examples/client-only">
                <a
                    className={
                        pathname === '/examples/client-only' ? 'is-active' : ''
                    }>
                    Client-Only
                </a>
            </Link>
            <Link href="/examples/ssr">
                <a className={pathname === '/examples/ssr' ? 'is-active' : ''}>
                    SSR
                </a>
            </Link>
        </header>
    )
}
