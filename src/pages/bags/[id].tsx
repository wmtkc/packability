// Page for individual bag
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function Bag() {
    const router = useRouter()
    const id = router.query.id
    return <Box>Bag {id}</Box>
}

export default Bag
