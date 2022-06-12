import { makeExecutableSchema } from "@graphql-tools/schema";
import { DIRECTIVES } from "@graphql-codegen/typescript-mongodb";
import userGraphql from "./user.graphql";
import query from "./query.graphql";
import enums from "./enums.graphql";

const typeDefs = makeExecutableSchema({
  typeDefs: [DIRECTIVES, query, userGraphql, enums],
  resolvers: {},
});

export default typeDefs;
