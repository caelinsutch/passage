import React from "react";
import {
  FormControl,
  FormControlProps,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputGroupProps,
  InputLeftElement,
  InputProps,
} from "@chakra-ui/react";

type FormInputProps = {
  label?: string;
  error?: string;
  helperText?: string;
  inputGroupProps?: InputGroupProps;
  leftElement?: React.ReactNode;
  inputProps: InputProps;
} & FormControlProps;

const FormInput: React.FC<FormInputProps> = ({
  label,
  helperText,
  error,
  inputProps,
  inputGroupProps,
  leftElement,
  ...props
}) => (
  <FormControl isInvalid={Boolean(error)} {...props}>
    <FormLabel>{label}</FormLabel>
    <InputGroup {...inputGroupProps}>
      {Boolean(leftElement) && (
        <InputLeftElement>{leftElement}</InputLeftElement>
      )}
      <Input {...inputProps} />
    </InputGroup>
    {Boolean(helperText) && <FormHelperText>{helperText}</FormHelperText>}
    {Boolean(error) && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

export default FormInput;
