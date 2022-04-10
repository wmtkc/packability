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
import { ReactElement, useState } from 'react'

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
        ModalForm,
    }: {
        object: ObjectName
        ModalForm: ReactElement
    }) => (
        <>
            <Box>
                <Button textTransform="capitalize" onClick={createModalOpen}>
                    New {object}
                </Button>
                <Box textTransform="capitalize">Browse {object}s</Box>
            </Box>
            <Modal isOpen={createModalIsOpen} onClose={createModalClose}>
                <ModalOverlay />
                {ModalForm}
            </Modal>
        </>
    )

    let modalForm = <></>
    switch (objSlug) {
        case ObjectSlug.bag:
            modalForm = <CreateBagForm onClose={createModalClose} />
            return (
                <BrowseLayout object={ObjectName.bag} ModalForm={modalForm} />
            )
        case ObjectSlug.item:
            modalForm = <CreateItemForm onClose={createModalClose} />
            return (
                <BrowseLayout object={ObjectName.item} ModalForm={modalForm} />
            )
        case ObjectSlug.kit:
            modalForm = <CreateKitForm onClose={createModalClose} />
            return (
                <BrowseLayout object={ObjectName.kit} ModalForm={modalForm} />
            )
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObjects
