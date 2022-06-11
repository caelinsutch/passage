import { ObjectId } from "mongodb";
import { QueryResolvers } from "@/Generated";
import { getUserCollection } from "@/Api/MongoDb/collections";
import { convertObjectIdToString } from "@/Utils";

const userQuery: QueryResolvers["user"] = async (_, { id }) => {
  const userCollection = await getUserCollection();

  const user = await userCollection.findOne({
    _id: ObjectId.createFromHexString(id),
  });

  if (!user) return null;

  return convertObjectIdToString(user);
};

export default userQuery;
