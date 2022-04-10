// Page to browse objects of this type
import {
    Box,
    Button,
    Modal,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'

import Error from '@pages/_error'

import CreateBagForm from '@components/forms/createBag'
import CreateItemForm from '@components/forms/createItem'

import { objectSlug } from '@lib/data-objects'

function BrowseObjects() {
    const router = useRouter()
    const objSlug = router.query.object

    const {
        isOpen: createModalIsOpen,
        onOpen: createModalOpen,
        onClose: createModalClose,
    } = useDisclosure()

    switch (objSlug) {
        case objectSlug.bag:
            return (
                <>
                    <Box>
                        <Button onClick={createModalOpen}>New Bag</Button>
                        <Box>Browse Bags</Box>
                    </Box>
                    <Modal
                        isOpen={createModalIsOpen}
                        onClose={createModalClose}>
                        <ModalOverlay />
                        <CreateBagForm onClose={createModalClose} />
                    </Modal>
                </>
            )
        case objectSlug.item:
            return (
                <>
                    <Box>
                        <Button onClick={createModalOpen}>New Item</Button>
                        <Box>Browse Items</Box>
                    </Box>
                    <Modal
                        isOpen={createModalIsOpen}
                        onClose={createModalClose}>
                        <ModalOverlay />
                        <CreateItemForm onClose={createModalClose} />
                    </Modal>
                </>
            )
        case objectSlug.kit:
            return <Box>Browse Kits</Box>
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObjects
