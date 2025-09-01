import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  useMediaQuery,
  Container,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [loaded, setLoaded] = useState(false);
  return (
    <Flex
      position="relative"
      minH={{ base: "60vh", md: "60vh", xl: "100vh" }}
      overflow="hidden"
      className="full_width"
      align="center"
      justify="center"
      flexDir="column-reverse"
      pt={{ base: "", lg: "10%" }}
      gapY={{ base: "50px", lg: "" }}
    >
      {/* Video background */}
      <video
        autoPlay
        // poster="images/landing/posterimage.png"
        muted
        loop
        playsInline
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          transition: "opacity 0.5s ease-in-out",
          top: 0,
          left: 0,
          zIndex: 0,
        }}
        onCanPlay={() => setLoaded(true)}
      >
        <source src="/images/contact/contacthero.mp4" type="video/mp4" />
      </video>
      {/* dark background overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.61)"
        zIndex={1}
      />

      {/* Content container */}
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        mt={{ base: "120px", md: "", xl: "100px" }}
      >
        <Flex
          zIndex={1}
          position="relative"
          direction="column"
          justify={{ base: "flex-end", md: "flex-end", xl: "flex-end" }}
          align="flex-start"
          h="100%"
          color="#E6EEEB"
          gap="24px"
        >
          <Heading
            color="#FFFFFF"
            fontWeight="700"
            fontSize={{ base: "36px", md: "48px", xl: "48px" }}
            lineHeight="48px"
          >
            Get in Touch
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "20px", xl: "20px" }}
            fontWeight="400"
            lineHeight="28px"
            maxW={{ base: "", md: "", xl: "700px" }}
            textAlign={{ base: "left", md: "left", xl: "left" }}
            color="#E5E7EB"
          >
            We'd love to hear from you. Whether you have questions about our
            services, career opportunities, or partnership possibilities, our
            team is here to help.
          </Text>

          <HStack gap={8}>
            <Button
              bg="#003B73"
              borderRadius="12px"
              border="1px solid #fff"
              p="8px"
              mt="10px"
              mb="30px"
              w={{ base: "190px", md: "205px" }}
              h="54px"
              fontSize="16px"
            >
              Send Us a Message
            </Button>

            <Button
              bg="transparent"
              borderRadius="12px"
              border="1px solid #fff"
              p="8px"
              mt="10px"
              mb="30px"
              w={{ base: "190px", md: "205px" }}
              h="54px"
              fontSize="16px"
            >
              Find Our Office
            </Button>
          </HStack>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
