import createUserMutation from "./createUser.mutation";
import { MutationResolvers } from "@/Generated";

const userMutations: MutationResolvers = {
  createUser: createUserMutation,
};

export default userMutations;
