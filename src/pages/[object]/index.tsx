// Page to browse objects of this type
import {
    Box,
    Button,
    Flex,
    Modal,
    ModalOverlay,
    useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import Error from '@pages/_error'

import CreateBagForm from '@components/forms/createBag'
import CreateItemForm from '@components/forms/createItem'
import CreateKitForm from '@components/forms/createKit'

import { ObjectName, ObjectSlug } from '@lib/data-objects'

function BrowseObjects() {
    const router = useRouter()
    const objSlug = router.query.object

    const {
        isOpen: createModalIsOpen,
        onOpen: createModalOpen,
        onClose: createModalClose,
    } = useDisclosure()

    const BrowseLayout = ({
        object,
        children,
    }: {
        object: ObjectName
        children: ReactNode
    }) => (
        <>
            <Flex w="90%" justifyContent="flex-end">
                <Button textTransform="capitalize" onClick={createModalOpen}>
                    + New {object}
                </Button>
            </Flex>
            <Box textTransform="capitalize">Browse {object}s</Box>
            <Modal isOpen={createModalIsOpen} onClose={createModalClose}>
                <ModalOverlay />
                {children}
            </Modal>
        </>
    )

    switch (objSlug) {
        case ObjectSlug.bag:
            return (
                <BrowseLayout object={ObjectName.bag}>
                    <CreateBagForm onClose={createModalClose} />
                </BrowseLayout>
            )
        case ObjectSlug.item:
            return (
                <BrowseLayout object={ObjectName.item}>
                    <CreateItemForm onClose={createModalClose} />
                </BrowseLayout>
            )
        case ObjectSlug.kit:
            return (
                <BrowseLayout object={ObjectName.kit}>
                    <CreateKitForm onClose={createModalClose} />
                </BrowseLayout>
            )
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObjects
