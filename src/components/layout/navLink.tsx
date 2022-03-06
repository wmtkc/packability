import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

import ExtLink from '@components/rich-text/ext-link'

function NavLink({
    label,
    page,
    link,
}: {
    label?: string
    page?: string
    link?: string
}) {
    const { pathname } = useRouter()
    return (
        <Box key={label}>
            {page ? (
                <Link href={page}>
                    <a className={pathname === page ? 'active' : undefined}>
                        {label}
                    </a>
                </Link>
            ) : (
                <ExtLink href={link}>{label}</ExtLink>
            )}
        </Box>
    )
}

export default NavLink
