import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import * as firebase from "firebase-admin";
import { gql } from "@apollo/client";
import { initializeApollo } from "src/Apollo";
import { GetUserIdDocument, GetUserIdQuery } from "@/Generated";

export const serverSideQuery = gql`
  query GetUserId($firebaseId: ID!) {
    userByFirebaseId(firebaseId: $firebaseId) {
      _id
    }
  }
`;

const authorizeServerSide = async (
  ctx: GetServerSidePropsContext
): Promise<{ firebaseId: string; userId?: string } | undefined> => {
  try {
    const cookies = nookies.get(ctx);
    const auth = firebase.auth();
    const token = await auth.verifyIdToken(cookies.token);

    const { uid: firebaseId } = token;

    if (!firebaseId) throw Error();

    const apolloClient = await initializeApollo();

    const res = await apolloClient.query<GetUserIdQuery>({
      query: GetUserIdDocument,
      variables: { firebaseId },
    });

    return {
      firebaseId,
      userId: res.data?.userByFirebaseId?._id,
    };
  } catch (err) {
    return undefined;
  }
};

export default authorizeServerSide;
