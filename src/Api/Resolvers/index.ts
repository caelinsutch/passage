import { userQueries } from "./User";
import { Resolvers } from "@/Generated";

const resolvers: Resolvers = {
  Query: {
    ...userQueries,
  },
};

export default resolvers;
