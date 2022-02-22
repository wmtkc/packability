import { gql } from '@apollo/client';

export const allBooksQueryVars = {
    skip: 0,
    first: 5,
}

export const ALL_BOOKS_QUERY = gql`
    query ($skip: Int, $first: Int) {
      _booksMeta {
        count
      }
      books(skip: $skip, first: $first) {
        title
        author
        id
      }
    }
`