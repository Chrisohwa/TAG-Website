import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Image,
  Container,
} from "@chakra-ui/react";
import React from "react";

const Partner = () => {
  return (
    <Box
      mt={{ base: 0, md: 0, xl: "0px" }}
      bgGradient="to-b"
      gradientFrom="#e7ebef 60%"
      gradientTo="#5e83a6"
      className="full_width"
      minH="50vh"
      pt={{ base: "60px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          justify={{ base: "center", md: "center", xl: "space-between" }}
          align={{ base: "center", md: "center", xl: "center" }}
          gap="10px"
        >
          <Flex
            direction="column"
            align={{ base: "center", md: "center", xl: "flex-start" }}
            justify={{ base: "center", md: "center", xl: "flex-start" }}
            gapY={3}
            textAlign={{ base: "center", md: "center", xl: "left" }}
            bg="transparent" // Ensure inner content doesn’t block gradient
          >
            <Text
              color="#005032"
              fontWeight={700}
              fontSize={{ base: "20px", md: "20px", xl: "20px" }}
            >
              Partners and Collaborators
            </Text>
            <Heading
              color="#3D3C3C"
              fontWeight={600}
              fontSize={{ base: "lg", md: "2xl", xl: "30px" }}
            >
              Working Together for Africa&apos;s Prosperity
            </Heading>
            <Text
              color="#002C56"
              fontWeight={500}
              fontSize={{ base: "16px", md: "20px", xl: "20px" }}
              maxW="550px"
              lineHeight="34px"
            >
              Our mission is simple yet profound: to consistently deliver
              superior value to all our stakeholders across the globe by driving
              sustainable growth, and empowering communities. With a legacy of
              trust, integrity, and impact, Transalliance is dedicated to
              creating opportunities that improve lives and build resilient
              economies.
            </Text>
            <Button
              bg="#003366"
              borderRadius="12px"
              p="15px"
              mt="10px"
              w="287px"
              h="76px"
              fontSize="20px"
            >
              Learn More About Us
            </Button>
          </Flex>

          <Flex
            display={{ base: "none", md: "block" }}
            py={{ base: 0, md: "30px", xl: "30px" }}
          >
            <Image src="/images/landing/partners.png" alt="partners" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Partner;
