import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Back from "../../common/Back";

const EthicalMining = () => {
  return (
    <>
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
          src="/images/services/miningimageopt.jpg"
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
          bg="rgba(0, 0, 0, 0.4)"
          zIndex={1}
        />

        <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
          <Flex h="full" direction="column" justify="Flex-end">
            <Box mb="6%" zIndex={3}>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [60, 0], opacity: 1 }}
                transition={{ duration: 1.1 }}
              >
                <Heading
                  color="#ffffff"
                  fontWeight="bold"
                  fontSize={{ base: "3xl", xl: "4xl" }}
                  mb="20px"
                >
                  Ethical Mining & Minerals Production
                </Heading>
                <Back />
              </motion.div>
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Flex
        className="full_width"
        justify="center"
        bgGradient="to-t"
        gradientFrom="#fff 80%"
        gradientTo="#7b94ab"
      >
        <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
          <Flex
            flexDir="column"
            p={{ base: "5px", md: "", xl: "0px" }}
            mt={{ base: "40px", md: "40px", xl: "40px" }}
            gap={{ base: "40px", md: "", xl: "60px" }}
            w="100%"
          >
            <Box
              fontSize={{ base: "20px", md: "22px", xl: "33px" }}
              color="#001A32"
              fontWeight={500}
              lineHeight="120%"
            >
              <Text
                textAlign={{ base: "justify", md: "center", xl: "center" }}
                mb={{ base: "20px", md: "", xl: "30px" }}
              >
                Driving sustainable growth in Nigeria&apos;s mining sector
                requires a commitment to ethical practices, environmental
                conservation, and community empowerment. With a focus on
                responsible exploration and mechanised mineral production,
                Transalliance Group integrates innovation, security, and
                compliance to ensure long-term value creation in the industry.
              </Text>
              <Text
                textAlign={{ base: "justify", md: "center", xl: "center" }}
                mb={{ base: "20px", md: "", xl: "20px" }}
              >
                Our approach prioritizes strong stakeholder partnerships,
                safety, and strategic risk mitigation to enhance operational
                efficiency. Through structured investments, corporate social
                responsibility, and sustainable operations, Transalliance
                Minerals is set to become a leader in Nigeria&apos;s mineral
                resources sector, delivering consistent value to both local and
                international markets.
              </Text>
              <Text textAlign={{ base: "justify", md: "center", xl: "center" }}>
                For stakeholders seeking reliable and ethical mining solutions,
                our member company, Transalliance Minerals Limited
                (TransMinerals), specializes in tin and gold mining &
                production, adhering to global best practices while fostering
                local development.
              </Text>
            </Box>
            <Box pb="60px">
              <Image src="/images/services/transcaplogo.png" />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default EthicalMining;
