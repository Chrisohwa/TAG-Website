import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  useMediaQuery,
  Container,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

const VisionSection = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box
      position="relative"
      minH={{ base: "", md: "", xl: "100vh" }}
      display="flex"
      alignItems="center"
      className="full_width"
      // bgImg="url(/images/landing/map.png)"
      // bgSize="contain"
      // bgPos="0% -50% "
      overflow="hidden"
    >
      <Flex
        position={{ base: "", md: "absolute" }}
        overflow="hidden"
        h={{ base: "", md: "", xl: "full" }}
        className="full_width"
        display={{ base: "none", md: "flex", xl: "flex" }}
      >
        <Image
          src="/images/landing/map.png"
          // w={{ base: "", md: "80rem", xl: "100rem" }}
          h="140vh"
          position={{ base: "", md: "relative" }}
          objectFit="contain"
          top={{ md: "-120px", xl: "-260px" }}
          right={{ md: "-240px", xl: "-270px" }}
        />
      </Flex>
      <Container
        maxW="1350px"
        px={{ base: "0px", md: "15px", xl: "0px" }}
        overflow="hidden"
      >
        {/* <Flex
          position={{ base: "", md: "absolute" }}
          overflow="hidden"
          h={{ base: "", md: "100%", xl: "full" }}
          display={{ base: "none", md: "flex", xl: "none" }}
          right="-120px"
        >
          <Image
            src="/images/landing/map.png"
            w={{ base: "", md: "", xl: "" }}
            h="450px"
          />
        </Flex> */}

        <Flex
          direction="column"
          align={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
          justify={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
          bgColor="#003B73BF"
          maxW={{ base: "100%", md: "600px", xl: "860px" }}
          p={{ base: "40px 15px", md: "25px 66px", xl: "40px 76px" }}
          gap="20px"
          borderRadius={{ base: "5px", md: "23px", xl: "23px" }}
          w={{ base: "full", md: "full", xl: "" }}
          mt={{ base: "-5px", md: "40px", xl: "0px" }}
          backdropFilter="blur(10px)"
        >
          {/* <Text
            fontSize={{ base: "14px", md: "15px", xl: "20px" }}
            fontWeight={600}
            color="#d4a861"
          >
            What drives us{" "}
          </Text> */}
          <Heading
            fontWeight={700}
            fontSize={{ base: "28px", md: "32px", xl: "40px" }}
            color="#fff"
          >
            Our Vision for Africa
          </Heading>
          <Text
            fontSize={{ base: "16px", md: "18px", xl: "32px" }}
            fontWeight={600}
            color="#d4a861"
          >
            Rooted in Excellence, Committed to the Future
          </Text>

          <Text
            fontSize={{ base: "16px", md: "16px", xl: "23px" }}
            fontWeight={500}
            color="#E6EDF4"
            maxW={{ base: "100%", md: "450px", xl: "745px" }}
            textAlign={{ base: "left", md: "justify", xl: "left" }}
            lineHeight={{ base: "", md: "", xl: "34px" }}
          >
            Our mission is simple yet profound: to consistently deliver superior
            value to all our stakeholders across the globe by driving
            sustainable growth, and empowering communities. With a legacy of
            trust, integrity, and impact, Transalliance is dedicated to creating
            opportunities that improve lives and build resilient economies.
          </Text>

          <Button
            w="287px"
            h="76px"
            bg="#fff"
            color="#002141"
            borderRadius="12px"
            fontSize={{ base: "18px", md: "20px", xl: "20px" }}
            fontWeight={600}
            px="12px"
            py="8px"
            onClick={() => navigate("/about-us")}
          >
            Learn More About Us
          </Button>
        </Flex>
      </Container>
    </Box>
  );
};

export default VisionSection;
