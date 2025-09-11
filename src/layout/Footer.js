import React from "react";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  HStack,
  Container,
} from "@chakra-ui/react";
import { footerList } from "../components/common/constants";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";
import { useLocation } from "react-router-dom";

export default function Footer() {
  const location = useLocation();

  // Define route-based styles
  const routeStyles = {
    "/": { bg: "#011b34", color: "#ffffff" },
    "/about": { bg: "#ffffff", color: "#000000" },
    "/contact": { bg: "#031D33", color: "#ffffff" },
    "/career": { bg: "#013669", color: "#ffffff" },
    default: { bg: "#011b34", color: "#ffffff" },
  };

  const routeStyles2 = {
    "/": { bg2: "#001e39", color2: "#ffffff" },
    "/about": { bg2: "#ffffff", color2: "#000000" },
    "/contact": { bg2: "#001e39", color2: "#ffffff" },
    "/career": { bg2: "#001e39", color2: "#ffffff" },
    default: { bg2: "#001e39", color2: "#ffffff" },
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
            flexDir={{ base: "row", md: "row" }}
            gap="50px"
            pr={{ base: "0px", md: "0px", xl: "27%" }}
          >
            {/* Left side */}
            <Box>
              <Flex align="center" mb={2}>
                <Image
                  src="/images/statics/logo.png"
                  alt="Transalliance Logo"
                  height="40px"
                />
              </Flex>

              <Text
                maxW={{ base: "150px", md: "350px", xl: "600px" }}
                mb={{ base: "16px", md: "15px", xl: "16px" }}
                fontSize="24px"
                fontWeight={500}
              >
                Engineering Business Innovations for the Future.
              </Text>
            </Box>

            {/* Right side */}
            <Box>
              <Box as="ul">
                {footerList.map((item) => (
                  <Box
                    as="li"
                    listStyle="disc"
                    key={item.id}
                    fontSize={{ base: "20px", md: "20px", xl: "24px" }}
                    fontWeight={500}
                  >
                    <Link
                      href={item.path}
                      _hover={{ textDecoration: "underline" }}
                      color={color}
                      mb={3}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Flex>

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
            <HStack spacing={4} pt={{ base: "5px", md: "10px" }}>
              <Link href="#">
                <FaTwitter color={color} size={25} />
              </Link>
              <Link href="#">
                <FaLinkedinIn color={color} size={25} />
              </Link>
              <Link href="#">
                <FaFacebookF color={color} size={25} />
              </Link>
            </HStack>

            {/* <HStack spacing={4} pt={{ base: "20px", md: "10px" }}>
          <Text>Política de Privacidad</Text>
          <Text>Términos y Condiciones</Text>
          <Text>Código de Conducta</Text>
        </HStack> */}
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
