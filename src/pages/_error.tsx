import { Box } from '@chakra-ui/react'
import { NextPageContext } from 'next'

function Error({ statusCode }: { statusCode: number }) {
    console
    return <Box>{statusCode} Error</Box>
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
}

export default Error
