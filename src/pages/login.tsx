import { Flex } from '@chakra-ui/react'

import LoginForm from '@components/forms/Login'
import RegisterForm from '@components/forms/Register'
import Header from '@components/header'

export default function Login() {
    return (
        <>
            <Header titlePre="Login" />
            <Flex height="100vh" alignItems="center" justifyContent="center">
                <RegisterForm />
                <LoginForm />
            </Flex>
        </>
    )
}
