import React from "react";
import { Button } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { FormInput, Icon } from "@/Components";

type EnterPhoneData = {
  phoneNumber: string;
};

type EnterPhoneProps = {
  isLoading?: boolean;
  onSubmit: (data: EnterPhoneData) => void;
};

const EnterPhone: React.FC<EnterPhoneProps> = ({ isLoading, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EnterPhoneData>();

  return (
    <form
      onSubmit={handleSubmit(({ phoneNumber }) =>
        onSubmit({
          phoneNumber:
            phoneNumber.length === 10
              ? `+1${phoneNumber.toString().trim()}`
              : `${phoneNumber.includes("+") ? "" : "+"}${phoneNumber
                  .toString()
                  .trim()}`,
        })
      )}
    >
      <FormInput
        label="Phone Number"
        placeholder="Phone Number"
        inputGroupProps={{ size: "lg" }}
        leftElement={<Icon name="Phone" />}
        error={errors?.phoneNumber?.message}
        inputProps={{
          placeholder: "Phone Number",
          ...register("phoneNumber", {
            pattern: {
              value: /^\+?\d{10,14}$/,
              message: "Must be a valid phone number with no spaces",
            },
            minLength: {
              value: 10,
              message: "Must be at least 10 digits long",
            },
          }),
        }}
      />
      <Button mt={8} colorScheme="purple" type="submit" isLoading={isLoading}>
        JOIN THE PARTY 🎉
      </Button>
    </form>
  );
};

export default EnterPhone;
