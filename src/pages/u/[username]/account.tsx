import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import React from 'react'

import { useMeQuery } from '@lib/generated/graphql'

function Account() {
    const { data, loading } = useMeQuery()
    const router = useRouter()
    const usernameQuery = router.query.username

    if (loading) {
        return <Box>Loading...</Box>
    } else if (data.me?.username !== usernameQuery) {
        // if not authenticated
        router.push('/')
    }

    return <Box>Account of {usernameQuery}</Box>
}

export default Account
