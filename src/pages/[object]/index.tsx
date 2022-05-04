// Page to browse objects of this type
import {
    Box,
    Button,
    Flex,
    Heading,
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
import BrowseObject from '@components/layout/browseObject'

import { ObjectName, ObjectSlug } from '@lib/data-objects'
import { useMeQuery } from '@lib/generated/graphql'

function BrowseObjects() {
    const { data, loading } = useMeQuery()
    const loggedIn = !loading && data && data.me

    const router = useRouter()
    const objSlug = router.query.object

    const {
        isOpen: createModalIsOpen,
        onOpen: createModalOpen,
        onClose: createModalClose,
    } = useDisclosure()

    const BrowseLayout = ({
        object,
        slug,
        children,
    }: {
        object: ObjectName
        slug: ObjectSlug
        children: ReactNode
    }) => (
        <>
            <Flex
                w="100%"
                px={12}
                mt={2}
                pb={5}
                borderBottom="2px solid white"
                boxShadow="md"
                justifyContent="space-between"
                position="sticky">
                <Heading fontSize="3xl" textTransform="capitalize">
                    Browse {object}s
                </Heading>
                {loggedIn ? (
                    <Button
                        textTransform="capitalize"
                        onClick={createModalOpen}>
                        + New {object}
                    </Button>
                ) : (
                    <></>
                )}
            </Flex>
            <BrowseObject objSlug={slug} />
            <Modal isOpen={createModalIsOpen} onClose={createModalClose}>
                <ModalOverlay />
                {children}
            </Modal>
        </>
    )

    switch (objSlug) {
        case ObjectSlug.bag:
            return (
                <BrowseLayout object={ObjectName.bag} slug={objSlug}>
                    <CreateBagForm onClose={createModalClose} />
                </BrowseLayout>
            )
        case ObjectSlug.item:
            return (
                <BrowseLayout object={ObjectName.item} slug={objSlug}>
                    <CreateItemForm onClose={createModalClose} />
                </BrowseLayout>
            )
        case ObjectSlug.kit:
            return (
                <BrowseLayout object={ObjectName.kit} slug={objSlug}>
                    <CreateKitForm onClose={createModalClose} />
                </BrowseLayout>
            )
        default:
            return <Error statusCode={404} />
    }
}

export default BrowseObjects
