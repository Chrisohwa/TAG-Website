"use client";
import {
  Box,
  Text,
  Flex,
  Heading,
  Container,
  Grid,
  GridItem,
  Button,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MotionFlex = motion(Flex);

const Expertise = () => {
   const navigate = useNavigate();
  return (
    <Box
      className="full_width"
      // bgGradient="to-b"
      // gradientFrom="#fff 60%"
      // gradientTo="#00376b"
      py={{ base: 5, md: "60px" }}
      zIndex={1}
      mb={{ base: "-50px", md: "-50px", lg: "-50px", xl: "0px" }}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        zIndex={99}
      >
        {/* Section Heading */}
        <Heading
          color="#151D26"
          fontWeight="400"
          fontSize={{ base: "2xl", md: "3xl", xl: "74px" }}
          lineHeight={{ base: "70px", md: "89px" }}
          textAlign={{ base: "left", md: "left" }}
        >
          Our Expertise
        </Heading>
        <Text
          color="#151D26"
          mb={12}
          maxW="full"
          fontSize="18px"
          fontWeight={400}
          textAlign={{ base: "left", md: "left" }}
        >
          We specialize in delivering tailored solutions to address your
          business needs across these key areas:
        </Text>

        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          maxW="1216px"
          gap="62px"
        >
          {/* Currency */}
          <GridItem id="currency">
            <MotionFlex
              flexDir="column"
              color="#001A32"
              maxW="593px"
              bg="#fff"
              borderRadius="5px"
              boxShadow="md"
              p="24px"
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                src="/images/services/currencyimage.jpg"
                alt="Currency Service"
                w="100%"
                objectFit="contain"
                mb={4}
                flexShrink={1}
              />
              <Heading fontWeight="semibold" mb={2} fontSize="24px">
                Currency Service
              </Heading>
              <Text
                fontSize="18px"
                color="#517193"
                fontWeight={400}
                flexGrow={1}
              >
                Strategically position your digital products for success with
                actionable insights and market expertise.
              </Text>
              <Link to="/businesses/currency">
                <Flex
                  gap="10px"
                  align="center"
                  color="#001A32"
                  _hover={{ textDecor: "underline" }}
                  mt={2}
                >
                  <Text fontSize="12px">Learn More</Text>
                  <GoArrowUpRight />
                </Flex>
              </Link>
            </MotionFlex>
          </GridItem>

          {/* Mining */}
          <GridItem placeItems="flex-end" id="MineralsProduction">
            <MotionFlex
              flexDir="column"
              color="#001A32"
              maxW="593px"
              bg="#fff"
              borderRadius="5px"
              boxShadow="md"
              p="24px"
              initial={{ opacity: 0 }}
              whileInView={{ x: [60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                src="/images/services/miningimage.jpg"
                alt="Mining"
                w="100%"
                objectFit="contain"
                mb={4}
                flexShrink={1}
              />
              <Heading fontWeight="semibold" mb={2} fontSize="24px">
                Ethical Mining & Minerals Production
              </Heading>
              <Text
                fontSize="18px"
                fontWeight={400}
                color="#517193"
                flexGrow={1}
              >
                Overcome challenges and foster innovation with expert guidance
                from our engineering professionals.
              </Text>
              <Link to="/businesses/ethical-mining">
                <Flex
                  gap="10px"
                  align="center"
                  color="#001A32"
                  _hover={{ textDecor: "underline" }}
                  mt={2}
                >
                  <Text fontSize="12px">Learn More</Text>
                  <GoArrowUpRight />
                </Flex>
              </Link>
            </MotionFlex>
          </GridItem>

          {/* Travel */}
          <GridItem id="hospitality">
            <MotionFlex
              flexDir="column"
              color="#001A32"
              maxW="593px"
              bg="#fff"
              borderRadius="5px"
              boxShadow="md"
              p="24px"
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                src="/images/services/hospitalityimage.jpg"
                alt="Travel & Hospitality"
                w="100%"
                objectFit="contain"
                mb={4}
                flexShrink={1}
              />
              <Heading fontWeight="semibold" mb={2} fontSize="22px">
                Travel, Tourism & Hospitality Services
              </Heading>
              <Text
                fontSize="18px"
                fontWeight={400}
                color="#517193"
                flexGrow={1}
                noOfLines={5}
              >
                Drive productivity with fully autonomous, high-performing
                development teams for scalable solutions.
              </Text>
              <Link to="/businesses/travels">
                <Flex
                  gap="10px"
                  align="center"
                  _hover={{ textDecor: "underline" }}
                  mt={2}
                >
                  <Text fontSize="12px">Learn More</Text>
                  <GoArrowUpRight />
                </Flex>
              </Link>
            </MotionFlex>
          </GridItem>

          {/* FinTech */}
          <GridItem placeItems="flex-end" id="financial-technology">
            <MotionFlex
              flexDir="column"
              color="#001A32"
              maxW="593px"
              bg="#fff"
              borderRadius="5px"
              boxShadow="md"
              p="24px"
              initial={{ opacity: 0 }}
              whileInView={{ x: [60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                src="/images/services/Financeimage.jpg"
                alt="FinTech"
                w="100%"
                objectFit="contain"
                mb={4}
                flexShrink={1}
              />
              <Heading fontWeight="semibold" mb={2} fontSize="24px">
                Financial Technology
              </Heading>
              <Text
                fontSize="18px"
                fontWeight={400}
                color="#517193"
                flexGrow={1}
              >
                Protect your digital assets with industry-leading security
                solutions, including comprehensive vulnerability assessments.
              </Text>
              <Link to="/businesses/fintech">
                <Flex
                  gap="10px"
                  align="center"
                  _hover={{ textDecor: "underline" }}
                  mt={2}
                >
                  <Text fontSize="12px">Learn More</Text>
                  <GoArrowUpRight />
                </Flex>
              </Link>
            </MotionFlex>
          </GridItem>

          {/* Consultation Button */}
          <GridItem
            colSpan={{ base: 1, md: 2 }}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              bg="#003b73"
              color="#fff"
              px="30px"
              py="24px"
              borderRadius="md"
              onClick={() => navigate("/contact-us/#send-us-a-message")}
            >
              <Flex align="center" gap="10px">
                <Text fontSize="16px" fontWeight="semibold">
                  Get a consultation
                </Text>
                <Box mt="5px">
                  <Image
                    src="/images/services/rightarrow.png"
                    w="12px"
                    h="12px"
                  />
                </Box>
              </Flex>
            </Button>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Expertise;
