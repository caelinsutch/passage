import { Collection } from "mongodb";
import { connect } from "./connectDb";
import { UserDbObject } from "@/Generated";

let userCollection: Collection<UserDbObject>;

export const getUserCollection = async (): Promise<
  Collection<UserDbObject>
> => {
  if (userCollection) return userCollection;
  const db = await connect();
  userCollection = db.collection("Users");
  return userCollection;
};
