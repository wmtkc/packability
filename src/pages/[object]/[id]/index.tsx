// Page for individual data object
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Error from '@pages/_error'

import { ObjectSlug } from '@lib/data-objects'

function Object() {
    const router = useRouter()
    const objSlug = router.query.object
    const id = router.query.id

    switch (objSlug) {
        case ObjectSlug.bag:
            return <Box>View Bag {id}</Box>
        case ObjectSlug.item:
            return <Box>View Item {id}</Box>
        case ObjectSlug.kit:
            return <Box>View Kit {id}</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default Object
