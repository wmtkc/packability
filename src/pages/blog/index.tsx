import { Box, Flex, Heading } from '@chakra-ui/react'
import Link from 'next/link'

import {
    getBlogLink,
    getDateStr,
    postIsPublished,
} from '../../lib/blog-helpers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import { textBlock } from '../../lib/notion/renderers'

export async function getStaticProps({ preview }: { preview: any }) {
    const postsTable = await getBlogIndex()

    const authorsToGet: Set<string> = new Set()
    const posts: any = Object.keys(postsTable)
        .map(slug => {
            const post = postsTable[slug]
            // remove draft posts in production
            if (!preview && !postIsPublished(post)) {
                return null
            }
            post.Authors = post.Authors || []
            for (const author of post.Authors) {
                authorsToGet.add(author)
            }
            return post
        })
        .filter(Boolean)

    const { users } = await getNotionUsers(Array.from(authorsToGet))

    posts.map((post: any) => {
        post.Authors = post.Authors.map((id: any) => users[id].full_name)
    })

    return {
        props: {
            preview: preview || false,
            posts,
        },
        revalidate: 10,
    }
}

const Index = ({ posts = [], preview }: { posts: []; preview: any }) => {
    return (
        <>
            {preview && (
                <div>
                    <div>
                        <b>Note:</b>
                        {` `}Viewing in preview mode{' '}
                        <Link href={`/api/clear-preview`} passHref>
                            <button>Exit Preview</button>
                        </Link>
                    </div>
                </div>
            )}
            <Flex flexDir="column">
                <Heading fontSize="3xl" mb={18}>
                    Blog
                </Heading>
                {posts.length === 0 && <p>There are no posts yet</p>}
                {posts.map((post: any) => {
                    return (
                        <Box mb={12}>
                            <Heading fontSize="xl">
                                <span>
                                    {!post.Published && <span>Draft</span>}
                                    <Link
                                        href="/blog/[slug]"
                                        as={getBlogLink(post.Slug)}>
                                        <a>{post.Page}</a>
                                    </Link>
                                </span>
                            </Heading>
                            {post.Authors.length > 0 && (
                                <div>By: {post.Authors.join(' ')}</div>
                            )}
                            {post.Date && (
                                <div>Posted: {getDateStr(post.Date)}</div>
                            )}
                            <p>
                                {(!post.preview || post.preview.length === 0) &&
                                    'No preview available'}
                                {(post.preview || []).map(
                                    (block: any, idx: any) =>
                                        textBlock(
                                            block,
                                            true,
                                            `${post.Slug}${idx}`,
                                        ),
                                )}
                            </p>
                        </Box>
                    )
                })}
            </Flex>
        </>
    )
}

export default Index
