import { ApolloServer } from "apollo-server-micro";
import Cors from "micro-cors";
import { getAuth } from "firebase-admin/lib/auth";
import typeDefs from "../../src/GraphQl";
import { resolvers } from "@/Api";

const cors = Cors();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => {
    const token = req.headers.authorization;
    if (!token) return {};
    const decodedToken = await getAuth().verifyIdToken(token);
    return {
      firebaseId: decodedToken.uid,
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
