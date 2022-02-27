import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

import styles from '@styles/components/code.module.css'

const Code = ({
    children,
    language = 'javascript',
}: {
    children: any
    language: any
}) => {
    return (
        <>
            <pre className={styles.pre}>
                <code
                    className={styles.code}
                    dangerouslySetInnerHTML={{
                        __html: Prism.highlight(
                            children,
                            Prism.languages[language.toLowerCase()] ||
                                Prism.languages.javascript,
                            language,
                        ),
                    }}
                />
            </pre>
        </>
    )
}

export default Code
