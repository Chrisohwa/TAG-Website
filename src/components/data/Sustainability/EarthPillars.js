import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  Image,
  Flex,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const EarthPillars = () => {
  const navigate = useNavigate();
  return (
    <Box
      className="full_width"
      bgGradient="to-tl"
      gradientFrom="#fff 80%"
      gradientTo="#00376b"
      py={{ base: 5, md: 40 }}
      minH={{ base: "60vh", md: "70vh", xl: "100vh" }}
      zIndex={1}
      id="pillars"
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Heading
          color="#000000"
          fontWeight={400}
          fontSize={{ base: "32px", md: "50px", xl: "74px" }}
          mb="32px"
        >
          Our E.A.R.T.H. Pillars
        </Heading>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={5}
          align="flex-start"
          pt={{ base: "10px", xl: "0px" }}
        >
          {/* left side text */}

          <Flex
            align="stretch"
            p={2}
            borderRadius="md"
            gap="80px"
            flexBasis="50%"
            h="100%"
          >
            <Box as="ul" listStyle="disc">
              <Box
                as="li"
                fontWeight={400}
                fontSize="21.5px"
                lineHeight="25.8px"
                maxW="615px"
                ml={5}
                mb={4}
              >
                <Heading as="span" fontWeight={600}>
                  Environmental Stewardship:
                  <Text fontWeight={400} display="inline" ml={2}>
                    Commitment to preserving the land, site reclamation, water
                    recycling, annual biodiversity audits.
                  </Text>
                </Heading>
              </Box>

              <Box
                as="li"
                fontWeight={400}
                fontSize="21.5px"
                lineHeight="25.8px"
                maxW="615px"
                ml={5}
                mb={4}
              >
                <Heading as="span" fontWeight={600}>
                  Accountable Governance:
                  <Text fontWeight={400} display="inline" ml={2}>
                    Transparency and traceability in responsible mining through
                    public reports, JORC-aligned audits, COA releases.
                  </Text>
                </Heading>
              </Box>

              <Box
                as="li"
                fontWeight={400}
                fontSize="21.5px"
                lineHeight="25.8px"
                maxW="615px"
                ml={5}
                mb={4}
              >
                <Heading as="span" fontWeight={600}>
                  Resilient Communities:
                  <Text fontWeight={400} display="inline" ml={2}>
                    Empowering communities through local hiring, mobile clinics,
                    education support, and grievance desks.
                  </Text>
                </Heading>
              </Box>

              <Box
                as="li"
                fontWeight={400}
                fontSize="21.5px"
                lineHeight="25.8px"
                maxW="615px"
                ml={5}
                mb={4}
              >
                <Heading as="span" fontWeight={600}>
                  Technology for Good:
                  <Text fontWeight={400} display="inline" ml={2}>
                    Utilizing low-impact machinery, ecological mapping, and
                    early hazard detection systems to reduce harm and boost
                    efficiency.
                  </Text>
                </Heading>
              </Box>

              <Box
                as="li"
                fontWeight={400}
                fontSize="21.5px"
                lineHeight="25.8px"
                maxW="615px"
                ml={5}
                mb={4}
              >
                <Heading as="span" fontWeight={600}>
                  Heritage Protection:
                  <Text fontWeight={400} display="inline" ml={2}>
                    Preserving cultural and ecological heritage through
                    pre-mining mapping, cultural education programs, digital VR
                    tours, and art installations.
                  </Text>
                </Heading>
              </Box>

              <Button
                bg="#003366"
                borderRadius="12px"
                p="15px"
                mt="10px"
                w="287px"
                h="76px"
                fontSize="20px"
                onClick={() => navigate("/about-us")}
              >
                Learn More About Us
              </Button>
            </Box>
          </Flex>

          {/* Right side images */}

          <Flex
            flexDir="column"
            gapY="40px"
            justify={{
              base: "flex-start",
              md: "flex-start",
              lg: "center",
              xl: "flex-start",
            }}
            align="flex-start"
            position="relative"
            flexBasis="50%"
            mx="auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                // src="https://ik.imagekit.io/oilm06bg9/greenland.jpg?updatedAt=1757757917811"
                src="/images/sustainability/greenlandopt.jpg"
                alt="greenland"
                borderRadius="22px"
                objectFit="cover"
                w={{ base: "370px", md: "full", lg: "528px", xl: "628px" }}
                h="181px"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Flex
                justify={{ base: "center", md: "flex-end", xl: "flex-end" }}
                w={{ base: "370px", md: "full", xl: "628px" }}
              >
                <Image
                  // src="https://ik.imagekit.io/oilm06bg9/map.jpg?updatedAt=1757757922211"
                  src="/images/sustainability/mapopt.jpg"
                  alt="map"
                  borderRadius="22px"
                  objectFit="cover"
                  w={{ base: "370px", md: "full", lg: "210px", xl: "567px" }}
                  h="352px"
                  loading="lazy"
                />
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Flex
                position={{ base: "relative", md: "absolute" }}
                bottom={{ base: "0px", md: "-340px", xl: "-90px" }}
                left={{ base: "0px", md: "0px", xl: "0px" }}
                bg="#fff"
                w={{ base: "370px", md: "full", lg: "210px", xl: "290px" }}
                h={{ base: "", md: "", lg: "", xl: "289px" }}
                justify="flex-end"
                zIndex={0}
                borderTopRightRadius="22px"
              >
                <Image
                  // src="https://ik.imagekit.io/oilm06bg9/stats.png?updatedAt=1757757915516"
                  src="/images/sustainability/stats.png"
                  alt="stats"
                  objectFit="cover"
                  w={{ base: "370px", md: "95%", xl: "290px" }}
                  h={{ base: "250px", md: "280px" }}
                  borderRadius="22px"
                  m={3}
                  zIndex={1}
                  loading="lazy"
                />
              </Flex>
            </motion.div>

            <Flex
              display={{ base: "none", md: "none", xl: "flex" }}
              position={{ base: "relative", md: "absolute" }}
              bottom={{ base: "0px", md: "-130px" }}
              right={{ base: "0px", md: "-198px" }}
              bg="#fff"
              w={{ base: "100%", md: "200px", lg: "210px", xl: "425px" }}
              h={{ base: "", md: "", lg: "", xl: "200px" }}
              justify="flex-end"
              zIndex={0}
              borderRadius="22px"
            >
              {/* <Image
                src="/images/about/philosophy3.jpg"
                alt="Mission Vision Value"
                objectFit="contain"
                w={{ base: "100%", md: "100%" }}
                h={{ base: "250px", md: "380px" }}
                zIndex={1}
              /> */}
            </Flex>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default EarthPillars;
