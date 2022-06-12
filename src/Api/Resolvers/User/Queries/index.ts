import userQuery from "./user.query";
import { QueryResolvers } from "@/Generated";

const userQueries: QueryResolvers = {
  user: userQuery,
};

export default userQueries;
