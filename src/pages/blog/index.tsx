import Link from 'next/link'

import Header from '../../components/header'
import {
    getBlogLink,
    getDateStr,
    postIsPublished,
} from '../../lib/blog-helpers'
import getBlogIndex from '../../lib/notion/getBlogIndex'
import getNotionUsers from '../../lib/notion/getNotionUsers'
import { textBlock } from '../../lib/notion/renderers'
import blogStyles from '../../styles/blog.module.css'
import sharedStyles from '../../styles/shared.module.css'

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
            <Header titlePre="Blog" />
            {preview && (
                <div className={blogStyles.previewAlertContainer}>
                    <div className={blogStyles.previewAlert}>
                        <b>Note:</b>
                        {` `}Viewing in preview mode{' '}
                        <Link href={`/api/clear-preview`} passHref>
                            <button className={blogStyles.escapePreview}>
                                Exit Preview
                            </button>
                        </Link>
                    </div>
                </div>
            )}
            <div className={`${sharedStyles.layout} ${blogStyles.blogIndex}`}>
                <h1>My Notion Blog</h1>
                {posts.length === 0 && (
                    <p className={blogStyles.noPosts}>There are no posts yet</p>
                )}
                {posts.map((post: any) => {
                    return (
                        <div className={blogStyles.postPreview} key={post.Slug}>
                            <h3>
                                <span className={blogStyles.titleContainer}>
                                    {!post.Published && (
                                        <span className={blogStyles.draftBadge}>
                                            Draft
                                        </span>
                                    )}
                                    <Link
                                        href="/blog/[slug]"
                                        as={getBlogLink(post.Slug)}>
                                        <a>{post.Page}</a>
                                    </Link>
                                </span>
                            </h3>
                            {post.Authors.length > 0 && (
                                <div className="authors">
                                    By: {post.Authors.join(' ')}
                                </div>
                            )}
                            {post.Date && (
                                <div className="posted">
                                    Posted: {getDateStr(post.Date)}
                                </div>
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
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default Index
