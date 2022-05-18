import {
    Flex,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    Text,
    useColorModeValue,
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
    const navBackground = useColorModeValue('gray.300', 'gray.700')
    return (
        <Flex m={2} mt={5} flexDir="column" alignItems="center">
            <Link
                href={page}
                borderLeftColor={active ? 'Teal' : navBackground}
                borderLeftWidth={3}
                p={2}
                ml={0.5}
                variant="left-accent"
                _hover={{ textDecor: 'none', borderLeftColor: 'Teal' }}
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
