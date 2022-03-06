import { Flex } from '@chakra-ui/react'

import LoginForm from '@components/forms/login'
import RegisterForm from '@components/forms/register'

export default function Login() {
    return (
        <>
            <RegisterForm />
            <LoginForm />
        </>
    )
}
