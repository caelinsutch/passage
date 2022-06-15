import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { auth } from "firebase-admin";
import typeDefs from "../../src/GraphQl";
import { resolvers } from "@/Api";

export type GraphQlContext = {
  firebaseId?: string;
};

const cors = Cors();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }): Promise<GraphQlContext> => {
    const token = req.headers.authorization;
    if (!token) return {};
    const { uid: firebaseId } = await auth().verifyIdToken(token);

    return {
      firebaseId,
    };
  },
});

const startServer = server.start();

const graphql = cors((req, res) => {
  if (req.method === "OPTIONS") {
    res.end();
    return false;
  }

  return startServer.then(() =>
    server.createHandler({
      path: "/api/graphql",
    })(req, res)
  );
});

export const config = {
  api: {
    bodyParser: false,
  },
};

export default graphql;
