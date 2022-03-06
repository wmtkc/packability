import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function Index() {
    const router = useRouter()
    const username = router.query.username
    return <Box>Profile of {username}</Box>
}

export default Index
