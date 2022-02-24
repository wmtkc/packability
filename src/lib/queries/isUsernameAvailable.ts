import { gql } from '@apollo/client'

export const IS_USERNAME_AVAILABLE_QUERY = gql`
    query Query($username: String!) {
        isUsernameAvailable(username: $username)
    }
`
