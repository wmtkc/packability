import { gql } from '@apollo/client'

export const CREATE_BOOK_MUTATION = gql`
    mutation Mutation($title: String!, $author: String!) {
        createBook(title: $title, author: $author) {
            id
            title
            author
        }
    }
`
