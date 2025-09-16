import {
  Box,
  Text,
  Flex,
  Button,
  Heading,
  useMediaQuery,
  Container,
  Image
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [loaded, setLoaded] = useState(false);
  return (
    <Flex
      position="relative"
      minH={{ base: "60vh", lg: "60vh", xl: "100vh" }}
      // maxH="100vh"
      overflow="hidden"
      className="full_width"
      align="center"
      justify="center"
      flexDir="column-reverse"
      pt={{ base: "", lg: "10%" }}
      gapY={{ base: "50px", lg: "" }}
    >
      <Image
        src="/images/career/careerheroimageopt.jpg"
        h={{ base: "100%", md: "80%", xl: "100%" }}
        w="100%"
        // maxH="100vh"
        position="absolute"
        top="0"
        left="0"
        zIndex={0}
        objectFit="cover"
        transition="opacity 0.5s ease-in-out"
      />
      {/* Video background */}
      {/* <video
        autoPlay
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
      </video> */}
      {/* dark background overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 0.68)"
        zIndex={1}
      />

      {/* Content container */}
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        h={{ base: "100%", lg: "100vh" }}
        mt={{ base: "200px", md: "", xl: "" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [60, 0], opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <Flex
            zIndex={1}
            position="relative"
            direction="column"
            justify={{ base: "flex-end", md: "flex-end", xl: "flex-end" }}
            align="flex-start"
            h={{ base: "100%", md: "100%", xl: "60vh" }}
            color="#E6EEEB"
            gap="24px"
            my="auto"
          >
            <Heading
              color="#E6EDF4"
              fontWeight="700"
              fontSize={{ base: "24px", md: "48px", xl: "60px" }}
              lineHeight="100%"
            >
              Life at Transalliance Group
            </Heading>
            <Text
              fontSize={{ base: "16px", md: "20px", xl: "24px" }}
              fontWeight={600}
              lineHeight={{ base: "22px", md: "32px", xl: "38px" }}
              maxW={{ base: "", md: "", xl: "1283px" }}
              textAlign={{ base: "left", md: "left", xl: "left" }}
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
              mb="84px"
              w="287px"
              h="76px"
              fontSize="20px"
            >
              Learn More About Us
            </Button>
          </Flex>
        </motion.div>
      </Container>
    </Flex>
  );
};

export default Hero;
