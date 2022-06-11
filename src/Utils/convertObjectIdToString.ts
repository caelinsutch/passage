import { ObjectId } from "mongodb";

type DbObject = {
  _id: ObjectId;
} & Record<string, any>;

const convertObjectIdToString = <T extends DbObject>({
  _id,
  dbObject,
}: T): Omit<T, "_id"> & { _id: string } => ({
  ...dbObject,
  _id: _id.toHexString(),
});

export default convertObjectIdToString;
