/**
 * Layout for all pages
 */
import { Flex } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'

import Nav from './nav'

function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Packability</title>
            </Head>
            <Flex h="100vh" maxHeight="100vh" w="100vw">
                <Nav />
                <Flex
                    h="100%"
                    w="100%"
                    pt="10vh"
                    alignItems="center"
                    justifyContent="center"
                    overflow="scroll">
                    {children}
                </Flex>
            </Flex>
        </>
    )
}

export default Layout
