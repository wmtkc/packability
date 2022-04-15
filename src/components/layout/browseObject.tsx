import React from 'react'

import Error from '@pages/_error'

import { ObjectSlug } from '@lib/data-objects'

import BrowseBags from './browseObject/browseBags'

function BrowseObject({ objSlug }: { objSlug: ObjectSlug }) {
    switch (objSlug) {
        case ObjectSlug.bag:
            return <BrowseBags />
        case ObjectSlug.item:
            return <></>
        case ObjectSlug.kit:
            return <></>
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObject
