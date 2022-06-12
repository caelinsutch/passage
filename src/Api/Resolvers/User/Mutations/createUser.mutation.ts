import { MutationResolvers, UserDbObject } from "@/Generated";
import { getUserCollection } from "@/Api/MongoDb/collections";
import { convertObjectIdToString, validateEmail, validatePhone } from "@/Utils";

const createUserMutation: MutationResolvers["createUser"] = async (
  _,
  { user }
) => {
  const userCollection = await getUserCollection();

  validateEmail(user.email);
  validatePhone(user.phone);

  const newUser: Omit<UserDbObject, "_id"> = {
    ...user,
    education: [],
    experience: [],
  };

  const res = await userCollection.insertOne(newUser as any);

  return convertObjectIdToString({
    _id: res.insertedId,
    ...newUser,
  });
};

export default createUserMutation;
