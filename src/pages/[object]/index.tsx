// Page to browse objects of this type
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Error from '@pages/_error'

import { objectSlug } from '@lib/data-objects'

function BrowseObjects() {
    const router = useRouter()
    const objSlug = router.query.object

    switch (objSlug) {
        case objectSlug.bag:
            return <Box>Browse Bags</Box>
        case objectSlug.item:
            return <Box>Browse Items</Box>
        case objectSlug.kit:
            return <Box>Browse Kits</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObjects
