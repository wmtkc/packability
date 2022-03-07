import {
    Flex,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    Text,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import React, { ReactElement } from 'react'
import { IconType } from 'react-icons/lib'

function NavItem({
    label,
    icon,
    page,
    isSmall,
    active,
}: {
    label?: string
    icon?: IconType
    page: string
    isSmall: boolean
    active: boolean
}) {
    return (
        <Flex m={2} mt={5} flexDir="column" alignItems="center">
            <Link
                href={page}
                borderLeftStyle={active ? 'solid' : 'hidden'}
                borderLeftColor="Teal"
                borderLeftWidth={3}
                p={2}
                ml={0.5}
                borderRadius={8}
                variant="left-accent"
                _hover={{ textDecor: 'none', borderLeftStyle: 'solid' }}
                _focus={{ outline: 'none' }}>
                <Flex h={5} alignContent="center">
                    <Icon as={icon} fontSize="xl" />
                    <Text
                        ml={5}
                        flexGrow={1}
                        fontSize="l"
                        lineHeight={5}
                        display={isSmall ? 'none' : 'flex'}>
                        {label}
                    </Text>
                </Flex>
            </Link>
        </Flex>
    )
}

export default NavItem
