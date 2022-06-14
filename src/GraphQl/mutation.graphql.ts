import { gql } from "apollo-server-micro";

const query = gql`
  type Mutation {
    initializeUser(user: InitializeUserInput): User!
    finalizeUser(user: FinalizeUserInput!): User!
    updateUser(userId: ID!, user: UpdateUserInput!): User!
  }
`;

export default query;
