import { Flex, Box, Text, Button, Heading, Image, Container } from "@chakra-ui/react";
import React from "react";

const Impact = () => {
  return (
    <Flex
      className="full_width"
      bgColor="#e0e0e0"
      direction="column"
      align="center"
      justify="center"
      minH={{ base: "", md: "80vh", xl: "100vh" }}
      pt={{ base: "40px", md: "40px", xl: "50px" }}
    >
      <Container maxW="1350px" px="10px">
        <Flex
          flexDir="column"
          gap="30px"
          textAlign="Center"
          justifyContent="center"
          align="center"
          w="full"
          px={{ base: "", md: "", xl: "40px" }}
        >
          <Heading
            color="#00472D"
            fontWeight={700}
            fontSize="20px"
            lineHeight="64px"
          >
            Our Impact (Sustainability)
          </Heading>
          <Heading
            color="#001A32"
            fontWeight={600}
            fontSize={{ base: "24px", md: "28px", xl: "36px" }}
          >
            Building a Better Tomorrow, Today
          </Heading>
          <Text
            w="full"
            color="#002C56"
            fontWeight={500}
            fontSize={{ base: "16px", md: "22px", xl: "24px" }}
            lineHeight="34px"
            textAlign="center"
            px="15px"
            mb={{ base: "0px", md: "0px", xl: "50px" }}
          >
            From empowering communities to championing ethical mining & minerals
            production, sustainability is at the heart of everything we do. Our
            initiatives reflect our unwavering commitment to social and
            environmental responsibility.
          </Text>

          <Button
            bg="#003366"
            color="#fff"
            borderRadius="12px"
            fontWeight={400}
            fontSize={{ base: "12px", md: "14px", xl: "20px" }}
            px={{ base: "20px", md: "20px", xl: "45px" }}
            py={{ base: "5px", md: "6px", xl: "30px" }}
            w="287px"
            h="76px"
          >
            Discover More
          </Button>
        </Flex>
        <Box p="60px">
          <Image src="/images/landing/circles.png" />
        </Box>
      </Container>
    </Flex>
  );
};

export default Impact;
