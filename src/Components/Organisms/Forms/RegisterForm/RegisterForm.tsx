import React, { useEffect, useRef, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { useRouter } from "next/router";
import {
  getAuth,
  PhoneAuthProvider,
  RecaptchaVerifier,
  signInWithCredential,
  ConfirmationResult,
  signInWithPhoneNumber,
} from "@firebase/auth";
import { EnterCode, EnterPhone } from "./Components";
import EnterBaseInfo, { BaseInfoData } from "./Components/EnterBaseInfo";
import { useCreateUserMutation, useSearchUserLazyQuery } from "@/Generated";

const RegisterForm: React.FC = () => {
  const toast = useToast();
  const router = useRouter();

  const [createUser, { loading }] = useCreateUserMutation();
  const [searchUser] = useSearchUserLazyQuery();

  const [stage, setStage] = useState<"phone" | "code" | "info">("phone");

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [firebaseId, setFirebaseId] = useState<string>("");

  const [sendCodeLoading, setSendCodeLoading] = useState(false);
  const [submitCodeLoading, setSubmitCodeLoading] = useState(false);

  const recaptchaVerifier = useRef<RecaptchaVerifier>();
  const confirmationResult = useRef<ConfirmationResult>();

  const handleSendCode = async (phone: string) => {
    if (!recaptchaVerifier?.current) return;
    setSendCodeLoading(true);
    try {
      const res = await searchUser({ variables: { phone } });
      if (res.data?.userSearch?._id)
        throw new Error("Phone already registered!");
      setPhoneNumber(phone);
      const auth = getAuth();
      confirmationResult.current = await signInWithPhoneNumber(
        auth,
        phone,
        recaptchaVerifier.current
      );
    } catch (e: any) {
      toast({
        title: "Error Sending Code",
        description: e.toString(),
        status: "error",
      });
    } finally {
      setSendCodeLoading(false);
      setStage("code");
      toast({ title: "Sent Code", status: "success" });
    }
  };

  useEffect(() => {
    const auth = getAuth();
    recaptchaVerifier.current = new RecaptchaVerifier(
      "captcha-container",
      {
        size: "invisible",
      },
      auth
    );
  }, []);

  const handleSubmitCode = async (code: string) => {
    setSubmitCodeLoading(true);
    try {
      if (!confirmationResult.current)
        throw new Error("Something went wrong, try again");
      await confirmationResult.current?.confirm(code);
      const user = getAuth().currentUser;
      if (!user) {
        const credential = await PhoneAuthProvider.credential(
          confirmationResult.current?.verificationId,
          code
        );
        const res = await signInWithCredential(getAuth(), credential);
        setFirebaseId(res.user.uid);
      } else {
        setFirebaseId(user.uid);
      }
    } catch (e: any) {
      toast({
        title: "Error verifying code!",
        description: e.toString(),
        status: "error",
      });
    }
    setSubmitCodeLoading(false);
    setStage("info");
  };

  const handleSubmitInfo = async (baseInfo: BaseInfoData) => {
    try {
      if (!phoneNumber || !firebaseId)
        throw new Error("Phone number or Firebase Id missing");
      await createUser({
        variables: { user: { phone: phoneNumber, firebaseId, ...baseInfo } },
      });
      await router.push("/dashboard");
    } catch (e: any) {
      toast({
        title: "Error finalizing profile!",
        description: e.toString(),
        status: "error",
      });
    }
  };

  return (
    <>
      <div id="captcha-container" />
      {stage === "phone" ? (
        <EnterPhone
          onSubmit={({ phoneNumber: pN }) => handleSendCode(pN)}
          isLoading={sendCodeLoading}
        />
      ) : stage === "info" ? (
        <EnterBaseInfo onSubmit={handleSubmitInfo} isLoading={loading} />
      ) : (
        <EnterCode
          onSubmit={({ code }) => handleSubmitCode(code)}
          isLoading={submitCodeLoading}
        />
      )}
    </>
  );
};

export default RegisterForm;
