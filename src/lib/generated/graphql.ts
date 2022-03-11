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
  user: User;
};

export type Bag = {
  __typename?: 'Bag';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  kits: Array<BagKit>;
  name: Scalars['String'];
  owner: Scalars['ID'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type BagKit = {
  __typename?: 'BagKit';
  id: Scalars['ID'];
  isDefault: Scalars['Boolean'];
  kitId: Scalars['ID'];
  qty: Scalars['Int'];
};

export type Item = {
  __typename?: 'Item';
  extUrl?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type: ItemType;
};

export enum ItemType {
  Generic = 'GENERIC',
  NonProduct = 'NON_PRODUCT',
  Product = 'PRODUCT'
}

export type Kit = {
  __typename?: 'Kit';
  createdAt?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  items?: Maybe<Array<KitItem>>;
  name: Scalars['String'];
  owner: Scalars['ID'];
  type: Scalars['String'];
  updatedAt?: Maybe<Scalars['Date']>;
};

export type KitItem = {
  __typename?: 'KitItem';
  id: Scalars['ID'];
  itemId: Scalars['ID'];
  qty: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  _?: Maybe<Scalars['Boolean']>;
  addBagKit: Bag;
  addKitItem: Kit;
  createBag: Bag;
  createItem: Item;
  createKit: Kit;
  createUser: User;
  login: AuthData;
  logout: Scalars['Boolean'];
};


export type MutationAddBagKitArgs = {
  bag: Scalars['ID'];
  kit: Scalars['ID'];
  qty?: InputMaybe<Scalars['Int']>;
};


export type MutationAddKitItemArgs = {
  item: Scalars['ID'];
  kit: Scalars['ID'];
  qty?: InputMaybe<Scalars['Int']>;
};


export type MutationCreateBagArgs = {
  name: Scalars['String'];
  owner: Scalars['String'];
};


export type MutationCreateItemArgs = {
  extUrl?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  type: ItemType;
};


export type MutationCreateKitArgs = {
  name: Scalars['String'];
  owner: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  _?: Maybe<Scalars['Boolean']>;
  _bagsMeta?: Maybe<_BagsMeta>;
  _itemsMeta?: Maybe<_ItemsMeta>;
  _kitsMeta?: Maybe<_KitsMeta>;
  _usersMeta?: Maybe<_UsersMeta>;
  bags?: Maybe<Array<Bag>>;
  getBagKits: Array<Kit>;
  getKitItems?: Maybe<Array<Item>>;
  getUserBags?: Maybe<Array<Bag>>;
  isUsernameAvailable: Scalars['Boolean'];
  items?: Maybe<Array<Item>>;
  kits?: Maybe<Array<Kit>>;
  me?: Maybe<User>;
  users?: Maybe<Array<User>>;
};


export type QueryBagsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
};


export type QueryGetBagKitsArgs = {
  bag: Scalars['ID'];
};


export type QueryGetKitItemsArgs = {
  kit: Scalars['ID'];
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


export type QueryKitsArgs = {
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

export type _ItemsMeta = {
  __typename?: '_itemsMeta';
  count: Scalars['Int'];
};

export type _KitsMeta = {
  __typename?: '_kitsMeta';
  count: Scalars['Int'];
};

export type _UsersMeta = {
  __typename?: '_usersMeta';
  count: Scalars['Int'];
};

export type AddBagKitMutationVariables = Exact<{
  bag: Scalars['ID'];
  kit: Scalars['ID'];
}>;


export type AddBagKitMutation = { __typename?: 'Mutation', addBagKit: { __typename?: 'Bag', id: string, kits: Array<{ __typename?: 'BagKit', kitId: string, isDefault: boolean }> } };

export type MutationMutationVariables = Exact<{
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type MutationMutation = { __typename?: 'Mutation', createBag: { __typename?: 'Bag', id: string, name: string } };

export type CreateItemMutationVariables = Exact<{
  name: Scalars['String'];
  type: ItemType;
}>;


export type CreateItemMutation = { __typename?: 'Mutation', createItem: { __typename?: 'Item', id: string, name: string, type: ItemType, extUrl?: string | null } };

export type AddKitItemMutationVariables = Exact<{
  kit: Scalars['ID'];
  item: Scalars['ID'];
  qty?: InputMaybe<Scalars['Int']>;
}>;


export type AddKitItemMutation = { __typename?: 'Mutation', addKitItem: { __typename?: 'Kit', id: string, items?: Array<{ __typename?: 'KitItem', itemId: string, qty: number }> | null } };

export type CreateKitMutationVariables = Exact<{
  name: Scalars['String'];
  owner: Scalars['String'];
}>;


export type CreateKitMutation = { __typename?: 'Mutation', createKit: { __typename?: 'Kit', id: string, type: string, name: string } };

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


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AuthData', accessToken: string, user: { __typename?: 'User', id: string, email: string, username: string } } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type GetBagKitsQueryVariables = Exact<{
  bag: Scalars['ID'];
}>;


export type GetBagKitsQuery = { __typename?: 'Query', getBagKits: Array<{ __typename?: 'Kit', id: string, type: string, name: string, owner: string, items?: Array<{ __typename?: 'KitItem', itemId: string, qty: number }> | null }> };

export type GetKitItemsQueryVariables = Exact<{
  kit: Scalars['ID'];
}>;


export type GetKitItemsQuery = { __typename?: 'Query', getKitItems?: Array<{ __typename?: 'Item', id: string, name: string, extUrl?: string | null }> | null };

export type GetUserBagsQueryVariables = Exact<{
  user: Scalars['ID'];
}>;


export type GetUserBagsQuery = { __typename?: 'Query', getUserBags?: Array<{ __typename?: 'Bag', id: string, name: string, kits: Array<{ __typename?: 'BagKit', kitId: string, isDefault: boolean }> }> | null };

export type IsUsernameAvailableQueryVariables = Exact<{
  username: Scalars['String'];
}>;


export type IsUsernameAvailableQuery = { __typename?: 'Query', isUsernameAvailable: boolean };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'User', id: string, email: string, username: string } | null };


export const AddBagKitDocument = gql`
    mutation AddBagKit($bag: ID!, $kit: ID!) {
  addBagKit(bag: $bag, kit: $kit) {
    id
    kits {
      kitId
      isDefault
    }
  }
}
    `;
export type AddBagKitMutationFn = Apollo.MutationFunction<AddBagKitMutation, AddBagKitMutationVariables>;

/**
 * __useAddBagKitMutation__
 *
 * To run a mutation, you first call `useAddBagKitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddBagKitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addBagKitMutation, { data, loading, error }] = useAddBagKitMutation({
 *   variables: {
 *      bag: // value for 'bag'
 *      kit: // value for 'kit'
 *   },
 * });
 */
export function useAddBagKitMutation(baseOptions?: Apollo.MutationHookOptions<AddBagKitMutation, AddBagKitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddBagKitMutation, AddBagKitMutationVariables>(AddBagKitDocument, options);
      }
export type AddBagKitMutationHookResult = ReturnType<typeof useAddBagKitMutation>;
export type AddBagKitMutationResult = Apollo.MutationResult<AddBagKitMutation>;
export type AddBagKitMutationOptions = Apollo.BaseMutationOptions<AddBagKitMutation, AddBagKitMutationVariables>;
export const MutationDocument = gql`
    mutation Mutation($name: String!, $owner: String!) {
  createBag(name: $name, owner: $owner) {
    id
    name
  }
}
    `;
export type MutationMutationFn = Apollo.MutationFunction<MutationMutation, MutationMutationVariables>;

/**
 * __useMutationMutation__
 *
 * To run a mutation, you first call `useMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [mutationMutation, { data, loading, error }] = useMutationMutation({
 *   variables: {
 *      name: // value for 'name'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useMutationMutation(baseOptions?: Apollo.MutationHookOptions<MutationMutation, MutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<MutationMutation, MutationMutationVariables>(MutationDocument, options);
      }
export type MutationMutationHookResult = ReturnType<typeof useMutationMutation>;
export type MutationMutationResult = Apollo.MutationResult<MutationMutation>;
export type MutationMutationOptions = Apollo.BaseMutationOptions<MutationMutation, MutationMutationVariables>;
export const CreateItemDocument = gql`
    mutation CreateItem($name: String!, $type: ItemType!) {
  createItem(name: $name, type: $type) {
    id
    name
    type
    extUrl
  }
}
    `;
export type CreateItemMutationFn = Apollo.MutationFunction<CreateItemMutation, CreateItemMutationVariables>;

/**
 * __useCreateItemMutation__
 *
 * To run a mutation, you first call `useCreateItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createItemMutation, { data, loading, error }] = useCreateItemMutation({
 *   variables: {
 *      name: // value for 'name'
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCreateItemMutation(baseOptions?: Apollo.MutationHookOptions<CreateItemMutation, CreateItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateItemMutation, CreateItemMutationVariables>(CreateItemDocument, options);
      }
export type CreateItemMutationHookResult = ReturnType<typeof useCreateItemMutation>;
export type CreateItemMutationResult = Apollo.MutationResult<CreateItemMutation>;
export type CreateItemMutationOptions = Apollo.BaseMutationOptions<CreateItemMutation, CreateItemMutationVariables>;
export const AddKitItemDocument = gql`
    mutation AddKitItem($kit: ID!, $item: ID!, $qty: Int) {
  addKitItem(kit: $kit, item: $item, qty: $qty) {
    id
    items {
      itemId
      qty
    }
  }
}
    `;
export type AddKitItemMutationFn = Apollo.MutationFunction<AddKitItemMutation, AddKitItemMutationVariables>;

/**
 * __useAddKitItemMutation__
 *
 * To run a mutation, you first call `useAddKitItemMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddKitItemMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addKitItemMutation, { data, loading, error }] = useAddKitItemMutation({
 *   variables: {
 *      kit: // value for 'kit'
 *      item: // value for 'item'
 *      qty: // value for 'qty'
 *   },
 * });
 */
export function useAddKitItemMutation(baseOptions?: Apollo.MutationHookOptions<AddKitItemMutation, AddKitItemMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddKitItemMutation, AddKitItemMutationVariables>(AddKitItemDocument, options);
      }
export type AddKitItemMutationHookResult = ReturnType<typeof useAddKitItemMutation>;
export type AddKitItemMutationResult = Apollo.MutationResult<AddKitItemMutation>;
export type AddKitItemMutationOptions = Apollo.BaseMutationOptions<AddKitItemMutation, AddKitItemMutationVariables>;
export const CreateKitDocument = gql`
    mutation CreateKit($name: String!, $owner: String!) {
  createKit(name: $name, owner: $owner) {
    id
    type
    name
  }
}
    `;
export type CreateKitMutationFn = Apollo.MutationFunction<CreateKitMutation, CreateKitMutationVariables>;

/**
 * __useCreateKitMutation__
 *
 * To run a mutation, you first call `useCreateKitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateKitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createKitMutation, { data, loading, error }] = useCreateKitMutation({
 *   variables: {
 *      name: // value for 'name'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useCreateKitMutation(baseOptions?: Apollo.MutationHookOptions<CreateKitMutation, CreateKitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateKitMutation, CreateKitMutationVariables>(CreateKitDocument, options);
      }
export type CreateKitMutationHookResult = ReturnType<typeof useCreateKitMutation>;
export type CreateKitMutationResult = Apollo.MutationResult<CreateKitMutation>;
export type CreateKitMutationOptions = Apollo.BaseMutationOptions<CreateKitMutation, CreateKitMutationVariables>;
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
    accessToken
    user {
      id
      email
      username
    }
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
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const GetBagKitsDocument = gql`
    query GetBagKits($bag: ID!) {
  getBagKits(bag: $bag) {
    id
    type
    name
    owner
    items {
      itemId
      qty
    }
  }
}
    `;

/**
 * __useGetBagKitsQuery__
 *
 * To run a query within a React component, call `useGetBagKitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBagKitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBagKitsQuery({
 *   variables: {
 *      bag: // value for 'bag'
 *   },
 * });
 */
export function useGetBagKitsQuery(baseOptions: Apollo.QueryHookOptions<GetBagKitsQuery, GetBagKitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBagKitsQuery, GetBagKitsQueryVariables>(GetBagKitsDocument, options);
      }
export function useGetBagKitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBagKitsQuery, GetBagKitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBagKitsQuery, GetBagKitsQueryVariables>(GetBagKitsDocument, options);
        }
