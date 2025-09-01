import React from "react";
import { Box, Textarea } from "@chakra-ui/react";
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
}) => {
  return (
    <Box mb="10px" border="1px solid #CFD3D4" borderRadius="12px">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ x: [50, 0], opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <SmText color={alt ? "#404040" : "#5E6366"}>{title}</SmText>
      </motion.div>

      {textarea ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [50, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Textarea
            bg="#fff"
            borderRadius="10px"
            placeholder={placeholder}
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
          />
        </motion.div>
      )}
    </Box>
  );
};

export default Fields;
