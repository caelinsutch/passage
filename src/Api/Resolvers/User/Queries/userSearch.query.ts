import { QueryResolvers } from "@/Generated";
import { getUserCollection } from "@/Api/MongoDb/collections";
import { convertObjectIdToString } from "@/Utils";

const userSearchQuery: QueryResolvers["userSearch"] = async (
  _,
  { firebaseId, phone }
) => {
  if (!firebaseId && !phone) throw new Error("Requires at least one argument");

  const userCollection = await getUserCollection();

  const searchParams = {
    phone: phone ?? undefined,
    firebaseId: firebaseId ?? undefined,
  };

  if (!searchParams.phone) delete searchParams.phone;
  if (!searchParams.firebaseId) delete searchParams.firebaseId;

  const user = await userCollection.findOne(searchParams);

  return convertObjectIdToString(user);
};

export default userSearchQuery;
