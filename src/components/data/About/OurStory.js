import {
  Box,
  Container,
  Text,
  Flex,
  Heading,
  Grid,
  VStack,
} from "@chakra-ui/react";
import React from "react";

const OurStory = () => {
  const timelineData = [
    {
      year: "2017",
      side: "right",
      title: "Laying the Foundation",
      desc: `The journey began with Kamsi Okafor’s entrepreneurial foray into the currency 
                    services industry under the business name FAZO Group. With a vision to expand 
                    beyond currency services, he diversified into travels, tourism & hospitality services, 
                    setting the stage for a dominant presence in Africa’s travel & hospitality industry.`,
    },
    {
      year: "2018",
      side: "left",
      title: "The Birth of Transalliance",
      desc: `In 2018, Fazo Group established a member company, Fazo Travel & Hospitality Services Limited, 
                    acquiring both NATA and IATA licenses, solidifying its foothold in the travel & hospitality
                    service sector. `,
    },
    {
      year: "2020",
      side: "right",
      title: "Rebranding",
      desc: `A strategic rebrand transformed Fazo Group into Transalliance Group,
                 marking its formal entry into the financial services industry. 
                 This evolution led to the establishment of Transalliance Capital in December 2020,
                  just as global economies began recovering from the COVID-19 Pandemic`,
    },
    {
      year: "2020",
      side: "left",
      title: "Strategic Expansion",
      desc: `Transalliance Group broadened its portfolio with the creation of three specialized subsidiaries:
                Transalliance Minerals – Focused on ethical mining & minerals production.
                Mondu Inc. - A Cross-boarder payment technology platform.
                AlliancePay - A secure payment facilitation platform.`,
    },
    {
      year: "2020",
      side: "right",
      title: "Rebranding",
      desc: `In 2022, TransMinerals secured an exploration license from the Federal Government of Nigeria, 
                further strengthening its industry position with a 25-year mining lease in 2023.
                The Group entered the financial technology space by launching AlliancePay, a payment facilitation 
                company for businesses, culminating in the acquisition of a PSSP License from the Central Bank of Nigeria.`,
    },
  ];
  return (
    <Box
      className="full_width"
      bgImage='url("/images/about/storybg.png")'
      bgRepeat="no-repeat"
      bgSize="contain"
      bgPosition="right"
      py={16}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        color="#151D26"
      >
        <Heading
          fontSize={{ base: "2xl", md: "3xl", xl: "48px" }}
          fontWeight={600}
          py={{ base: "10px", md: "40px" }}
        >
          Our Story
        </Heading>
        <Text
          fontSize="20px"
          fontWeight={500}
          color="#002C56"
          lineHeight="27px"
        >
          Founded on the principles of innovation and collaboration, ABC Company
          was created to bridge the gap between complex engineering challenges
          and simplified solutions. Over the years, we've grown into a global
          team of experts passionate about helping businesses scale, innovate,
          and thrive in an ever-changing digital landscape.
        </Text>
      </Container>

      <Container
        maxW="1350px"
        py={{ base: "", md: "", xl: "50px" }}
        px={{ base: "10px", md: "15px", xl: "0px" }}
        display={{ base: "none", md: "block", xl: "block" }}
        mb={{base:"", md:"", xl:"200px"}}
      >
        <Flex position="relative" w="full" h="60%" justify="center">
          {/* Vertical Orange Line */}
          <Box position="absolute" top="0" bottom="0" w="3px" bg="#FFBD59" />

          {/* Timeline Items */}
          <Flex direction="column" gap={5} w="full">
            {timelineData.map((item, index) => (
              <Flex
                key={index}
                justify={item.side === "left" ? "flex-start" : "flex-end"}
                w="full"
                position="relative"
              >
                <Flex
                  align="center"
                  flexDir={item.side === "left" ? "row-reverse" : "row"}
                  gap={6}
                  w="50%"
                  position="relative"
                  mr={item.side === "left" ? "auto" : "0"}
                  ml={item.side === "right" ? "auto" : "0"}
                  pr={item.side === "left" ? "1px" : "0"}
                  pl={item.side === "right" ? "1px" : "0"}
                >
                  {/* Connector with Year Box */}
                  <Flex
                    align="center"
                    position="relative"
                    w="100px"
                    h="10px"
                    justify="center"
                  >
                    {/* Green Line */}
                    <Box h="3px" w="100px" bg="green.700" zIndex={1} />

                    {/* Year Box */}
                    <Box
                      position="absolute"
                      bg="white"
                      px={4}
                      py={2}
                      fontSize="sm"
                      fontWeight="semibold"
                      border="1px solid"
                      borderColor="gray.200"
                      boxShadow="md"
                      zIndex={2}
                      color="green.700"
                    >
                      <Text>{item.year}</Text>
                    </Box>
                  </Flex>

                  {/* Content */}
                  <Box maxW="450px">
                    <Heading
                      fontSize="28px"
                      fontWeight={500}
                      mb={2}
                      color="#001A32"
                      textAlign={item.side === "left" ? "right" : "left"}
                    >
                      {item.title}
                    </Heading>
                    <Text
                      fontSize="18px"
                      maxW="500px"
                      fontWeight={400}
                      color="#517193"
                      textAlign={item.side === "left" ? "right" : "left"}
                    >
                      {item.desc}
                    </Text>
                  </Box>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
      <Container
        display={{ base: "block", md: "none", xl: "none" }}
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
      >
        <Flex position="relative" w="full" minH="100%" justify="center">
          {/* Timeline Items */}
          <Flex direction="column" gap={0} w="full">
            {timelineData.map((item, index) => (
              <Flex
                key={index}
                justify="flex-start"
                w="full"
                position="relative"
                direction="column"
              >
                <Box
                  w="fit-content"
                  bg="white"
                  px={4}
                  py={2}
                  fontSize="sm"
                  fontWeight="semibold"
                  border="1px solid"
                  borderColor="gray.200"
                  boxShadow="md"
                  color="green.700"
                >
                  <Text>{item.year}</Text>
                </Box>
                <Box
                  h="20px"
                  w="4px"
                  mb={2}
                  ml="7px"
                  bg="green.700"
                  zIndex={1}
                />
                <Box maxW="450px" mb="20px">
                  <Heading fontSize="lg" color="#001A32" textAlign="left">
                    {item.title}
                  </Heading>
                  <Text
                    fontSize="md"
                    maxW="500px"
                    color="#517193"
                    textAlign="justify"
                  >
                    {item.desc}
                  </Text>
                </Box>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurStory;
