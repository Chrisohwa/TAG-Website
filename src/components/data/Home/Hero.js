import {
  Box,
  Text,
  Flex,
  VStack,
  Heading,
  useMediaQuery,
  Container,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [loaded, setLoaded] = useState(false);
  return (
    <Flex
      position="relative"
      minH={{ base: "60vh", xl:"100vh" }}
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
        <source src="/images/landing/dusk.mp4" type="video/mp4" />
      </video>

      {/* dark background overlay */}
            <Box
              position="absolute"
              top={0}
              left={0}
              width="100%"
              height="100%"
              bg="rgba(0, 0, 0, 0.3)"
              zIndex={1}
            />

      {/* Content container */}
      <Container
        maxW="1350px"
        mt={{ base: "0px", md: "0px", xl: "55px" }}
        pl="0px"
      >
        <Flex
          position="relative"
          w="full"
          maxW="1350px"
          pl={{ base: 4, md: 2, xl: 0 }}
          zIndex={1}
          justify={{ base: "center", md: "Flex-start" }}
          align="center"
        >
          {/* Left: Heading */}
          <Heading
            color="#E6EEEB"
            fontSize={{ base: "2xl", md: "4xl", lg: "63px" }}
            fontWeight={700}
            maxW={{ base: "90%", md: "500px", lg: "845px", }}
            lineHeight={{ base: "1.1", md: "84px" }}
            textAlign={{ base: "center", md: "left", lg: "left" }}
          >
            Engineering Business Innovations for the Future
          </Heading>
        </Flex>
      </Container>

      <Container
        maxW="1350px"
        mt={{ base: "0px", md: "120px", xl: "60px" }}
        pr="0px"
      >
        <Flex
          position="relative"
          w="full"
          pr={{ base: 4, md: 2, xl: "60px" }}
          zIndex={1}
          justify={{ base: "center", md: "flex-end" }}
        >
          <Flex
            flexDir="column"
            align={{ base: "center", md: "Flex-start", xl: "flex-start" }}
            justify={{ base: "", md: "flex-start", xl: "flex-end" }}
            spacing={1}
            color="#E6EEEB"
            fontSize={{ base: "sm", md: "20px" }}
            fontWeight={700}
            
          >
            <Text>Currency Services |</Text>
            <Text>Travel, Tourism &amp; Hospitality Services |</Text>
            <Text>Mining &amp; Minerals Production |</Text>
            <Text>Financial Technology</Text>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
