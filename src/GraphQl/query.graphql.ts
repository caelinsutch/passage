import { gql } from "apollo-server-micro";

const query = gql`
  type Query {
    user(id: ID!): User
    userSearch(firebaseId: ID, phone: String): User
  }
`;

export default query;
