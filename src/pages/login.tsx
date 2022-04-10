import { Flex } from '@chakra-ui/react'

import LoginForm from '@components/forms/login'

// TODO: if user is logged in, redirect to profile

export default function Login() {
    return (
        <Flex h="100%" w="100%" justifyContent="center" alignItems="center">
            <LoginForm />
        </Flex>
    )
}
