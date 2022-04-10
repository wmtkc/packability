import {
    Button,
    FormControl,
    Heading,
    Input,
    ModalContent,
    ModalFooter,
    ModalHeader,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { useCreateBagMutation, useMeQuery } from '@lib/generated/graphql'

function CreateBagForm({ onClose }: { onClose: () => void }) {
    const router = useRouter()
    const [state, setState] = useState({
        name: '',
        loader: false,
    })

    const {
        data: { me },
        loading: loadingMe,
    } = useMeQuery()
    let [createBag, { loading: creatingBag }] = useCreateBagMutation()

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    useEffect(() => {
        setState({ ...state, loader: creatingBag || loadingMe })
    }, [creatingBag, loadingMe])

    const handleChange = (event: { target: { name: any; value: any } }) => {
        const name = event.target.name
        const value = event.target.value
        setState({
            ...state,
            [name]: value,
        })
    }

    const handleSubmit = async () => {
        if (state.name === '') {
            console.log('Your bag needs a name!')
            return
        }

        try {
            const res = await createBag({
                variables: { name: state.name, owner: me.id },
            })
            router.push('/bags/' + res.data.createBag.id + '/edit')
        } catch (err) {
            // Toast
        }
    }

    return (
        <ModalContent>
            <ModalHeader>Create Bag</ModalHeader>
            <FormControl
                p={12}
                onKeyPress={event => {
                    if (event.key === 'Enter') {
                        handleSubmit()
                    }
                }}>
                <Heading mb={6} fontSize="xl">
                    Name Your Bag
                </Heading>
                <Input
                    variant="filled"
                    mb={6}
                    value={state.name}
                    onChange={handleChange}
                    name="name"
                    type="text"
                    required
                />
                <ModalFooter>
                    <Button variant="ghost" mr={3} onClick={onClose}>
                        Cancel
                    </Button>
                    <Button
                        colorScheme="teal"
                        type="submit"
                        onClick={() => {
                            handleSubmit()
                            onClose()
                        }}>
                        Create
                    </Button>
                </ModalFooter>
            </FormControl>
        </ModalContent>
    )
}

export default CreateBagForm
