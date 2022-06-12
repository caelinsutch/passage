import userQuery from "./Queries";
import { QueryResolvers } from "@/Generated";

export const userQueries: QueryResolvers = {
  user: userQuery,
};
