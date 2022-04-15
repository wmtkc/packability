import { NetworkStatus } from '@apollo/client'
import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Link,
    Text,
    useColorModeValue,
} from '@chakra-ui/react'
//import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'

import { useBagsQuery } from '@lib/generated/graphql'

function BrowseBags() {
    const gridBorder = useColorModeValue('gray.700', 'gray.500')

    const { loading, error, data, fetchMore, networkStatus } = useBagsQuery({
        variables: {
            first: 12,
        },
        notifyOnNetworkStatusChange: true,
    })
    const loadingMoreBags = networkStatus === NetworkStatus.fetchMore

    if (error) console.log(error)
    if (loading && !loadingMoreBags) return <div>Loading</div>

    const { bags, _bagsMeta } = data

    const areMoreBags = bags.length < _bagsMeta.count

    const loadMoreBags = async () => {
        await fetchMore({
            variables: {
                skip: bags.length,
            },
        })
    }

    // TODO: fix bug where opening with size too small to scroll prevents this function from ever being run
    const handleScroll = async ({ currentTarget }: { currentTarget: any }) => {
        if (
            areMoreBags &&
            !loadingMoreBags &&
            (currentTarget.scrollHeight + 1 == currentTarget.clientHeight ||
                currentTarget.scrollTop + currentTarget.clientHeight >=
                    currentTarget.scrollHeight)
        ) {
            // if at bottom of page, load more
            await loadMoreBags()
        }
    }

    return (
        <Grid
            py={6}
            px={12}
            w="100%"
            h="100%"
            templateColumns="repeat(auto-fill, 15rem)"
            gap={6}
            justifyContent="center"
            overflowY="scroll"
            onScroll={e => handleScroll(e)}>
            {bags.map((bag, i) => {
                return (
                    <GridItem key={i}>
                        <Flex
                            flexDir="column"
                            rounded={6}
                            borderWidth="2px"
                            borderStyle="solid"
                            borderColor={gridBorder}
                            overflow="hidden"
                            boxShadow="md">
                            <NextLink href={'/bags/' + bag.id}>
                                <Image w="15rem" src="/backpack.png" />
                            </NextLink>
                            <Box mx={2} my={1}>
                                <NextLink href={'/bags/' + bag.id}>
                                    <Link>
                                        <Heading
                                            textTransform="capitalize"
                                            fontSize="lg">
                                            {bag.name}
                                        </Heading>
                                    </Link>
                                </NextLink>
                                {bag.owner ? (
                                    <NextLink href={'/u/' + bag.owner.username}>
                                        <Link>
                                            <Text textDecoration="none">
                                                {bag.owner.name
                                                    ? bag.owner.name
                                                    : bag.owner.username}
                                            </Text>
                                        </Link>
                                    </NextLink>
                                ) : (
                                    <Box h="18pt"></Box>
                                )}
                            </Box>
                        </Flex>
                    </GridItem>
                )
            })}
        </Grid>
    )
}

export default BrowseBags
