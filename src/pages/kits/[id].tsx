// Page for individual kit
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function Kit() {
    const router = useRouter()
    const id = router.query.id
    return <Box>Kit {id}</Box>
}

export default Kit
