import { Box, Button, Container, Grid, Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Socials from "./Socials";


const MotionBox = motion(Box);
export default function SocialSection() {
  const hoverAnim = {
    whileHover: { scale: 1.05 },
    transition: { duration: 0.3 },
  };

  const imgEffect = {
    as: "img",
    objectFit: "cover",
    w: "100%",
    h: "100%",
    borderRadius: "12px",
  };

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh" }}
      py={{ base: 10, md: 20 }}
      mt={{ base: "-25px", md: "-55px", xl: "-55px" }}
      mb={{ base: "-55px", md: "", xl: "" }}
      bgGradient="to-t"
      gradientTo="#E9F4FF "
      gradientFrom="#001e39 80%"
      id=""
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Grid
          templateColumns={{
            base: "1fr", // mobile
            md: "repeat(2, 1fr)", // tablet
            xl: "repeat(5, 1fr)", // desktop
          }}
          templateRows={{
            base: "repeat(9, 200px)", // stacked
            md: "repeat(6, 200px)", // 3 rows tablet
            xl: "repeat(3, 200px)", // 3 rows desktop
          }}
          gap="20px"
          maxW="1350px"
          mx="auto"
          py="60px"
        >
          {/* ====== Text Section ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "1/ span 2", xl: "1 / span 2" }}
            gridRow={{ base: "1", md: "1", xl: "1" }}
            display="flex"
            alignItems="center"
            justifyContent="flex-start"
            {...hoverAnim}
          >
            <Heading
              fontSize={{ base: "24px", md: "36px", xl: "48px" }}
              fontWeight={400}
              lineHeight="short"
              maxW="450px"
              color="#fff"
            >
              Follow us on social to see what we're up to!
            </Heading>
          </MotionBox>

          {/* ====== Car1 ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "1", xl: "1 / span 2" }}
            gridRow={{ base: "2", md: "2", xl: "2 / span 2" }}
            {...hoverAnim}
          >
            <Box {...imgEffect} src="/images/career/car1opt.jpg" alt="car1" />
          </MotionBox>

          {/* ====== Car2 ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "3" }}
            gridRow={{ base: "3", md: "2", xl: "1 / span 2" }}
            {...hoverAnim}
          >
            <Box {...imgEffect} src="/images/career/car2opt.jpg" alt="car2" />
          </MotionBox>

          {/* ====== Car3 ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "1", xl: "3" }}
            gridRow={{ base: "4", md: "3/span 4", xl: "3" }}
            {...hoverAnim}
          >
            <Box {...imgEffect} src="/images/career/car3opt.jpg" alt="car3" />
          </MotionBox>

          {/* ====== Car4 ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "4" }}
            gridRow={{ base: "5", md: "3", xl: "1 / span 3" }}
            {...hoverAnim}
          >
            <Box {...imgEffect} src="/images/career/car4opt.jpg" alt="car4" />
          </MotionBox>

          {/* ====== Car5 ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "5" }}
            gridRow={{ base: "6", md: "4", xl: "1" }}
            {...hoverAnim}
          >
            <Box {...imgEffect} src="/images/career/car5opt.jpg" alt="car5" />
          </MotionBox>

          {/* ====== Socials ====== */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "5" }}
            gridRow={{ base: "7", md: "5", xl: "2" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            borderRadius="12px"
            p={4}
            {...hoverAnim}
          >
            <Socials />
          </MotionBox>

          {/* ====== Button ====== */}
          {/* <Box
            gridColumn={{ base: "1", md: "2", xl: "5" }}
            gridRow={{ base: "8", md: "6", xl: "3" }}
            alignSelf="center"
            justifySelf="center"
          >
            <Button
              bg="#003366"
              borderRadius="12px"
              p="15px"
              mt="10px"
              mb="30px"
              w="287px"
              h="76px"
              fontSize="20px"
              color="white"
              _hover={{ bg: "blue.700" }}
            >
              Learn More About Us
            </Button>
          </Box> */}
        </Grid>
      </Container>
    </Box>
  );
}
