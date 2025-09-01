import { Container, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BiBorderAll } from "react-icons/bi";

const Focus = () => {
  return (
    <Flex
      className="full_width"
      align="center"
      justify="center"
      h={{ base: "60vh", xl: "100vh" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Text
          textAlign="center"
          fontWeight={400}
          fontSize={{
            base: "20px",
            md: "40px",
            lg: "55px",
            xl: "70px",
          }}
          // px={{ base: "0px", md: "20px", lg: "24px", xl: "26px" }}
          py={{ base: "30px", md: "20px", lg: "24px", xl: "40px" }}
        >
          “Our focus is on creating products and services that empower
          businesses, streamline operations, and foster growth in the digital
          era.”
        </Text>
      </Container>
    </Flex>
  );
};

export default Focus;
