import dynamic from 'next/dynamic'
import { ReactNode } from 'react'

import ExtLink from './ext-link'

// wack
type DynamicType = {
    ['ol']: string
    ['ul']: string
    ['li']: string
    ['p']: string
    ['blockquote']: string
    ['a']: ReactNode
    ['Code']: ReactNode
    ['Counter']: ReactNode
    ['Equation']: ReactNode
    [key: string]: string | ReactNode
}

const Dynamic: DynamicType = {
    // default tags
    ol: 'ol',
    ul: 'ul',
    li: 'li',
    p: 'p',
    blockquote: 'blockquote',
    a: ExtLink,

    Code: dynamic(() => import('./code')),
    Counter: dynamic(() => import('./counter')),
    Equation: dynamic(() => import('./equation')),
}

export default Dynamic
