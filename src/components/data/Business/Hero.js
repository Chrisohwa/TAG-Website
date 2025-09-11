import React from "react";
import { Box, Container, Heading, Flex, Image, Text } from "@chakra-ui/react";
import { SmText, XText } from "../../common/CustomText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <Flex
      justifyContent="center"
      h={{ base: "50vh", md: "70vh", xl: "100vh" }}
      color="#fff"
      pos="relative"
      className="full_width"
      px="20px"
    >
      <Image
        w="100%"
        h="full"
        src="/images/services/servicehero.jpg"
        pos="absolute"
        right="0"
        zIndex={0}
      />
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="rgba(0, 0, 0, 55%)"
        zIndex={1}
      />

      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex h="full" direction="column" justify="Flex-end">
          <Box mb="9%" zIndex={3}>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Heading
                color="#ffffff"
                fontWeight="bold"
                fontSize={{ base: "4xl", xl: "6xl" }}
                mb="20px"
              >
                What we do
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Text color="#ffffff" fontWeight={700} fontSize="22px">
                Currency Services | Travel, Tourism & Hospitality Services |
                Mining & Minerals Production | Financial Technology
              </Text>
            </motion.div>
          </Box>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Hero;
