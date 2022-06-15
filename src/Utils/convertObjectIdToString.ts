import { ObjectId } from "mongodb";

type NonNullable<T> = T extends null | undefined ? never : T;

type DbObject =
  | ({
      _id: ObjectId | string;
    } & Record<string, any>)
  | null
  | undefined;

const convertObjectIdToString = <T extends DbObject>(
  dbObject: T
): ({ _id: any } & Omit<NonNullable<T>, "_id">) | null =>
  dbObject
    ? ({
        ...dbObject,
        _id:
          typeof dbObject._id === "string"
            ? dbObject._id
            : dbObject._id.toHexString(),
      } as any)
    : null;

export default convertObjectIdToString;
