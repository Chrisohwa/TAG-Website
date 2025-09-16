import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Back from "../../common/Back";

const Fintech = () => {
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
          src="/images/services/financeimageopt.jpg"
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
          bg="rgba(0, 0, 0, 65%)"
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
                  zIndex={99}
                >
                  Financial Technology
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
          >
            <Box
              fontSize={{ base: "20px", md: "22px", xl: "33px" }}
              color="#001A32"
              fontWeight={500}
              lineHeight="120%"
            >
              <Text
                textAlign={{ base: "justify", md: "center", xl: "left" }}
                mb={{ base: "20px", md: "", xl: "30px" }}
              >
                Engineering business growth in today&apos;s digital economy
                requires a commitment to seamless transactions, secure payment
                solutions, and cross-border payment efficiency. With a focus on
                innovation and cutting-edge financial technology, Transalliance
                Group empowers businesses by integrating secure, efficient, and
                scalable payment solutions into their operations. Our approach
                prioritizes advanced financial technology infrastructure,
                compliance with global standards, and strategic partnerships to
                enhance transaction efficiency.
              </Text>
              <Text
                textAlign={{ base: "justify", md: "center", xl: "left" }}
                mb={{ base: "20px", md: "", xl: "30px" }}
              >
                For businesses seeking reliable and innovative financial
                technology solutions, our member companies highlighted below,
                offer bespoke services:
              </Text>
              <Box
                as="ul"
                textAlign={{ base: "justify", md: "center", xl: "left" }}
              >
                <Text as="li">
                  <Text as="span" fontWeight={700}>
                    AlliancePay -
                  </Text>{" "}
                  A payment-facilitating partner for businesses that results in
                  timely and efficient transaction processing & settlement.
                </Text>{" "}
                <Text as="li">
                  <Text as="span" fontWeight={700}>
                    Mondu -
                  </Text>{" "}
                  A cross-border payment partner for businesses in emerging
                  markets that provides access to multi-currency end-to end
                  cross-border transactions.
                </Text>
              </Box>
            </Box>
            <Box mb="60px">
              <Image src="/images/services/transcaplogo.png" />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Fintech;
