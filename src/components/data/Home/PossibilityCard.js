import { Box, Text, Link, Flex, Icon, Heading } from "@chakra-ui/react";
import { FiArrowRight } from "react-icons/fi";
import React from "react";

const PossibilityCard = ({ image, title, description, link }) => {
  return (
    <Box
      position="relative"
      borderRadius="md"
      overflow="hidden"
      height={{ base: "300px", md: "250px", xl: "292px" }}
      width={{ base: "400px", md: "320px", xl: "300px" }}
      backgroundImage={`url(${image})`}
      backgroundSize="cover"
      backgroundPosition="center"
      _hover={{ cursor: "pointer" }}
    >
      {/* Gradient overlay */}
      <Box
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        height="35%"
        backdropFilter="blur(60px)"
      />

      {/* Text content */}
      <Flex
        position="absolute"
        bottom="0"
        left="0"
        right="0"
        py="5px"
        px="10px"
        flexDirection="column"
        color="#ffffff"
      >
        <Heading fontSize="15px" fontWeight={500} mb={1} noOfLines={1}>
          {title}
        </Heading>
        <Text fontSize="11px" lineHeight="short" opacity={1}>
          {description}
        </Text>

        {/* Link */}
        <Link
          href={link}
          display="inline-flex"
          alignItems="center"
          mt={1}
          fontSize="12px"
          fontWeight="semibold"
          color="#fff"
          _hover={{ textDecoration: "underline" }}
        >
          Explore <Icon as={FiArrowRight} ml={1} />
        </Link>
      </Flex>
    </Box>
  );
};

export default PossibilityCard;
