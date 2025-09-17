import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Container,
  VStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const MotionBox = motion(Box);

const OfficeLife = () => {
  const navigate = useNavigate();
  const imgEffect = {
    as: "img",
    w: "100%",
    h: "100%",
    objectFit: "cover",
    borderRadius: "12px",
  };

  const hoverAnim = {
    whileHover: { scale: 1.05, boxShadow: "0px 8px 20px rgba(0,0,0,0.15)" },
    transition: { duration: 0.3 },
  };

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh" }}
      py={{ base: 10, md: 20, xl: "150px" }}
      mt={{ base: "-25px", md: "-55px", xl: "-55px" }}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        id="life"
      >
        <Flex
          flexDir="column"
          justify={{ base: "flex-start", md: "center", xl: "center" }}
          align={{ base: "flex-start", md: "center", xl: "center" }}
          gap={4}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "32px", md: "36px", xl: "48px" }}
            lineHeight="40px"
            color="#111827"
          >
            Life at Our Office
          </Heading>
          <Text
            textAlign={{ base: "left", md: "center", xl: "center" }}
            fontWeight={400}
            fontSize="20px"
            lineHeight="28px"
            maxW={{ base: "", md: "", xl: "800px" }}
            color="#4B5563"
          >
            Take a glimpse into our vibrant workplace culture and see what makes
            our office a great place to work
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            base: "1fr", // mobile
            md: "repeat(2, 1fr)", // tablet
            xl: "repeat(4, 1fr)", // desktop
          }}
          templateRows={{
            base: "repeat(7, 200px)", // all stacked
            md: "repeat(5, 200px)", // enough rows for spans
            xl: "repeat(3, 200px)", // your original
          }}
          gap="20px"
          maxW="1350px"
          mx="auto"
          py="60px"
        >
          {/* Grid 1 */}
          <MotionBox
            gridColumn={{ base: "1", md: "1 / span 2", xl: "1 / span 2" }}
            gridRow={{ base: "1", md: "1 / span 2", xl: "1 / span 2" }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid1opt.jpg" alt="grid1" />
          </MotionBox>

          {/* Grid 2 */}
          <MotionBox
            gridColumn={{ base: "1", md: "1", xl: "1" }}
            gridRow={{ base: "2", md: "3", xl: "3" }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ x: [-60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid2opt.jpg" alt="grid2" />
          </MotionBox>

          {/* Grid 3 */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "2" }}
            gridRow={{ base: "3", md: "3", xl: "3" }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ y: [60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid3opt.jpg" alt="grid3" />
          </MotionBox>

          {/* Grid 4 */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "3" }}
            gridRow={{ base: "4", md: "4", xl: "1" }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ y: [-60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid4opt.jpg" alt="grid4" />
          </MotionBox>

          {/* Grid 5 */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "3" }}
            gridRow={{
              base: "5",
              md: "3", // stack under grid4 in md
              xl: "2 / span 2",
            }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ y: [60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid5opt.jpg" alt="grid5" />
          </MotionBox>

          {/* Grid 6 */}
          <MotionBox
            gridColumn={{ base: "1", md: "1", xl: "4" }}
            gridRow={{
              base: "6",
              md: "4 / span 2",
              xl: "1 / span 2",
            }}
            {...hoverAnim}
            initial={{ opacity: 0 }}
            whileInView={{ x: [60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Box {...imgEffect} src="/images/career/grid6opt.jpg" alt="grid6" />
          </MotionBox>

          {/* Button */}
          <MotionBox
            gridColumn={{ base: "1", md: "2", xl: "4" }}
            gridRow={{ base: "7", md: "5", xl: "3" }}
            alignSelf="center"
            justifySelf="center"
            initial={{ opacity: 0 }}
            whileInView={{ x: [60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
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
              onClick={() => navigate("/about-us")}
            >
              Learn More About Us
            </Button>
          </MotionBox>
        </Grid>
      </Container>
    </Box>
  );
};

export default OfficeLife;
