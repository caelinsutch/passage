import { userQueries, userMutations } from "./User";
import { Resolvers } from "@/Generated";

const resolvers: Resolvers = {
  Query: {
    ...userQueries,
  },
  Mutation: {
    ...userMutations,
  },
};

export default resolvers;
