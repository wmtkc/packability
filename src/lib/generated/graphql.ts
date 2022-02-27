import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type AuthData = {
  __typename?: 'AuthData';
  accessToken: Scalars['String'];
  userId: Scalars['ID'];
};

export type Bag = {
  __typename?: 'Bag';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  items?: Maybe<Array<BagItem>>;
  name: Scalars['String'];
  owner: Scalars['ID'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BagItem = {
  __typename?: 'BagItem';
  id: Scalars['ID'];
  itemId: Scalars['ID'];
  qty: Scalars['Int'];
};

export type Book = {
  __typename?: 'Book';
  author: Scalars['String'];
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Item = {
  __typename?: 'Item';
  extUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addBagItem: Bag;
  createBag: Bag;
  createBook: Book;
  createItem: Item;
  createUser: User;
  login: AuthData;
  logout: Scalars['String'];
};


export type MutationAddBagItemArgs = {
  bag: Scalars['ID'];
  item: Scalars['ID'];
  qty?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateBagArgs = {
  name: Scalars['String'];
  owner: Scalars['String'];
};


export type MutationCreateBookArgs = {
  author: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateItemArgs = {
  extUrl: Scalars['String'];
  name: Scalars['String'];
};


export type MutationCreateUserArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationLogoutArgs = {
  logout?: InputMaybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  _bagsMeta?: Maybe<_BagsMeta>;
  _booksMeta?: Maybe<_BooksMeta>;
  _itemsMeta?: Maybe<_ItemsMeta>;
  _usersMeta?: Maybe<_UsersMeta>;
  bags?: Maybe<Array<Bag>>;
  books?: Maybe<Array<Book>>;
  getBagItems?: Maybe<Array<Item>>;
  getUserBags?: Maybe<Array<Bag>>;
  isUsernameAvailable: Scalars['Boolean'];
  items?: Maybe<Array<Item>>;
  users?: Maybe<Array<User>>;
};


export type QueryBagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryBooksArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBagItemsArgs = {
  bag: Scalars['ID'];
};


export type QueryGetUserBagsArgs = {
  user: Scalars['ID'];
};


export type QueryIsUsernameAvailableArgs = {
  username: Scalars['String'];
};


export type QueryItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryUsersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};

export type User = {
  __typename?: 'User';
  bags?: Maybe<Array<Scalars['ID']>>;
  createdAt?: Maybe<Scalars['Date']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
  username: Scalars['String'];
};

export type _BagsMeta = {
  __typename?: '_bagsMeta';
  count: Scalars['Int'];
};

export type _BooksMeta = {
  __typename?: '_booksMeta';
  count: Scalars['Int'];
};

export type _ItemsMeta = {
  __typename?: '_itemsMeta';
  count: Scalars['Int'];
};

export type _UsersMeta = {
  __typename?: '_usersMeta';
  count: Scalars['Int'];
};

export type CreateBookMutationVariables = Exact<{
  title: Scalars['String'];
  author: Scalars['String'];
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Book', id: string, title: string, author: string } };

export type CreateUserMutationVariables = Exact<{
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type LoginMutationVariables = Exact<{
  usernameOrEmail: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthData', userId: string, accessToken: string } };

export type BooksQueryVariables = Exact<{
  skip?: InputMaybe<Scalars['Int']>;
  first?: InputMaybe<Scalars['Int']>;
}>;


export type BooksQuery = { __typename?: 'Query', books?: Array<{ __typename?: 'Book', title: string, author: string, id: string }> | null, _booksMeta?: { __typename?: '_booksMeta', count: number } | null };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable: boolean };


export const CreateBookDocument = gql`
    mutation CreateBook($title: String!, $author: String!) {
  createBook(title: $title, author: $author) {
    id
    title
    author
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      title: // value for 'title'
 *      author: // value for 'author'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateUserDocument = gql`
    mutation CreateUser($username: String!, $email: String!, $password: String!) {
  createUser(username: $username, email: $email, password: $password) {
    id
  }
}
    `;
export type CreateUserMutationFn = Apollo.MutationFunction<CreateUserMutation, CreateUserMutationVariables>;

/**
 * __useCreateUserMutation__
 *
 * To run a mutation, you first call `useCreateUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUserMutation, { data, loading, error }] = useCreateUserMutation({
 *   variables: {
 *      username: // value for 'username'
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useCreateUserMutation(baseOptions?: Apollo.MutationHookOptions<CreateUserMutation, CreateUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, options);
      }
export type CreateUserMutationHookResult = ReturnType<typeof useCreateUserMutation>;
export type CreateUserMutationResult = Apollo.MutationResult<CreateUserMutation>;
export type CreateUserMutationOptions = Apollo.BaseMutationOptions<CreateUserMutation, CreateUserMutationVariables>;
export const LoginDocument = gql`
    mutation Login($usernameOrEmail: String!, $password: String!) {
  login(usernameOrEmail: $usernameOrEmail, password: $password) {
    userId
    accessToken
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      usernameOrEmail: // value for 'usernameOrEmail'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const BooksDocument = gql`
    query Books($skip: Int, $first: Int) {
  books(skip: $skip, first: $first) {
    title
    author
    id
  }
  _booksMeta {
    count
  }
}
    `;

/**
 * __useBooksQuery__
 *
 * To run a query within a React component, call `useBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBooksQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useBooksQuery(baseOptions?: Apollo.QueryHookOptions<BooksQuery, BooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
      }
export function useBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BooksQuery, BooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BooksQuery, BooksQueryVariables>(BooksDocument, options);
        }
export type BooksQueryHookResult = ReturnType<typeof useBooksQuery>;
export type BooksLazyQueryHookResult = ReturnType<typeof useBooksLazyQuery>;
export type BooksQueryResult = Apollo.QueryResult<BooksQuery, BooksQueryVariables>;
export const IsUsernameAvailableDocument = gql`
    query IsUsernameAvailable($username: String!) {
  isUsernameAvailable(username: $username)
}
    `;

/**
 * __useIsUsernameAvailableQuery__
 *
 * To run a query within a React component, call `useIsUsernameAvailableQuery` and pass it any options that fit your needs.
 * When your component renders, `useIsUsernameAvailableQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useIsUsernameAvailableQuery({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useIsUsernameAvailableQuery(baseOptions: Apollo.QueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
      }
export function useIsUsernameAvailableLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>(IsUsernameAvailableDocument, options);
        }
export type IsUsernameAvailableQueryHookResult = ReturnType<typeof useIsUsernameAvailableQuery>;
export type IsUsernameAvailableLazyQueryHookResult = ReturnType<typeof useIsUsernameAvailableLazyQuery>;
export type IsUsernameAvailableQueryResult = Apollo.QueryResult<IsUsernameAvailableQuery, IsUsernameAvailableQueryVariables>;