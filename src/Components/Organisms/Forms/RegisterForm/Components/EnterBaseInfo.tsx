import React from "react";
import { useForm } from "react-hook-form";
import { Button } from "@chakra-ui/react";
import { emailRegex } from "../../../../../Constants";
import { UserBaseInfoFragment } from "@/Generated";
import { FormInput, TextAreaInput } from "@/Components";

export type BaseInfoData = Omit<UserBaseInfoFragment, "firebaseId" | "phone">;

type EnterBaseInfoProps = {
  isLoading?: boolean;
  onSubmit: (data: BaseInfoData) => void;
};

const EnterBaseInfo: React.FC<EnterBaseInfoProps> = ({
  isLoading,
  onSubmit,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BaseInfoData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Name"
        inputGroupProps={{ size: "lg" }}
        error={errors?.name?.message}
        mb={2}
        inputProps={{
          placeholder: "Gavin Belson",
          ...register("name", {
            required: {
              value: true,
              message: "Name is required",
            },
          }),
        }}
      />
      <FormInput
        label="Email"
        inputGroupProps={{ size: "lg" }}
        error={errors?.email?.message}
        mb={2}
        inputProps={{
          placeholder: "gavin@hooli.com",
          ...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            pattern: {
              value: emailRegex,
              message: "Must be a valid email",
            },
          }),
        }}
      />
      <FormInput
        label="Username"
        helperText="This will be your url, i.e. passage.bio/xxx"
        inputGroupProps={{ size: "lg" }}
        error={errors?.username?.message}
        mb={2}
        inputProps={{
          placeholder: "gavinbelson",
          ...register("username", {
            required: {
              value: true,
              message: "Username is required",
            },
          }),
        }}
      />
      <FormInput
        label="One Liner"
        inputGroupProps={{ size: "lg" }}
        error={errors?.oneLiner?.message}
        mb={2}
        inputProps={{
          placeholder: "CEO and Founder of Hooli, Entrepreneur, Innovator",
          ...register("oneLiner", {
            required: {
              value: true,
              message: "One-liner is required",
            },
          }),
        }}
      />
      <TextAreaInput
        label="Bio"
        textAreaProps={{
          size: "lg",
          placeholder:
            "Two to three sentences to give companies a preview of your background and passions are more than enough!",
          ...register("bio", {
            required: {
              value: true,
              message: "Bio is required",
            },
          }),
        }}
        error={errors?.bio?.message}
        mb={2}
      />
      <Button mt={8} colorScheme="purple" type="submit" isLoading={isLoading}>
        YOU'RE IN
      </Button>
    </form>
  );
};

export default EnterBaseInfo;
