import React from "react";
import {
  Input,
  InputGroup,
  Field,
  
} from "@chakra-ui/react";

const CustomInput = ({
  icon,
  name,
  value,
  onChange,
  onBlur,
  error,
  alt,
  altIcon,
  placeholder,
  ...props
}) => {
  return (
    <InputGroup startElement={icon}>
      <Field.Root required invalid={!!error} {...props}>
        <Input
          placeholder={placeholder}
          h={{ base: "40px", md: "48px" }}
          fontSize={{ base: "15px", md: "16px" }}
          lineHeight={{ base: 1, md: "1.5" }}
          _placeholder={{ color: "#C4C4C4" }}
          border="none"
          outline="none"
          focusBorderColor="transparent"
          _focus={{
            border: "none",
            outline: "none",
            boxShadow: "none",
          }}
          name={name}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Field.ErrorText color="red">{error}</Field.ErrorText>
      </Field.Root>
    </InputGroup>
  );
};

export default CustomInput;
