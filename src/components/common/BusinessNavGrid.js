

import {
  Box,
  Flex,
  Center,
  Heading,
  Text,
  Button,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { TbMessageDown } from "react-icons/tb";
import { headers } from "./constants";
import { useNavigate } from "react-router-dom";

const NavCard = ({
  icon,
  name,
  details,
  onClick,
  key,
  imageVariant,
  image,
}) => {
    const navigate = useNavigate();
  if (imageVariant) {
    return (
      <Flex
        flexDir="column"
        key={key}
        onClick={onClick}
        w="380px"
        h="416px"
        p="20px"
        bg="#fff"
        borderRadius="9px"
        boxShadow="md"
        cursor="pointer"
        _hover={{
          scale: "105%",
          bg: "#abaeb2ff",
        }}
        transition="0.3s"
      >
        <Center
          fontSize="28px"
          bg="#DBEAFE"
          w="40px"
          h="40px"
          borderRadius="full"
          p="8px"
          mb={2}
        >
          <TbMessageDown size="20px" color="#2563EB" />
        </Center>

        {/* Title */}
        <Heading fontSize="16.5px" fontWeight={700} color="#001A32">
          Get in Touch
        </Heading>

        {/* Details */}
        <Text
          fontSize="6.9px"
          fontWeight={400}
          lineHeight="9.6px"
          color="#003B73"
          noOfLines={4}
          mb="12px"
        >
          We'd love to hear from you. Whether you have questions about our
          services, career opportunities, or partnership possibilities, our team
          is here to help.
        </Text>

        <Button
          bg="#003B73"
          borderRadius="4.2px"
          w="70.7px"
          h="18.3px"
          fontWeight={700}
          fontSize="5.52px"
          lineHeight="10.6px"
          color="#fff"
          mb="10px"
          onClick={() => navigate("/contact-us#contact-form")}
        >
          Send Us a Message
        </Button>

        <Image
          src="/images/career/grid6.png"
          w="full"
          h="full"
          objectFit="cover"
          objectPosition="top"
          loading="lazy"
        />
      </Flex>
    );
  }
  return (
    <Flex
      flexDir="column"
      key={key}
      onClick={onClick}
      w="432px"
      h="200px"
      p="20px"
      bg="#fff"
      borderRadius="9px"
      boxShadow="md"
      cursor="pointer"
      _hover={{
        scale: "105%",
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
        mt="auto"
        fontSize="9px"
        fontWeight="600"
        color="#004A90"
        lineHeight="14.5px"
      >
        Explore Service
      </Text>
    </Flex>
  );
};

const BusinessNavGrid = ({onNavigate}) => {
  return (
    <Grid
      w="100%"
      gridTemplateColumns="repeat(3, 1fr)"
      placeItems="center"
      gap="20px"
      px="20px"
      py="40px"
      mx="auto"
    >
      <GridItem gridColumn="1" gridRow="1">
        <NavCard
          name={headers[1]?.sub[0]?.name}
          icon={headers[1]?.sub[0]?.icon}
          details={headers[1]?.sub[0]?.details}
          onClick={() => onNavigate(headers[1], headers[1]?.sub[0])}
        />
      </GridItem>
      <GridItem gridColumn="2" gridRow="1">
        <NavCard
          name={headers[1]?.sub[1]?.name}
          icon={headers[1]?.sub[1]?.icon}
          details={headers[1]?.sub[1]?.details}
          onClick={() => onNavigate(headers[1], headers[1]?.sub[1])}
        />
      </GridItem>
      <GridItem gridColumn="1" gridRow="2">
        <NavCard
          name={headers[1]?.sub[2]?.name}
          icon={headers[1]?.sub[2]?.icon}
          details={headers[1]?.sub[2]?.details}
          onClick={() => onNavigate(headers[1], headers[1]?.sub[2])}
        />
      </GridItem>
      <GridItem gridColumn="2" gridRow="2">
        <NavCard
          name={headers[1]?.sub[3]?.name}
          icon={headers[1]?.sub[3]?.icon}
          details={headers[1]?.sub[3]?.details}
          onClick={() => onNavigate(headers[1], headers[1]?.sub[3])}
        />
      </GridItem>
      <GridItem gridColumn="3" gridRow="1/ span 2" ml="-25px">
        <NavCard imageVariant />
      </GridItem>
    </Grid>
  );
};

export default BusinessNavGrid;
