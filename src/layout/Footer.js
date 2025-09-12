import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  HStack,
  Container,
  Heading,
  Center,
} from "@chakra-ui/react";
import { footerList } from "../components/common/constants";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { IoChevronForwardOutline } from "react-icons/io5";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { PiPhoneCallBold } from "react-icons/pi";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // Define route-based styles
  const routeStyles = {
    "/": { bg: "#011b34", color: "#2EC5FF" },
    "/about": { bg: "#ffffff", color: "#000000" },
    "/contact": { bg: "#031D33", color: "#2EC5FF" },
    "/career": { bg: "#013669", color: "#2EC5FF" },
    default: { bg: "#011b34", color: "#2EC5FF" },
  };

  const routeStyles2 = {
    "/": { bg2: "#001e39", color2: "#2EC5FF" },
    "/about": { bg2: "#ffffff", color2: "#000000" },
    "/contact": { bg2: "#001e39", color2: "#2EC5FF" },
    "/career": { bg2: "#001e39", color2: "#2EC5FF" },
    default: { bg2: "#001e39", color2: "#2EC5FF" },
  };

  const { bg, color } = routeStyles[location.pathname] || routeStyles.default;
  const { bg2, color2 } =
    routeStyles2[location.pathname] || routeStyles2.default;

  return (
    <>
      <Box
        as="footer"
        bg={bg}
        color={color}
        px={{ base: 6, md: 16 }}
        py={12}
        className="full_width"
        mt="-2px"
        zIndex={99}
        pos="relative"
      >
        <Container maxW="1350px" px={{ base: "0px", md: "0px", xl: "0px" }}>
          <Flex
            justify={{
              base: "flex-start",
              md: "flex-start",
              xl: "space-between",
            }}
            align="flex-start"
            flexDir={{ base: "column", md: "row" }}
            // gap="50px"
            pr={{ base: "0px", md: "0px", xl: "0px" }}
          >
            {/* Left side */}
            <Box w="full">
              <Flex align="center" mb={2}>
                <Image
                  src="/images/statics/logo.png"
                  alt="Transalliance Logo"
                  height="40px"
                />
              </Flex>

              <Text
                maxW={{ base: "full", md: "350px", xl: "800px" }}
                mb={{ base: "16px", md: "15px", xl: "16px" }}
                fontSize={{ base: "14px", md: "20px", xl: "24px" }}
                fontWeight={500}
                color="#fff"
              >
                Engineering Business Innovations for the Future.
              </Text>
            </Box>

            {/* Right side */}

            <Flex
              w={{ base: "full", md: "", xl: "full" }}
              justify={{ base: "center", md: "", xl: "space-evenly" }}
              gap={{ base: "30px", md: "", xl: "" }}
            >
              {/* Quick links */}
              <Box textAlign="left">
                <Heading
                  fontWeight={400}
                  fontSize={{ base: "14px", md: "14px", xl: "18px" }}
                  color="#FFFFFF"
                  textDecoration="underline"
                  mb={3}
                >
                  Quick Links
                </Heading>
                <Box>
                  {footerList.map((item) => (
                    <Flex
                      key={item.id}
                      fontSize={{ base: "14px", md: "14px", xl: "16px" }}
                      fontWeight={400}
                      align="center"
                      justify="Flex-start"
                      gap="10px"
                      mb={3}
                    >
                      <Box mt={1}>
                        <IoChevronForwardOutline color="#2BC1FF" />
                      </Box>
                      <Link
                        href={item.path}
                        _hover={{ textDecoration: "underline" }}
                        color="#fff"
                        opacity="65%"
                      >
                        <Text fontWeight={400} textWrap="nowrap">
                          {item.name}
                        </Text>
                      </Link>
                    </Flex>
                  ))}
                </Box>
              </Box>

              {/* Contact us */}
              <Box>
                <Box>
                  <Heading
                    fontWeight={400}
                    fontSize={{ base: "14px", md: "14px", xl: "18px" }}
                    color="#FFFFFF"
                    textDecoration="underline"
                    mb={3}
                  >
                    Contact Us
                  </Heading>
                </Box>

                <Flex flexDir="column">
                  <Flex align="center" justify="flex-start" gap="10px" mb={3}>
                    <Box>
                      <PiPhoneCallBold color="#2FC6FF" />
                    </Box>
                    <Box
                      fontWeight={400}
                      fontSize={{ base: "12px", md: "12px", xl: "16px" }}
                      color="#fff"
                      opacity="65%"
                    >
                      <a href="tel:+2348055058367">+234 805 505 8367</a>
                    </Box>
                  </Flex>

                  <Flex align="center" justify="flex-start" gap="10px" mb={3}>
                    <Box mt={1}>
                      <MdEmail color="#2FC6FF" />
                    </Box>
                    <Box
                      fontWeight={400}
                      fontSize={{ base: "12px", md: "12px", xl: "16px" }}
                      color="#fff"
                      opacity="65%"
                    >
                      <a href="mailto:info@transalliancegroup.com">
                        info@transalliancegroup.com
                      </a>
                    </Box>
                  </Flex>

                  <Flex
                    align="flex-start"
                    justify="flex-start"
                    gap="10px"
                    mb={3}
                  >
                    <Box mt={1}>
                      <FaMapLocationDot color="#2FC6FF" />
                    </Box>
                    <Box
                      fontWeight={400}
                      fontSize={{ base: "12px", md: "12px", xl: "16px" }}
                    >
                      <Text maxW="257px" color="#fff" opacity="65%">
                        200c Muri Okunola, Victoria Island, Lagos, Nigeria.
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </Box>
            </Flex>
          </Flex>

          {/* Dividing line */}
          <Box w="100%" mt={4} border="1px solid rgba(255, 255, 255, 20%)" />

          <Flex
            align={{ base: "center", md: "center", xl: "center" }}
            justify={{
              base: "center",
              md: "space-between",
              xl: "space-between",
            }}
            flexDir={{ base: "column", md: "row", xl: "row" }}
            mt={{ base: "20px", md: "0px", xl: "0px" }}
          >
            {/* Social icons */}
            <HStack spacing="20px" pt={{ base: "5px", md: "10px" }} mt={4}>
              <Link href="#">
                <Center borderRadius="full" border="1px solid #2EC5FF" p="10px">
                  <FaLinkedinIn color={color} size={15} />
                </Center>
              </Link>

              <Link href="#">
                <Center borderRadius="full" border="1px solid #2EC5FF" p="10px">
                  <FaFacebookF color={color} size={15} />
                </Center>
              </Link>

              <Link href="#">
                <Center borderRadius="full" border="1px solid #2EC5FF" p="10px">
                  <FaTwitter color={color} size={15} />
                </Center>
              </Link>
            </HStack>

            <HStack
              spacing={4}
              pt={{ base: "20px", md: "10px" }}
              pr={{ base: "", md: "", xl: "4%" }}
            >
              <Link href="">
                <Text color="#fff" opacity="90%">
                  Legal..
                </Text>
              </Link>
              <Link href="">
                <Text color="#fff" opacity="90%">
                  Policies...
                </Text>
              </Link>
              <Link href="">
                <Text color="#fff" opacity="90%">
                  FAQs...
                </Text>
              </Link>
            </HStack>
          </Flex>
        </Container>
      </Box>
      <Box
        h="147px"
        mt="-5px"
        bg={bg2}
        color={color2}
        pos="relative"
        zIndex={99}
      ></Box>
    </>
  );
}
