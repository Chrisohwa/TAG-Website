import {
  Box,
  Text,
  Flex,
  Button,
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
        <source src="/images/career/careerhero.mp4" type="video/mp4" />
      </video>
      {/* dark background overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.62)"
        zIndex={1}
      />

      {/* Content container */}
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        minH={{ base: "60vh", lg: "100vh" }}
        mt={{ base: "120px", md: "", xl: "" }}
      >
        <Flex
          zIndex={1}
          position="relative"
          direction="column"
          justify={{base:"flex-end", md:"flex-end", xl:"center"}}
          align="flex-start"
          h="100%"
          color="#E6EEEB"
          gap="24px"
        >
          <Heading
            color="#E6EDF4"
            fontWeight="700"
            fontSize={{ base: "36px", md: "48px", xl: "60px" }}
            lineHeight="100%"
          >
            Life at Transalliance Group
          </Heading>
          <Text
            fontSize={{ base: "18px", md: "20px", xl: "24px" }}
            fontWeight={600}
            lineHeight="38px"
            maxW={{ base: "", md: "", xl: "1283px" }}
            textAlign={{base:"left", md:"left", xl:"left"}}
          >
            At Transalliance Group, we are more than an investment holding
            company, we are a collective of visionaries, innovators, and
            changemakers engineering solutions for the future. With interests
            spanning currency services, financial technology, travel &
            hospitality, and ethical mining, we are shaping industries that
            power the global economy.<br></br> Here, you&apos;ll collaborate
            with some of the most driven professionals across diverse sectors,
            building solutions that impact lives, strengthen communities, and
            redefine possibilities in Africa and beyond.
          </Text>
          <Button
            bg="#003366"
            borderRadius="12px"
            p="15px"
            mt="10px"
            mb="30px"
            w="287px"
            h="76px"
            fontSize="20px"
          >
            Learn More About Us
          </Button>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
