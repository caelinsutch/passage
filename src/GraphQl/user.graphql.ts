import { gql } from "apollo-server-micro";

const userGraphql = gql`
  type User {
    id: ID!
  }
`;

export default userGraphql;
