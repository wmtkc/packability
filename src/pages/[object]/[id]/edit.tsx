// Edit page for individual object
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Error from '@pages/_error'

import { objectSlug } from '@lib/data-objects'

function EditObject() {
    const router = useRouter()
    const objSlug = router.query.object
    const id = router.query.id
    // check if current user owns this object, otherwise redirect to index: /[object]/[id]
    switch (objSlug) {
        case objectSlug.bag:
            return <Box>Edit Bag {id}</Box>
        case objectSlug.item:
            return <Box>Edit Item {id}</Box>
        case objectSlug.kit:
            return <Box>Edit Kit {id}</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default EditObject
