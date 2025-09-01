import React from "react";
import {
  Image,
  Input,
  InputGroup,
  InputElement,
  InputAddon,
  Box,
} from "@chakra-ui/react";

const CustomInput = ({ icon, alt, altIcon, placeholder }) => {
  return (
    <InputGroup startElement={icon}>
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
      />
    </InputGroup>
  );
};

export default CustomInput;
