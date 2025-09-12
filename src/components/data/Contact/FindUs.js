import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  VStack,
  Image,
} from "@chakra-ui/react";
import { FaMapMarkerAlt, FaBus, FaParking, FaClock } from "react-icons/fa";
import { CiCircleInfo } from "react-icons/ci";
import MapComponent from "../../common/MapComponent";

const infoData = [
  {
    icon: FaMapMarkerAlt,
    title: "Address",
    description: (
      <>
        200c Muri Okunola <br />
        Victoria Island, LG 10001, Lagos Nigeria
      </>
    ),
  },
  {
    icon: FaBus,
    title: "Public Transport",
    description: "Eko Hotel Roundabout",
  },
  {
    icon: FaParking,
    title: "Parking",
    description: "Public parking garage nearby",
  },
  {
    icon: FaClock,
    title: "Visiting Hours",
    description: (
      <>
        Monday - Friday: 9:00 AM - 5:00 PM <br />
        Appointments recommended
      </>
    ),
  },
];

const InfoDataList = ({ data }) => (
  <Box>
    {data.map((item, index) => (
      <Flex key={index} align="flex-start" gap={3} mb={5}>
        <Box
          as={item.icon}
          color="#2563EB"
          mt={1}
          fontSize="16px"
          fontWeight={600}
        />
        <Box>
          <Text fontSize="16px" fontWeight="600" color="#111827">
            {item.title}
          </Text>
          <Text fontSize="16px" fontWeight={400} color="#4B5563">
            {item.description}
          </Text>
        </Box>
      </Flex>
    ))}
  </Box>
);

const FindUs = () => {
  return (
    <Box
      className="full_width"
      minH={{ base: "60vh", md: "60vh", xl: "100vh" }}
      pt={{ base: 10, md: 20, xl: "169px" }}
      mb="-100px"
      bgGradient="to-b"
      gradientTo="#002548 100%"
      gradientFrom="#fff 20%"
      id="find-us"
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        pb={{ base: "100px", md: "100px", xl: "200px" }}
      >
        <VStack gap="64px">
          <Flex flexDir="column" justify="center" align="center" gap={4}>
            <Heading
              fontWeight={700}
              fontSize={{ base: "28px", md: "32px", xl: "36px" }}
              lineHeight="40px"
              color="#111827"
            >
              Find Us on the Map
            </Heading>
            <Text
              textAlign={{ base: "center", md: "center", xl: "center" }}
              fontWeight={400}
              fontSize="20px"
              lineHeight="28px"
              maxW={{ base: "", md: "", xl: "754px" }}
              color="#4B5563"
            >
              Our headquarters location in the heart of New York City
            </Text>
          </Flex>

          <Flex
            maxW="1232px"
            mx="auto"
            bg="#fff"
            borderRadius="12px"
            boxShadow="md"
            overflow="hidden"
            direction={{ base: "column", md: "row" }}
          >
            {/* Left Section */}
            <Box flex="1" p={6}>
              <Heading fontSize="xl" mb={6}>
                Headquarters
              </Heading>

              {/* Info List */}
              <InfoDataList data={infoData} />

              {/* Notice */}
              <Flex mt={8} p={3} bg="#EFF6FF" borderRadius="md">
                <Box mt={1}>
                  <CiCircleInfo color="#1E40AF" />
                </Box>
                <Text
                  fontSize="14px"
                  color="#1E40AF"
                  fontWeight={400}
                  maxW="431px"
                >
                  Please call ahead to schedule a visit. Security check-in
                  required for all visitors.
                </Text>
              </Flex>
            </Box>

            {/* Right Section - Map Image */}
            <Box flex="1" maxH="500px" w={{base:"", md:"350px", xl:"450px"}} >
              {/* <Image
                src="/images/contact/map.jpg"
                alt="Map"
                objectFit="cover"
                loading="lazy"
                w="100%"
                h={{ base: "100%", md: "100%" }}
                borderRadius={{ base: "none", md: "0 16px 16px 0" }}
              /> */}
              {/* <iframe
                src="https://embed.waze.com/iframe?zoom=16&lat=6.432173&lon=3.434005&ct=livemap"
                width="100%"
                height="100%"
                allowfullscreen
                title="Our Location"
              ></iframe> */}

              <MapComponent/>
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};

export default FindUs;
