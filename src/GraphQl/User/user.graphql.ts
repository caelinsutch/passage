import { gql } from "apollo-server-micro";

const userGraphql = gql`
  type User @entity {
    _id: ID! @id
    firebaseId: String! @column
  }
`;

export default userGraphql;
