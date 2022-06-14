import React from "react";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormInput } from "@/Components";

type EnterCodeData = {
  code: string;
};

type EnterCodeProps = {
  isLoading?: boolean;
  onSubmit: (data: EnterCodeData) => void;
};

const EnterCode: React.FC<EnterCodeProps> = ({ isLoading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterCodeData>();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        label="Enter Code"
        inputGroupProps={{ size: "lg" }}
        error={errors?.code?.message}
        inputProps={{
          placeholder: "XXXXXX",
          ...register("code", {
            required: {
              value: true,
              message: "Required",
            },
            minLength: {
              value: 6,
              message: "Must be 6 digits",
            },
            maxLength: {
              value: 6,
              message: "Must be 6 digits",
            },
          }),
        }}
      />
      <Button mt={8} colorScheme="purple" type="submit" isLoading={isLoading}>
        YOU"RE IN
      </Button>
    </form>
  );
};

export default EnterCode;
