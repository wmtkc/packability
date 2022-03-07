import { ColorModeScript } from '@chakra-ui/react'
import createCache from '@emotion/cache'
import createEmotionServer from '@emotion/server/create-instance'
import Document, {
    DocumentContext,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'

const emotionCache = createCache({
    key: 'css',
})
const { extractCritical } = createEmotionServer(emotionCache)

// TODO: implement flashless https://github.com/chakra-ui/chakra-ui/issues/1878
class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const initialProps = await Document.getInitialProps(ctx)
        const styles = extractCritical(initialProps.html)
        return {
            ...initialProps,
            styles: [
                initialProps.styles,
                <style
                    key="emotion-css"
                    dangerouslySetInnerHTML={{ __html: styles.css }}
                    data-emotion-css={styles.ids.join(' ')}
                />,
            ],
        }
    }
    render() {
        return (
            <Html lang="en">
                <Head>
                    <meta
                        name="description"
                        content="Packability Application"
                    />
                    <meta name="og:title" content="Packability" />
                    <meta charSet="UTF-8" />
                    <meta content="ie=edge" httpEquiv="X-UA-Compatible" />
                    {/* <meta property="og:image" content={ogImageUrl} /> */}
                </Head>
                <body>
                    <ColorModeScript />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
