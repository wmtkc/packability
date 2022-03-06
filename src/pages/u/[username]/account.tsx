import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

function Account() {
    const router = useRouter()
    const username = router.query.username
    return <Box>Account of {username}</Box>
}

export default Account
