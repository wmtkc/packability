import {
    Button,
    FormControl,
    Heading,
    Input,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

function EditItemForm() {
    const router = useRouter()
    const [state, setState] = useState({
        usernameOrEmail: '',
        password: '',

        loader: false,
    })

    const formBackground = useColorModeValue('gray.100', 'gray.700')

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
        } catch (err) {
            // Toast
        }
    }

    return (
        <FormControl
            display="flex"
            flexDir="column"
            background={formBackground}
            w="20rem"
            p={12}
            rounded={6}
            onKeyPress={event => {
                if (event.key === 'Enter') {
                    handleSubmit()
                }
            }}>
            <Heading mb={6}>Login</Heading>
            <Input
                placeholder=""
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
            <Button colorScheme="teal" onClick={handleSubmit} type="submit">
                Log In
            </Button>
        </FormControl>
    )
}

export default EditItemForm
