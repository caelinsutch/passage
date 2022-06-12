import { gql } from "apollo-server-micro";

const query = gql`
  type Query {
    user(id: ID!): User
  }
`;

export default query;
