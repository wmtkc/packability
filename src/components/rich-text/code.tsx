import Prism from 'prismjs'
import 'prismjs/components/prism-jsx'

const Code = ({
    children,
    language = 'javascript',
}: {
    children: any
    language: any
}) => {
    return (
        <>
            <pre>
                <code
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
