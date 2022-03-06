import { Box, Flex, Spacer } from '@chakra-ui/react'
import { Button, useColorMode } from '@chakra-ui/react'
import React, { useEffect } from 'react'

import { useLogoutMutation, useMeQuery } from '@lib/generated/graphql'
import { accessTokenVar } from '@lib/vars/accessToken'

import NavLink from './navLink'

let navItems: { label: string; page?: string; link?: string }[] = [
    { label: 'Home', page: '/' },
    { label: 'Blog', page: '/blog' },
    { label: 'Login', page: '/login' },
    { label: 'Bags', page: '/bags' },
    { label: 'Kits', page: '/kits' },
]

function Nav() {
    const { toggleColorMode } = useColorMode()
    const { data, loading } = useMeQuery()
    const [logout, { client }] = useLogoutMutation()
    const loggedIn = !loading && data && data.me

    let accountLink = ''
    if (loggedIn) {
        accountLink = '/u/' + data.me.username + '/account'
    }

    const handleLogout = async () => {
        await logout()
        accessTokenVar(null)
        await client.resetStore()
    }

    return (
        <Flex direction="column" h="100%" justifyContent="space-between">
            <Flex direction="column">
                {navItems.map(({ label, page, link }) => (
                    <NavLink label={label} page={page} link={link} />
                ))}
            </Flex>

            <Flex direction="column">
                {loggedIn ? (
                    <>
                        <NavLink label="Account" page={accountLink} />
                        <Button onClick={handleLogout}>Logout</Button>
                    </>
                ) : (
                    <></>
                )}
                <Button onClick={toggleColorMode}>Color Mode</Button>
            </Flex>
        </Flex>
    )
}

export default Nav
