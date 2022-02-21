import { gql } from '@apollo/client';

export const CREATE_USER_MUTATION = gql`
  mutation Mutation($username: String!, $email: String!, $password: String!) {
      createUser(username: $username, email: $email, password: $password) {
        id
      }
  }
`