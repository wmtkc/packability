import {
    Button,
    Flex,
    Heading,
    Input,
    useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import { MeDocument, MeQuery, useLoginMutation } from '@lib/generated/graphql'
import { accessTokenVar } from '@lib/vars/accessToken'

export default function Login() {
    const [state, setState] = useState({
        usernameOrEmail: '',
        password: '',

        loader: false,
    })

    let [login, { loading: loggingIn, error: loginError }] = useLoginMutation()

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    useEffect(() => {
        // Toast
    }, [loginError])

    useEffect(() => {
        setState({ ...state, loader: loggingIn })
    }, [loggingIn])

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        try {
            const res = await login({
                variables: {
                    usernameOrEmail: state.usernameOrEmail,
                    password: state.password,
                },
                update: (cache, { data }) => {
                    if (!data) return null
                    cache.writeQuery<MeQuery>({
                        query: MeDocument,
                        data: {
                            me: data.login.user,
                        },
                    })
                },
            })

            if (!res || !res?.data) throw new Error('Response Not Received')

            accessTokenVar(res.data.login.accessToken)
        } catch (err) {
            // Toast
        }
    }

    return (
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
            <Heading mb={6}>Login</Heading>
            <Input
                placeholder="username or email"
                variant="filled"
                mb={3}
                value={state.usernameOrEmail}
                onChange={handleChange}
                name="usernameOrEmail"
                type="text"
                required
            />
            <Input
                placeholder="password"
                variant="filled"
                mb={6}
                value={state.password}
                onChange={handleChange}
                name="password"
                type="password"
                required
            />
            <Button colorScheme="teal" onClick={handleSubmit}>
                Log In
            </Button>
        </Flex>
    )
}
