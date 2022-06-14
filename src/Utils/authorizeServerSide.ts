import { GetServerSidePropsContext } from "next";
import nookies from "nookies";
import * as firebase from "firebase-admin";

const authorizeServerSide = async (
  ctx: GetServerSidePropsContext
): Promise<{ uid: string } | undefined> => {
  try {
    const cookies = nookies.get(ctx);
    const auth = firebase.auth();
    const token = await auth.verifyIdToken(cookies.token);

    const { uid } = token;

    if (!uid) throw Error();

    // const apolloClient = await initializeApollo();

    return {
      uid,
    };
  } catch (err) {
    return undefined;
  }
};

export default authorizeServerSide;
