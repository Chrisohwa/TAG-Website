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
import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom";
import { BiChevronsRight } from "react-icons/bi";

const Expertise = () => {
  return (
    <Box
      className="full_width"
      bgGradient="to-b"
      gradientFrom="#fff 60%"
      gradientTo="#00376b"
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
          lineHeight="89px"
          textAlign={{ base: "center", md: "left" }}
        >
          Our Expertise
        </Heading>
        <Text
          color="#151D26"
          mb={12}
          maxW="full"
          fontSize="18px"
          fontWeight={400}
          textAlign={{ base: "center", md: "left" }}
        >
          We specialize in delivering tailored solutions to address your
          business needs across these key areas:
        </Text>

        {/* Grid */}
        <Grid templateColumns={{ base: "1fr", md: "1fr auto 1fr" }} gap={8}>
          {/* Left Column (Card 1) */}
          <GridItem
            p={6}
            bg="white"
            borderRadius="10px"
            bgGradient="to-b"
            gradientFrom="#fff 60%"
            gradientTo="#00376b"
          >
            <Flex
              flexDir="column"
              gapY={{ base: "", md: "", xl: "50px" }}
              id="currency"
            >
              {/* Currency */}

              <Box color="#001A32">
                <Image
                  src="/images/services/transcaplogo.png"
                  position={{ base: "block", md: "absolute" }}
                  top="37%"
                  left="28%"
                />
                <Image
                  src="/images/services/transcap.png"
                  alt="Currency Service"
                  w={{ base: "100%", md: "80%" }}
                />
                <Heading fontWeight="semibold" mb={2} fontSize="24px">
                  Currency Service
                </Heading>
                <Text fontSize="18px" color="#517193" fontWeight={400}>
                  Strategically position your digital products for success with
                  actionable insights and market expertise.
                </Text>
                <Link to="/businesses/currency">
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
              </Box>

              {/* Mining */}
              <Box color="#fff" id="MineralsProduction">
                <Image
                  src="/images/services/mining.png"
                  alt="Mining"
                  mb={4}
                  w={{ base: "100%", md: "80%" }}
                />
                <Heading fontWeight="semibold" mb={2} fontSize="24px">
                  Ethical Mining & Minerals Production
                </Heading>
                <Text fontSize="18px" fontWeight={400}>
                  Overcome challenges and foster innovation with expert guidance
                  from our engineering professionals.
                </Text>
                <Link to="/businesses/ethical-mining">
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
              </Box>
            </Flex>
          </GridItem>

          {/* Center Button */}
          <GridItem display="flex" alignItems="center" justifyContent="center">
            <Button
              bg="#003b73"
              color="#fff"
              px="30px"
              py="24px"
              borderRadius="md"
            >
              <Flex align="center" gap="10px">
                <Text fontSize="16px" fontWeight="semibold">
                  Get a consultation
                </Text>{" "}
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

          {/* Right Column (Card 2) */}
          <GridItem
            p={6}
            bg="white"
            borderRadius="lg"
            bgGradient="to-b"
            gradientFrom="#fff 60%"
            gradientTo="#00376b"
          >
            <Flex flexDir="column" id="hospitality">
              {/* Travel */}
              <Box color="#001A32">
                <Image
                  src="/images/services/fazologo.png"
                  position={{ base: "block", md: "absolute" }}
                  top="15%"
                  right="35%"
                />
                <Image
                  src="/images/services/fazo.png"
                  alt="Travel & Hospitality"
                  w={{ base: "100%", md: "80%" }}
                />
                <Heading fontWeight="semibold" mb={2} fontSize="22px">
                  Travel, Tourism & Hospitality Services
                </Heading>
                <Text fontSize="18px" fontWeight={400} color="#517193">
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
              </Box>

              {/* FinTech */}
              <Box color="#fff" id="financial-technology">
                <Image
                  src="/images/services/fintech.png"
                  alt="FinTech"
                  w={{ base: "100%", md: "80%" }}
                />
                <Text fontWeight="semibold" fontSize="24px" mb={2}>
                  Financial Technology
                </Text>
                <Text fontSize="18px" fontWeight={400}>
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
              </Box>
            </Flex>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Expertise;
