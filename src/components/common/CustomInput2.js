import { Field, Input } from "@chakra-ui/react";
import React from "react";

const CustomInput2 = ({
  title,
  placeholder,
  required = false,
  type = "text",
  name,
  value,
  onChange,
  onBlur,
  error,
  ...props
}) => {
  return (
    <Field.Root required invalid={!!error} {...props}>
      <Field.Label>
        {title}
        {required && <Field.RequiredIndicator color="#000000" ml={1} />}
      </Field.Label>

      <Input
        placeholder={placeholder}
        type={type}
        h={{ base: "40px", md: "48px" }}
        fontSize={{ base: "15px", md: "16px" }}
        lineHeight={{ base: 1, md: "1.5" }}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        focusBorderColor="transparent"
        _focus={{
          border: "none",
          outline: "none",
          boxShadow: "none",
        }}
      />

      <Field.ErrorText color="red">{error}</Field.ErrorText>
    </Field.Root>
  );
};

export default CustomInput2;
