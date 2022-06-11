import { makeExecutableSchema } from "@graphql-tools/schema";
import { gql } from "apollo-server-micro";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import userGraphql from "./User/user.graphql";

const Query = gql`
  type Query {
    user(id: ID!): User
  }
`;

const typeDefs = makeExecutableSchema({
  typeDefs: [Query, userGraphql, DIRECTIVES],
  resolvers: {},
});

export default typeDefs;
