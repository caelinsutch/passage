import { getUserCollection } from "@/Api/MongoDb/collections";

const checkDuplicateUsernames = async (username: string) => {
  const userCollection = await getUserCollection();

  const duplicate = await userCollection.findOne({
    username,
  });

  return Boolean(duplicate?._id);
};

export default checkDuplicateUsernames;
