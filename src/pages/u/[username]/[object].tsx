// List my bags
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Error from '@pages/_error'

import { objectSlug } from '@lib/data-objects'

function ListObjects() {
    const router = useRouter()
    const username = router.query.username
    const objSlug = router.query.object

    switch (objSlug) {
        case objectSlug.bag:
            return <Box>List {username}'s Bags</Box>
        case objectSlug.item:
            return <Box>List {username}'s Items</Box>
        case objectSlug.kit:
            return <Box>List {username}'s Kits</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default ListObjects
