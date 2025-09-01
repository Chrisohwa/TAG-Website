import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaArrowLeftLong } from "react-icons/fa6";

const MotionFlex = motion(Flex);

const Back = (color) => {
  const handleBack = () => {
    window.history.back(); 
  };

  return (
    <MotionFlex
      as="button"
      align="center"
      gap={2}
      px={3}
      py={2}
      rounded="lg"
      cursor="pointer"
      bg="whiteAlpha.50"
      _hover={{ bg: "whiteAlpha.100" }}
      onClick={handleBack}
      whileHover={{ x: -4, scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <FaArrowLeftLong size={40} />
      <Text fontWeight="medium" fontSize="sm" color={color}>
        Back
      </Text>
    </MotionFlex>
  );
};

export default Back;
