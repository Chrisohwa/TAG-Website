import { Box, Flex, Image, Container, Text, Heading } from "@chakra-ui/react";
import React from "react";

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
          src="/images/services/hospitalityimage.JPG"
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

        <Container maxW="1220px">
          <Flex h="full" direction="column" justify="Flex-end">
            <Box mb="6%" zIndex={3}>
              <Heading
                color="#ffffff"
                fontWeight="bold"
                fontSize={{ base: "3xl", xl: "4xl" }}
                mb="20px"
              >
                Travel, Tourism & Hospitality Services
              </Heading>
            </Box>
          </Flex>
        </Container>
      </Flex>

      <Container maxW="1220px">
        <Flex
          flexDir="column"
          p={{ base: "5px", md: "", xl: "60px" }}
          mt={{ base: "40px", md: "40px", xl: "40px" }}
          gap={{ base: "40px", md: "", xl: "60px" }}
        >
          <Box fontSize="20px">
            <Text
              textAlign={{ base: "justify", md: "center", xl: "center" }}
              mb={{ base: "20px", md: "", xl: "20px" }}
            >
              At Transalliance Group, we enable businesses navigate the
              complexities of global trade with seamless currency exchange,
              liquidity management, and cross-border trade solutions. Our
              currency services are designed to optimize cash flow, mitigate
              currency risks, and ensure compliance with international financial
              regulations. Whether foreign currency inflows, structured FX
              transactions, or offshore trade payments, we provide the expertise
              and infrastructure to facilitate smooth and secure transactions.
            </Text>
            <Text textAlign={{ base: "justify", md: "center", xl: "center" }}>
              For businesses seeking reliable financial solutions, our member
              company, Transalliance Capital Limited (TransCap), offers bespoke
              services to support international trade, investment, and treasury
              operations. With a focus on efficiency, compliance, and strategic
              financial management, Transalliance Capital is your trusted
              partner in navigating the global financial landscape.
            </Text>
          </Box>
          <Box>
            <Image src="/images/services/fazologo.png" />
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Hospitality;
