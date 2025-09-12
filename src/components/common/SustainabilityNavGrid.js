import {
  Flex,
  Grid,
  Box,
  Text,
  Center,
  GridItem,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import { headers } from "./constants";

const NavCard = ({
  icon,
  name,
  details,
  onClick,
  key,
  imageVariant,
  image,
}) => {
  return (
    <Flex
      flexDir="column"
      key={key}
      onClick={onClick}
      w="630px"
      h="208px"
      p="20px"
      bg="#fff"
      borderRadius="9px"
      boxShadow="md"
      cursor="pointer"
      _hover={{
        transform: "scale(1.05)",
        bg: "#abaeb2ff",
      }}
      transition="0.3s"
    >
      {/* Icon */}
      <Center
        fontSize="28px"
        bg="#DBEAFE"
        w="40px"
        h="40px"
        borderRadius="full"
        p="8px"
        mb={2}
      >
        {icon}
      </Center>

      {/* Title */}
      <Heading fontSize="16px" fontWeight={700} color="#001A32">
        {name}
      </Heading>

      {/* Details */}
      <Text
        fontSize="13.73px"
        fontWeight={500}
        lineHeight="20px"
        color="#263238"
        noOfLines={4}
        mb="12px"
      >
        {details}
      </Text>

      <Text
        fontSize="9px"
        fontWeight="600"
        color="#004A90"
        lineHeight="14.5px"
        _hover={{ scale: "105%" }}
        transition="0.3s ease-in-out"
      >
        Learn More
      </Text>
    </Flex>
  );
};

const SustainabilityNavGrid = ({ onNavigate }) => {
  return (
    <Grid
      w="100%"
      gridTemplateColumns="repeat(2, 1fr)"
      placeItems="center"
      gap="20px"
      px="20px"
      py="30px"
    >
      {headers[2].sub?.map((item, i) => (
        <GridItem key={i}>
          <NavCard
            name={item.name}
            icon={item.icon}
            details={item.details}
            onClick={() => onNavigate(headers[2], item)}
          />
        </GridItem>
      ))}
    </Grid>
  );
};

export default SustainabilityNavGrid;
