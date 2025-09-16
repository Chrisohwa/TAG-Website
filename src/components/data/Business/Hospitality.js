import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import Back from "../../common/Back";

const Hospitality = () => {
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
          src="/images/services/hospitalityimgopt.jpg"
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

        <Container maxW="1350px">
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
                  Travel, Tourism & Hospitality Services
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
                textAlign={{ base: "justify", md: "center", xl: "center" }}
                mb={{ base: "20px", md: "", xl: "30px" }}
              >
                We understand that travel is more than just getting from one
                place to another—it&apos;s about creating seamless, personalized
                experiences that cater to individual and corporate needs. From
                curated itineraries to premium concierge services, we ensure
                that every journey is smooth, stress-free, and tailored to
                perfection.
              </Text>
              <Text textAlign={{ base: "justify", md: "center", xl: "center" }}>
                For travelers and businesses seeking bespoke travel solutions,
                our member company, Fazo Travel & Hospitality Services Limited,
                delivers end-to-end services that go beyond bookings. Whether
                it&apos;s corporate travel management, luxury getaways, or customized
                hospitality services, Fazo is your trusted partner in crafting
                unforgettable experiences
              </Text>
            </Box>
            <Box pb="60px">
              <Image src="/images/services/fazologo.png" />
            </Box>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default Hospitality;
