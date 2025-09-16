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
import { useNavigate } from "react-router-dom";
import BrandLogo from "./BrandLogo";
import BrandlogoResponsive from "./BrandlogoResponsive";

const Partner = () => {
  const navigate = useNavigate();
  return (
    <Box
      mt={{ base: 0, md: 0, xl: "0px" }}
      // bgGradient="to-b"
      // gradientFrom="#e7ebef 60%"
      // gradientTo="#5e83a6"
      className="full_width"
      minH="50vh"
      pt={{ base: "60px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          justify={{ base: "center", md: "space-between", xl: "space-between" }}
          align={{ base: "center", md: "center", xl: "center" }}
          flexDir={{ base: "column", md: "column", xl: "row" }}
          gap="10px"
        >
          <Flex
            direction="column"
            align={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
            justify={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
            gapY={4}
            textAlign={{ base: "left", md: "left", xl: "left" }}
            bg="transparent"
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
              fontSize={{ base: "24px", md: "2xl", xl: "30px" }}
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
              onClick={() => navigate("/about-us")}
            >
              Learn More About Us
            </Button>
          </Flex>

          <Flex
            display={{ base: "none", md: "none", xl: "flex" }}
            py={{ base: 0, md: "30px", xl: "30px" }}
          >
            {/* <Image
              src="/images/landing/partners.png"
              alt="partners"
              w={{ base: "", md: "", xl: "" }}
            /> */}

            <BrandLogo />
          </Flex>

          <Flex
            display={{ base: "flex", md: "flex", xl: "none" }}
            py={{ base: "15px", md: "30px", xl: "30px" }}
            minH={{ base: "250px", md: "300px", xl: "" }}
            align="center"
            justify="center"
          >
            <BrandlogoResponsive />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default Partner;
