/* eslint-disable */
import gql from "graphql-tag";
import * as ApolloReactCommon from "@apollo/client";
import * as ApolloReactHooks from "@apollo/client";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  id: Scalars["ID"];
};

export type HomeQueryQueryVariables = Exact<{
  id: Scalars["ID"];
}>;

export type HomeQueryQuery = { user?: { id: string } | null };

export const HomeQueryDocument = gql`
  query HomeQuery($id: ID!) {
    user(id: $id) {
      id
    }
  }
`;

/**
 * __useHomeQueryQuery__
 *
 * To run a query within a React component, call `useHomeQueryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQueryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQueryQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useHomeQueryQuery(
  baseOptions: ApolloReactHooks.QueryHookOptions<
    HomeQueryQuery,
    HomeQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useQuery<HomeQueryQuery, HomeQueryQueryVariables>(
    HomeQueryDocument,
    options
  );
}
export function useHomeQueryLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    HomeQueryQuery,
    HomeQueryQueryVariables
  >
) {
  const options = { ...defaultOptions, ...baseOptions };
  return ApolloReactHooks.useLazyQuery<HomeQueryQuery, HomeQueryQueryVariables>(
    HomeQueryDocument,
    options
  );
}
export type HomeQueryQueryHookResult = ReturnType<typeof useHomeQueryQuery>;
export type HomeQueryLazyQueryHookResult = ReturnType<
  typeof useHomeQueryLazyQuery
>;
export type HomeQueryQueryResult = ApolloReactCommon.QueryResult<
  HomeQueryQuery,
  HomeQueryQueryVariables
>;
