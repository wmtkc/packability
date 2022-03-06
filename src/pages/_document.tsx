import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="Packability Application"
                    />
                    <meta name="og:title" content="Packability" />
                    {/* <meta property="og:image" content={ogImageUrl} /> */}
                </Head>
                <body>
                    <Main />
                </body>
                <NextScript />
            </Html>
        )
    }
}

export default MyDocument
