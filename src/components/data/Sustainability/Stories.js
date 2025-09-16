import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  Select,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import React, { useState, useRef } from "react";
import { PiPlayFill } from "react-icons/pi";
import {
  IoPlaySharp,
  IoPauseSharp,
  IoVolumeMute,
  IoVolumeHigh,
  IoPlayForward,
  IoPlayBack,
} from "react-icons/io5";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Stories = () => {
  const navigate = useNavigate();
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

const handleTogglePlay = () => {
  setPlay(true);
};

  return (
    <Box
      className="full_width"
      bgGradient="to-br"
      gradientFrom="#fff 60%"
      gradientTo="#00376b"
      py={{ base: 5, md: 40 }}
      minH={{ base: "60vh", md: "70vh", xl: "100vh" }}
      zIndex={1}
      mb={{ base: "-48px", md: "", xl: "" }}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        id="stories"
      >
        <Flex
          align="center"
          justify="flex-start"
          direction={{ base: "column-reverse", md: "row" }}
          gap="100px"
        >
          {/* LEFT TEXT CONTENT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box flex="1" maxW="583px">
              <Heading
                as="h2"
                fontSize={{ base: "32px", md: "32px", xl: "54px" }}
                fontWeight="600"
                color="#090808"
                mb="20px"
              >
                Stories from the Field
              </Heading>
              <Text
                fontSize={{ base: "16px", md: "20px", xl: "24px" }}
                fontWeight="500"
                lineHeight="38px"
                color="#002141"
                mb="30px"
              >
                Transalliance Group is a people-first, growth-driven workplace.
                We value collaboration, innovation, and impact. Join us to shape
                the future of businesses in emerging economies.
              </Text>

              <Button
                bg="#0040D8"
                color="#fff"
                px="30px"
                py="18px"
                fontSize="18px"
                borderRadius="8px"
                fontWeight="500"
                _hover={{ bg: "#004ECC" }}
                onClick={() => navigate("/contact-us/#send-us-a-message")}
              >
                Partner With Us
              </Button>
            </Box>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [50, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box
              flex="1"
              position="relative"
              display="flex"
              justifyContent="center"
              role="group"
            >
              {/* Circular video thumbnail */}
              <Box
                as="button"
                position="relative"
                w={{ base: "full", md: "443px" }}
                h={{ base: "260px", md: "443px" }}
                rounded={play ? "22px" : "full"}
                overflow="hidden"
                boxShadow="xl"
                cursor="pointer"
                onClick={!play ? handleTogglePlay : undefined}
              >
                {play ? (
                  <iframe
                    src="https://www.youtube.com/embed/tVBZq2fq-WA?autoplay=1&mute=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    style={{ display: "block" }}
                    title="Our Stories"
                  />
                ) : (
                  <Image
                    src="images/sustainability/storiesopt.jpg"
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    transition="opacity 0.5s ease-in-out"
                  />
                )}
                {!play && (
                  <Flex
                    position="absolute"
                    top="50%"
                    left="50%"
                    transform="translate(-50%, -50%)"
                    w="70px"
                    h="70px"
                    borderRadius="full"
                    bg="white"
                    align="center"
                    justify="center"
                    boxShadow="md"
                  >
                    <PiPlayFill size={28} />
                  </Flex>
                )}
              </Box>

              {/* Decorative Dots PNG */}
              <Image
                src="/images/sustainability/dots.png"
                alt="decorative dots"
                position="absolute"
                right="-60px"
                bottom="10px"
                w={{ base: "120px", md: "160px" }}
                pointerEvents="none"
              />
            </Box>
          </motion.div>
        </Flex>
      </Container>
    </Box>
  );
};

export default Stories;
