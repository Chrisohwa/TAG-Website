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
      minH={{ base: "60vh", lg: "60vh", xl: "100vh" }}
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
        {/* <source
          src="/images/sustainability/sustainabilityhero.mp4"
          type="video/mp4"
        /> */}
        <source src="https://ik.imagekit.io/ocarsly/Background%20Videos/sustainabilityHero%20(1).mp4?updatedAt=1758056061670" />
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
        px={{ base: "10px", md: "15px", xl: "0px" }}
        h={{ base: "40vh", lg: "60vh" }}
      >
        <Flex
          zIndex={1}
          position="relative"
          direction="column"
          justify="flex-end"
          h="100%"
        >
          <Heading
            color="#E6EDF4"
            fontWeight="bold"
            fontSize={{ base: "4xl", xl: "6xl" }}
            mb="14px"
          >
            E.A.R.T.H. in Action
          </Heading>
          {/* <Text color="#E6EDF4" fontWeight="bold" fontSize="md">
            Discover Our Impact
          </Text> */}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
