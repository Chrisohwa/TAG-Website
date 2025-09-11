import React from "react";
import {
  Box,
  Text,
  Textarea,
  Field,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import CustomInput from "./CustomInput";
import { SmText } from "./CustomText";
import CustomInput2 from "./CustomInput2";

const Fields = ({
  title,
  alt,
  icon,
  altIcon,
  placeholder,
  textarea,
  inputFeild,
  required,
  type,
  charLimit,
  name,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <Box
      mb="10px"
      border={inputFeild ? "" : "1px solid #CFD3D4"}
      borderRadius="12px"
    >
      {!inputFeild && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SmText color={alt ? "#404040" : "#5E6366"}>{title}</SmText>
        </motion.div>
      )}

      {textarea ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Field.Root isInvalid={!!error}>
            <Textarea
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              bg="#fff"
              borderRadius="10px"
              placeholder={placeholder}
              maxLength={charLimit || 500}
              h={{ base: "100px", md: "168px" }}
              fontSize={{ base: "15px", md: "18px" }}
              lineHeight={{ base: "25px", md: "32px" }}
              _placeholder={{ color: "#C4C4C4" }}
              border="none"
              focusBorderColor="transparent"
              _focus={{
                border: "none",
                outline: "none",
                boxShadow: "none",
              }}
            />

            {charLimit && (
              <Text
                fontSize="14px"
                color="#666"
                textAlign="right"
                mt={2}
                pr={4}
              >
                {value.length}/{charLimit} characters
              </Text>
            )}

            <Field.ErrorText color="red.700">{error}</Field.ErrorText>
          </Field.Root>
        </motion.div>
      ) : inputFeild ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomInput2
            placeholder={placeholder}
            title={title}
            required={required}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
          />
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <CustomInput
            alt
            icon={icon}
            altIcon={altIcon}
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            error={error}
          />
        </motion.div>
      )}
    </Box>
  );
};

export default Fields;