export type GetBagKitsQueryHookResult = ReturnType<typeof useGetBagKitsQuery>;
export type GetBagKitsLazyQueryHookResult = ReturnType<typeof useGetBagKitsLazyQuery>;
export type GetBagKitsQueryResult = Apollo.QueryResult<GetBagKitsQuery, GetBagKitsQueryVariables>;
export const GetKitItemsDocument = gql`
    query GetKitItems($kit: ID!) {
  getKitItems(kit: $kit) {
    id
    name
    extUrl
  }
}
    `;

/**
 * __useGetKitItemsQuery__
 *
 * To run a query within a React component, call `useGetKitItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetKitItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetKitItemsQuery({
 *   variables: {
 *      kit: // value for 'kit'
 *   },
 * });
 */
export function useGetKitItemsQuery(baseOptions: Apollo.QueryHookOptions<GetKitItemsQuery, GetKitItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetKitItemsQuery, GetKitItemsQueryVariables>(GetKitItemsDocument, options);
      }
export function useGetKitItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetKitItemsQuery, GetKitItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetKitItemsQuery, GetKitItemsQueryVariables>(GetKitItemsDocument, options);
        }
export type GetKitItemsQueryHookResult = ReturnType<typeof useGetKitItemsQuery>;
export type GetKitItemsLazyQueryHookResult = ReturnType<typeof useGetKitItemsLazyQuery>;
export type GetKitItemsQueryResult = Apollo.QueryResult<GetKitItemsQuery, GetKitItemsQueryVariables>;
export const GetUserBagsDocument = gql`
    query GetUserBags($user: ID!) {
  getUserBags(user: $user) {
    id
    name
    kits {
      kitId
      isDefault
    }
  }
}
    `;

/**
 * __useGetUserBagsQuery__
 *
 * To run a query within a React component, call `useGetUserBagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserBagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserBagsQuery({
 *   variables: {
 *      user: // value for 'user'
 *   },
 * });
 */
export function useGetUserBagsQuery(baseOptions: Apollo.QueryHookOptions<GetUserBagsQuery, GetUserBagsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserBagsQuery, GetUserBagsQueryVariables>(GetUserBagsDocument, options);
      }
export function useGetUserBagsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserBagsQuery, GetUserBagsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserBagsQuery, GetUserBagsQueryVariables>(GetUserBagsDocument, options);
        }
export type GetUserBagsQueryHookResult = ReturnType<typeof useGetUserBagsQuery>;
export type GetUserBagsLazyQueryHookResult = ReturnType<typeof useGetUserBagsLazyQuery>;
export type GetUserBagsQueryResult = Apollo.QueryResult<GetUserBagsQuery, GetUserBagsQueryVariables>;
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
export const MeDocument = gql`
    query Me {
  me {
    id
    email
    username
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;