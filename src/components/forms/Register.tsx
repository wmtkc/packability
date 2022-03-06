import {
    Button,
    Flex,
    Heading,
    Input,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
import { useEffect, useState } from 'react'

import {
    useCreateUserMutation,
    useIsUsernameAvailableQuery,
} from '@lib/generated/graphql'

function RegisterForm() {
    const [state, setState] = useState({
        email: '',
        username: '',
        password: '',
        passwordVerify: '',

        message: '',
        loader: false,
        canSubmit: false,
    })

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    let {
        loading: usernameLoading,
        error,
        data,
    } = useIsUsernameAvailableQuery({
        variables: {
            username: state.username,
        },
    })

    let [createUser, { loading: creatingUser }] = useCreateUserMutation()

    useEffect(() => {
        setState({ ...state, loader: usernameLoading || creatingUser })
    }, [usernameLoading, creatingUser])

    useEffect(() => {
        if (error) setState({ ...state, message: error.message })
    }, [error])

    useEffect(() => {
        if (!usernameLoading && !data?.isUsernameAvailable) {
            setState({ ...state, message: 'Username Already Taken' })
        } else if (state.message !== '') {
            setState({ ...state, message: '' })
        }
    }, [data])

    useEffect(() => {
        const { password, passwordVerify } = state

        const passwordsDoNotMatch =
            password !== passwordVerify &&
            password !== '' &&
            passwordVerify !== ''
        if (passwordsDoNotMatch) {
            setState({
                ...state,
                message: 'Passwords do not match',
                canSubmit: false,
            })
        } else if (state.message !== '' || !state.canSubmit) {
            setState({
                ...state,
                message: '',
                canSubmit: true,
            })
        }
    }, [state.password, state.passwordVerify])

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async (event: {
        preventDefault: () => void
        target: any
    }) => {
        if (state.password !== state.passwordVerify) {
            setState({ ...state, message: 'Passwords do not match' })
            return
        }

        // TODO: make this more robust
        if (!state.email.includes('@')) {
            setState({
                ...state,
                message: 'Please enter a valid email address',
            })
            return
        }

        try {
            const res = await createUser({
                variables: {
                    email: state.email,
                    username: state.username,
                    password: state.password,
                },
            })
            console.log(res)
        } catch (err) {
            setState({ ...state, message: err.message })
        }
    }

    return (
        <Flex direction="column" background={formBackground} p={12} rounded={6}>
            <Heading mb={6}>Register User</Heading>
            <Input
                placeholder="email"
                variant="filled"
                mb={3}
                value={state.email}
                onChange={handleChange}
                name="email"
                type="email"
                required
            />
            <Input
                placeholder="username"
                variant="filled"
                mb={3}
                value={state.username}
                onChange={handleChange}
                name="username"
                type="text"
                required
            />
            <Input
                placeholder="password"
                variant="filled"
                mb={3}
                value={state.password}
                onChange={handleChange}
                name="password"
                type="password"
                required
            />
            <Input
                placeholder="verify password"
                variant="filled"
                mb={6}
                value={state.passwordVerify}
                onChange={handleChange}
                name="passwordVerify"
                type="password"
                required
            />
            <Button
                colorScheme="teal"
                mb={6}
                onClick={handleSubmit}
                disabled={!state.canSubmit}>
                Register
            </Button>
            <Text visibility={state.message ? 'visible' : 'hidden'}>
                {state.message}
            </Text>
        </Flex>
    )
}

export default RegisterForm
