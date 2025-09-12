import {
  Box,
  Text,
  Flex,
  VStack,
  Heading,
  useMediaQuery,
  Container,
  Link,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BsForwardFill } from "react-icons/bs";

const Hero = () => {
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const links = [
    { href: "/businesses/currency", label: "Currency Services" },
    {
      href: "/businesses/ethical-mining",
      label: "Travel, Tourism & Hospitality Services",
    },
    { href: "/businesses/travels", label: "Mining & Minerals Production" },
    { href: "/businesses/fintech", label: "Financial Technology" },
  ];
  return (
    <Flex
      position="relative"
      minH={{ base: "60vh", xl: "100vh" }}
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
        mt={{ base: "0px", md: "0px", xl: "0px" }}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Heading
              color="#E6EEEB"
              fontSize={{ base: "2xl", md: "4xl", lg: "63px" }}
              fontWeight={700}
              maxW={{ base: "90%", md: "500px", lg: "845px" }}
              lineHeight={{ base: "30px", md: "50px", xl:"84px" }}
              textAlign={{ base: "left", md: "left", lg: "left" }}
            >
              Engineering Business Innovations for the Future
            </Heading>
          </motion.div>
        </Flex>
      </Container>

      <Container
        maxW="1350px"
        mt={{ base: "0px", md: "120px", xl: "20px" }}
        pr="0px"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ x: [60, 0], opacity: 1 }}
          transition={{ duration: 1.1 }}
        >
          <Flex
            position="relative"
            w="full"
            pr={{ base: 4, md: 2, xl: "60px" }}
            zIndex={1}
            justify={{ base: "flex-start", md: "flex-end" }}
          >
            <Flex
              flexDir="column"
              align={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
              fontSize={{ base: "sm", md: "24px" }}
              fontWeight={700}
              zIndex={2}
              color="#E6EEEB"
            >
              {links.map((link, index) => (
                <Flex
                  key={index}
                  gap="20px"
                  justify={{ base: "flex-start", md: "", xl: "center" }}
                  align={{ base: "flex-start", md: "", xl: "center" }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <Link color="#fff" textDecoration="none" href={link.href}>
                    <Text
                      transition="0.3s ease-in-out"
                      _hover={{
                        transform: "scale(1.05)",
                        textDecoration: "underline",
                      }}
                    >
                      {link.label}
                    </Text>
                  </Link>

                  {hoveredIndex === index && (
                    <Box mt="10px" transition="0.3s">
                      <BsForwardFill size={20} color="#fff" />
                    </Box>
                  )}
                </Flex>
              ))}
            </Flex>
          </Flex>
        </motion.div>
      </Container>
    </Flex>
  );
};

export default Hero;
