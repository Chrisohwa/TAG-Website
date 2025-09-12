import { Container, Text, Box, Flex } from "@chakra-ui/react";
import React from "react";
import { BiBorderAll } from "react-icons/bi";
import Typewriter from "typewriter-effect";

const Focus = () => {
  return (
    <Flex
      className="full_width"
      align="center"
      justify="center"
      minH={{ base: "20vh", md: "60vh", xl: "100vh" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          textAlign={{ base: "left", md: "center", xl: "center" }}
          align="flex-start"
          justify={{ base: "flex-start", md: "center", xl: "center" }}
          fontWeight={400}
          fontSize={{
            base: "20px",
            md: "40px",
            lg: "55px",
            xl: "70px",
          }}
          // px={{ base: "0px", md: "20px", lg: "24px", xl: "26px" }}
          py={{ base: "30px", md: "20px", lg: "24px", xl: "0px" }}
        >
          <Typewriter
            options={{
              strings: `“Our focus is on creating products and services that empower
          businesses, streamline operations, and foster growth in the digital
          era.”`,
              autoStart: true,
              loop: true,
              delay: 0,
              deleteSpeed: 600,
              pauseFor: 1500,
            }}
          />
        </Flex>
      </Container>
    </Flex>
  );
};

export default Focus;
