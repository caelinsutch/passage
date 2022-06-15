import { gql } from "apollo-server-micro";

const query = gql`
  type Mutation {
    createUser(user: CreateUserInput!): User!
    updateUser(userId: ID!, user: UpdateUserInput!): User!
  }
`;

export default query;
