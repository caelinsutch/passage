import { gql } from "apollo-server-micro";

const query = gql`
  type Query {
    user(id: ID!): User
    userByFirebaseId(firebaseId: ID!): User
  }
`;

export default query;
