// List my bags
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

import Error from '@pages/_error'

import { ObjectSlug } from '@lib/data-objects'

function ListObjects() {
    const router = useRouter()
    const username = router.query.username
    const objSlug = router.query.object

    switch (objSlug) {
        case ObjectSlug.bag:
            return <Box>List {username}'s Bags</Box>
        case ObjectSlug.item:
            return <Box>List {username}'s Items</Box>
        case ObjectSlug.kit:
            return <Box>List {username}'s Kits</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default ListObjects
