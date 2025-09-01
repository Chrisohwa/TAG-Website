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

const Stories = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  const handleTogglePlay = () => {
    if (!videoRef.current) return;

    if (play) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlay(!play);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleSeek = (seconds) => {
    if (!videoRef.current) return;
    videoRef.current.currentTime += seconds;
  };

  const handleSpeed = (e) => {
    const rate = parseFloat(e.target.value);
    if (!videoRef.current) return;
    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
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
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          align="center"
          justify="space-between"
          direction={{ base: "column-reverse", md: "row" }}
          gap="40px"
        >
          {/* LEFT TEXT CONTENT */}
          <Box flex="1">
            <Heading
              as="h2"
              fontSize={{ base: "32px", md: "32px", xl: "64px" }}
              fontWeight="600"
              color="black"
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
              Transalliance Group is a people-first, growth-driven workplace. We
              value collaboration, innovation, and impact. Join us to shape the
              future of businesses in emerging economies.
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
            >
              Partner With Us
            </Button>
          </Box>

          <Box
            flex="1"
            position="relative"
            display="flex"
            justifyContent="center"
            role="group" // 👈 Move role="group" here
          >
            {/* Circular video thumbnail */}
            <Box
              as="button"
              position="relative"
              w={{ base: "full", md: "340px" }}
              h={{ base: "260px", md: "340px" }}
              borderRadius={{ base: "22px", md: "full" }}
              overflow="hidden"
              boxShadow="xl"
              cursor="pointer"
              onClick={handleTogglePlay}
            >
              <video
                ref={videoRef}
                muted
                loop
                playsInline
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "opacity 0.5s ease-in-out",
                }}
              >
                <source src="/images/landing/dusk.mp4" type="video/mp4" />
              </video>

              {/* Play/Pause button overlay */}
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
                display={play ? "none" : "flex"}
              >
                {play ? <IoPauseSharp size={28} /> : <PiPlayFill size={28} />}
              </Flex>
            </Box>

            {/* Controls */}
            <HStack
              mt={4}
              gap="25px"
              position="absolute"
              bottom="10%"
              w="full"
              justify="center"
              opacity={0}
              transition="opacity 0.3s ease"
              _hover={{ opacity: 1 }} // 👈 Now works
            >
              <Box as="button" onClick={() => handleSeek(-10)}>
                <IoPlayBack color="#fff" size={28} />
              </Box>

              <Box as="button" onClick={handleTogglePlay}>
                {play ? (
                  <IoPauseSharp color="#fff" size={28} />
                ) : (
                  <IoPlaySharp color="#fff" size={28} />
                )}
              </Box>

              <Box as="button" onClick={() => handleSeek(10)}>
                <IoPlayForward color="#fff" size={28} />
              </Box>
            </HStack>

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
        </Flex>
      </Container>
    </Box>
  );
};

export default Stories;
