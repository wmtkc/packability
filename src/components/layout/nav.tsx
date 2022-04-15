import {
    Divider,
    Flex,
    Icon,
    IconButton,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useColorModeValue,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { CgToolbox } from 'react-icons/cg'
import {
    FiBookOpen,
    FiHome,
    FiMenu,
    FiMoon,
    FiShoppingBag,
    FiSun,
    FiUser,
} from 'react-icons/fi'

import { useLogoutMutation, useMeQuery } from '@lib/generated/graphql'
import { accessTokenVar } from '@lib/vars/accessToken'

import NavItem from './navItem'

let navItems: { label?: string; icon?: IconType; page: string }[] = [
    { label: 'Home', icon: FiHome, page: '/' },
    { label: 'Blog', icon: FiBookOpen, page: '/blog' },
    { label: 'Bags', icon: FiShoppingBag, page: '/bags' },
    { label: 'Kits', icon: CgToolbox, page: '/kits' },
]

function Nav() {
    const [navSmall, setNavSmall] = useState(true)
    const router = useRouter()
    const { colorMode, toggleColorMode } = useColorMode()
    const navBackground = useColorModeValue('gray.300', 'gray.700')
    const { data, loading } = useMeQuery()
    const [logout, { client }] = useLogoutMutation()
    const loggedIn = !loading && data && data.me

    const handleLogout = async () => {
        await logout()
        accessTokenVar(null)
        await client.resetStore()
        router.push('/')
    }

    const menuToggle = () => setNavSmall(!navSmall)

    // TODO: figure out collapse
    return (
        <Flex
            pos="relative"
            direction="column"
            h="95vh"
            mt="2.5vh"
            ml={2}
            boxShadow="xl"
            rounded={6}
            background={navBackground}
            justifyContent="space-between">
            <Flex as="nav" direction="column" alignItems="flex-start">
                <IconButton
                    m={2}
                    background="none"
                    _hover={{ background: 'none' }}
                    _focus={{ outline: 'none' }}
                    icon={<FiMenu />}
                    aria-label="Menu Toggle"
                    onClick={menuToggle}
                />
                {navItems.map(({ label, page, icon }, i) => (
                    <NavItem
                        key={i}
                        label={label}
                        icon={icon}
                        page={page}
                        isSmall={navSmall}
                        active={router.pathname === page}
                    />
                ))}
            </Flex>

            <Flex
                flexDir="column"
                w="100%"
                alignItems={navSmall ? 'center' : 'flex-start'}
                mb={4}>
                <IconButton
                    m={2}
                    background="none"
                    _hover={{ background: 'none' }}
                    _focus={{ outline: 'none' }}
                    icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
                    aria-label="Toggle Theme"
                    onClick={toggleColorMode}
                />
                <Divider display={navSmall ? 'none' : 'flex'} />
                <Flex align="center">
                    <Menu>
                        <MenuButton>
                            <Flex h={5} p={2} m={2.5}>
                                <Icon as={FiUser} fontSize="xl" />
                                <Text
                                    ml={5}
                                    lineHeight={5}
                                    display={navSmall ? 'none' : 'flex'}>
                                    {loggedIn ? data.me.username : 'Account'}
                                </Text>
                            </Flex>
                        </MenuButton>
                        {loggedIn ? (
                            <MenuList>
                                <Link href={'/u/' + data.me.username}>
                                    <MenuItem>Profile</MenuItem>
                                </Link>
                                <Link
                                    href={
                                        '/u/' + data.me.username + '/account'
                                    }>
                                    <MenuItem>Account</MenuItem>
                                </Link>
                                <MenuItem onClick={handleLogout}>
                                    Log Out
                                </MenuItem>
                            </MenuList>
                        ) : (
                            <MenuList>
                                <Link href="/login">
                                    <MenuItem>Log In</MenuItem>
                                </Link>
                                <Link href="/register">
                                    <MenuItem>Create An Account</MenuItem>
                                </Link>
                            </MenuList>
                        )}
                    </Menu>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Nav
