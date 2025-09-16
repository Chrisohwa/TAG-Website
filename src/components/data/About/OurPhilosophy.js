import { Box, Container, Flex, Heading, Image, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

const OurPhilosophy = () => {
  return (
    <Box
      className="full_width"
      minH="60vh"
      bgGradient="to-b"
      gradientFrom="#5A85A0"
      gradientTo="#fafdfe"
      py={{ base: 10, md: 20 }}
      mt={{ base: "-45px", md: "0px", lg: "0px", xl: "0px" }}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        id="about-us"
      >
        <Flex
          direction={{ base: "column-reverse", md: "row" }}
          gap={20}
          align="flex-start"
          pt={{ base: "10px", xl: "0px" }}
        >
          {/* Left side images */}
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
            flexBasis="40%"
            mx="auto"
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [-50, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                src="/images/about/aboutimg2opt.jpg"
                // src="https://ik.imagekit.io/oilm06bg9/aboutimg2.png?updatedAt=1757755974109"
                alt="Happy meeting"
                borderRadius="md"
                objectFit="cover"
                w={{ base: "100%", md: "350px", xl: "525px" }}
                h="395px"
                loading="lazy"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-50, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Flex
                position={{ base: "relative", md: "absolute" }}
                top={{ base: "0px", md: "50%" }}
                left={{ base: "0px", md: "90px" }}
                transform={{ base: "", md: "translateY(-50%)" }}
                bg="#fff"
                w={{ base: "100%", md: "350px", xl: "470px" }}
                justify="flex-end"
                zIndex={0}
              >
                <Image
                  src="/images/about/aboutimg3opt.jpg"
                  // src="https://ik.imagekit.io/oilm06bg9/aboutimg3.png?updatedAt=1757755973718"
                  alt="Mission Vision Value"
                  objectFit="contain"
                  w={{ base: "100%", md: "100%" }}
                  h={{ base: "250px", md: "380px" }}
                  zIndex={1}
                  loading="lazy"
                />
              </Flex>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ y: [50, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Image
                // src="https://ik.imagekit.io/oilm06bg9/aboutimg1.png?updatedAt=1757755975076"
                src="/images/about/aboutimg1opt.jpg"
                alt="Team clapping"
                borderRadius="md"
                objectFit="cover"
                w={{ base: "100%", md: "350px", xl: "525px" }}
                h="395px"
                loading="lazy"
              />
            </motion.div>
          </Flex>

          {/* Right side text */}
          <VStack
            align="stretch"
            p={2}
            borderRadius="md"
            gap={{ base: "30px", md: "50px", xl: "80px" }}
            flexBasis="60%"
            h="100%"
          >
            {/* Philosophy */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", md: "48px" }}
                mb={4}
                fontWeight={700}
                color="#001A32"
              >
                Our Philosophy
              </Heading>
              <Text
                fontSize={{ base: "18px", md: "20px", xl: "24px" }}
                lineHeight="36px"
                fontWeight={500}
                color="#002C56"
                maxW="672px"
              >
                At Transalliance Group, we pride ourselves in our “family”
                culture and “People-First” approach. We strive to provide an
                unrivalled and evolving client experience, using it to deepen
                client relationships so that we become an ever more integral
                part of their lives. In turn, this delivers high levels of
                client retention, client satisfaction and increased use of our
                services which drives net new business flows from existing and
                new clients.
              </Text>
            </Box>

            {/* Vision */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", md: "36px" }}
                mb={2}
                fontWeight={700}
                color="#001A32"
              >
                Our Vision
              </Heading>
              <Text
                fontSize={{ base: "18px", md: "20px", xl: "24px" }}
                fontWeight={500}
                lineHeight="36px"
                color="#002C56"
              >
                To be the preferred partner in every sector that we serve.
              </Text>
            </Box>

            {/* Mission */}
            <Box>
              <Heading
                fontSize={{ base: "2xl", md: "36px" }}
                mb={2}
                fontWeight={700}
                color="#001A32"
              >
                Our Mission
              </Heading>
              <Text
                fontSize={{ base: "18px", md: "20px", xl: "24px" }}
                fontWeight={500}
                lineHeight="36px"
                color="#002C56"
              >
                To consistently deliver superior value to all our stakeholders
                across the globe.
              </Text>
            </Box>
          </VStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default OurPhilosophy;
