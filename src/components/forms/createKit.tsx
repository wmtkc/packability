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

import { useCreateKitMutation, useMeQuery } from '@lib/generated/graphql'

function CreateKitForm({ onClose }: { onClose: () => void }) {
    const router = useRouter()
    const [state, setState] = useState({
        name: '',
        loader: false,
    })

    const {
        data: { me },
        loading: loadingMe,
    } = useMeQuery()
    let [createKit, { loading: creatingKit }] = useCreateKitMutation()

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    useEffect(() => {
        setState({ ...state, loader: creatingKit || loadingMe })
    }, [creatingKit, loadingMe])

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
            console.log('Your kit needs a name!')
            return
        }

        try {
            const res = await createKit({
                variables: { name: state.name, owner: me.id },
            })
            router.push('/kits/' + res.data.createKit.id + '/edit')
        } catch (err) {
            // Toast
        }
    }

    return (
        <ModalContent>
            <ModalHeader>Create Kit</ModalHeader>
            <FormControl
                p={12}
                onKeyPress={async event => {
                    if (event.key === 'Enter') {
                        await handleSubmit()
                        onClose()
                    }
                }}>
                <Heading mb={6} fontSize="xl">
                    Name Your Kit
                </Heading>
                <Input
                    variant="filled"
                    mb={12}
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
                        onClick={async () => {
                            await handleSubmit()
                            onClose()
                        }}>
                        Create
                    </Button>
                </ModalFooter>
            </FormControl>
        </ModalContent>
    )
}

export default CreateKitForm
