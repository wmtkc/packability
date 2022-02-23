import { gql } from "@apollo/client";

export const LOGIN_MUTATION = gql`
  mutation Mutation($usernameOrEmail: String!, $password: String!) {
    login(usernameOrEmail: $usernameOrEmail, password: $password) {
      userId
      token
      expiresIn
    }
  }
`;
