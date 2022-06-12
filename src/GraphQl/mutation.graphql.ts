import { gql } from "apollo-server-micro";

const query = gql`
  type Mutation {
    createUser(user: CreateUserInput!): User!
  }
`;

export default query;
