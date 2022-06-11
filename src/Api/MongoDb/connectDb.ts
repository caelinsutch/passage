/* eslint-disable import/no-mutable-exports, no-console */
import { Db, MongoClient } from "mongodb";
import { dbName, mongoDbUrl } from "../../Constants";

let client: MongoClient;
let database: Db;

const connect = async (): Promise<Db> => {
  if (!database) {
    console.info(`Connecting to database ${mongoDbUrl}`);

    if (!client)
      client = await MongoClient.connect(mongoDbUrl, {
        maxIdleTimeMS: 1200000,
      });

    database = client.db(dbName);
    if (process.env.NODE_ENV === "test") {
      await database.dropDatabase();
    }
  }

  return database;
};

export { client, database, connect };
