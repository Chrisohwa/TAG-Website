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
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

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
        {/* <source src="/images/about/aboutHreo.mp4" type="video/mp4" /> */}
        <source src="https://ik.imagekit.io/ocarsly/Background%20Videos/aboutHreo.mp4?updatedAt=1758056064753" />
      </video>
      {/* dark background overlay */}
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 60%)"
        zIndex={1}
      />

      {/* Content container */}
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        mt={{ base: "100px", md: "", xl: "" }}
        pt={{ base: "", md: "200px", xl: "200px" }}
        minH={{ base: "40vh", md: "60vh", xl: "100vh" }}
      >
        <Flex
          zIndex={1}
          position="relative"
          direction="column"
          justify="flex-end"
          h="full"
        >
          {/* <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Heading
              color="#E6EDF4"
              fontWeight="bold"
              fontSize={{ base: "32px", xl: "6xl" }}
              mb={{ base: "20px", md: "", xl: "57px" }}
            >
              Who we are
            </Heading>
          </motion.div> */}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Text
              color="#E6EDF4"
              fontWeight="500"
              lineHeight="32px"
              fontSize={{ base: "18px", md: "20px", xl: "24px" }}
              letterSpacing="4%"
              maxW="1200px"
            >
              At a time when the virtues of objectivity, accuracy, fairness, and
              transparency are at their lowest, we consider it our duty to
              pursue them. Our customers across the world depend on us to
              provide them with reliable and quality customer care, while
              offering solutions to the world's most important individuals,
              corporations, governments, and institutions.
            </Text>
          </motion.div>

          <Flex
            align={{ base: "", md: "", xl: "flex-end" }}
            justify="flex-end"
            w="100%"
          >
            <Flex
              flexDir="column"
              fontFamily="Bricolage Grotesque, sans-serif"
              color="#E6EDF4"
              fontWeight={700}
              fontSize={{ base: "28px", md: "32px", xl: "40px" }}
              mr={{ base: "", md: "", xl: "24%" }}
              py="0px"
            >
              <Typewriter
                options={{
                  strings: [`-Kamsi Okafor`],
                  autoStart: true,
                  loop: true,
                  delay: 100,
                  deleteSpeed: 600,
                  pauseFor: 1500,
                }}
              />
              <Text
                fontSize={{ base: "20px", md: "22px", xl: "24px" }}
                fontWeight={500}
              >
                Founder/CEO
              </Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
