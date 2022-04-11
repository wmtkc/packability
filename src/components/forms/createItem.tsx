import {
    Box,
    Button,
    FormControl,
    Heading,
    Input,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    Stack,
    Tooltip,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import {
    ItemType,
    useCreateItemMutation,
    useMeQuery,
} from '@lib/generated/graphql'

function CreateItemForm({ onClose }: { onClose: () => void }) {
    const router = useRouter()
    const [state, setState] = useState({
        name: '',
        type: ItemType.Product,
        loader: false,
    })

    const {
        data: { me },
        loading: loadingMe,
    } = useMeQuery()
    let [createItem, { loading: creatingItem }] = useCreateItemMutation()

    const formBackground = useColorModeValue('gray.100', 'gray.700')

    useEffect(() => {
        setState({ ...state, loader: creatingItem || loadingMe })
    }, [creatingItem, loadingMe])

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
            console.log('Your item needs a name!')
            return
        }

        try {
            const res = await createItem({
                variables: { name: state.name, type: state.type },
            })
            router.push('/items/' + res.data.createItem.id + '/edit')
        } catch (err) {
            // Toast
        }
    }

    return (
        <ModalContent>
            <ModalHeader>Create Item</ModalHeader>
            <FormControl
                p={12}
                onKeyPress={async event => {
                    if (event.key === 'Enter') {
                        await handleSubmit()
                        onClose()
                    }
                }}>
                <Heading mb={6} fontSize="xl">
                    Name Your Item
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
                <RadioGroup
                    mb={12}
                    onChange={(nextValue: ItemType) => {
                        setState({ ...state, type: nextValue })
                    }}
                    value={state.type}>
                    <Stack>
                        <Tooltip
                            label="This item is sold somewhere"
                            placement="right">
                            <Box width="fit-content">
                                <Radio value={ItemType.Product}>Product</Radio>
                            </Box>
                        </Tooltip>
                        <Tooltip
                            label="This item is one-of-a-kind"
                            placement="right">
                            <Box width="fit-content">
                                <Radio value={ItemType.NonProduct}>
                                    Custom
                                </Radio>
                            </Box>
                        </Tooltip>
                        <Tooltip
                            label="This item is generic, any brand will do"
                            placement="right">
                            <Box width="fit-content">
                                <Radio value={ItemType.Generic}>Generic</Radio>
                            </Box>
                        </Tooltip>
                    </Stack>
                </RadioGroup>
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

export default CreateItemForm
