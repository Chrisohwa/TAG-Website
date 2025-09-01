import { Box, Text, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { SiFacebook } from "react-icons/si";
import { FiInstagram } from "react-icons/fi";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";

const Socials = () => {
  return (
    <Box w="340px" h="134px">
      <Text
        fontSize="14px"
        fontWeight={400}
        lineHeight="18px"
        mb={4}
        color="#fff"
      >
        We are eager to be in touch with you in the following channels:
      </Text>
      <Flex flexDir="column" gap={4}>
        {/* stack 1 */}
        <HStack gap="50px">
          <Flex align="center" justify="space-between" w="120px">
            <Box
              bg="#DBEAFE"
              borderRadius="full"
              p="12px"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <SiFacebook boxSize="25px" />
            </Box>

            <Link text to="https://facebook.com/transalliancegroup">
              <Text
                textDecoration="underline"
                fontSize="14px"
                lineHeight="18px"
                fontWeight={400}
                color="#fff"
              >
                Facebook
              </Text>
            </Link>
          </Flex>

          <Flex align="center" justify="space-between" w="120px">
            <Box
              bg="#DBEAFE"
              borderRadius="full"
              p="12px"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FiInstagram boxSize="25px" />
            </Box>

            <Link text to="https://instagram.com/transalliancegroup">
              <Text
                textDecoration="underline"
                fontSize="14px"
                lineHeight="18px"
                fontWeight={400}
                color="#fff"
              >
                Instagram
              </Text>
            </Link>
          </Flex>
        </HStack>

        {/* Stack2 */}
        <HStack gap="50px">
          <Flex align="center" justify="space-between" w="120px">
            <Box
              bg="#DBEAFE"
              borderRadius="full"
              p="12px"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaXTwitter boxSize="25px" />
            </Box>

            <Link text to="https://x.com/transalliancegroup">
              <Text
                textDecoration="underline"
                fontSize="14px"
                lineHeight="18px"
                fontWeight={400}
                color="#fff"
              >
                Twitter/X
              </Text>
            </Link>
          </Flex>

          <Flex align="center" justify="space-between" w="120px">
            <Box
              bg="#DBEAFE"
              borderRadius="full"
              p="12px"
              boxShadow="md"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <FaLinkedinIn boxSize="25px" />
            </Box>

            <Link text to="https://linkedin.com/transalliancegroup">
              <Text
                textDecoration="underline"
                fontSize="14px"
                lineHeight="18px"
                fontWeight={400}
                color="#fff"
              >
                Linkedin
              </Text>
            </Link>
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Socials;
