import { ParseError, renderToString } from 'katex'

function render(expression: string, displayMode: boolean): string {
    let result: string
    try {
        result = renderToString(expression, { displayMode: displayMode })
    } catch (e) {
        console.dir(e)
        // if (typeof(e) === 'object' && e instanceof ParseError) {
        //   result = e.message
        // }
        if (process.env.NODE_ENV !== 'production') {
            console.error(e)
        }
    }
    return result
}

const Equation = ({
    children,
    displayMode = true,
}: {
    children: any
    displayMode: boolean
}) => {
    return (
        <span
            dangerouslySetInnerHTML={{
                __html: render(children, displayMode),
            }}
        />
    )
}

export default Equation
