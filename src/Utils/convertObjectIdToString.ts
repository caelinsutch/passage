import { ObjectId } from "mongodb";

type DbObject = {
  _id: ObjectId | string;
} & Record<string, any>;

const convertObjectIdToString = <T extends DbObject>({
  _id,
  dbObject,
}: T): { _id: any } & Omit<T, "_id"> => ({
  ...dbObject,
  _id: typeof _id === "string" ? _id : _id.toHexString(),
});

export default convertObjectIdToString;
