import { Box, Flex, Button, Heading, Text, VStack, Container } from "@chakra-ui/react";

const Opportunity = () => {
  return (
    <Flex
      position="relative"
      className="full_width"
      h={{ base: "60vh", md: "100vh" }}
      bgImage="url('/images/landing/opportunity.png')"
      bgSize={{ base: "cover", md: "cover" }}
      bgPos={{ base: "top center", md: "center" }}
      bgRepeat="no-repeat"
      alignItems="center"
      _before={{
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        w: "100%",
        h: "100%",
        bg: "rgba(0, 26, 50, 0.58)",
      }}
    >
      <Container>
        <Flex
          w="full"
          justify={{ base: "center", md: "center", xl: "flex-end" }}
        >
          <Flex
            flexDir="column"
            align={{ base: "center", md: "center", xl: "flex-start" }}
            justifyContent={{ base: "center", md: "", xl: "flex-end" }}
            gapY="25px"
            color="white"
            maxW="700px"
            px={{ base: 6, md: 50 }}
            position="relative"
            zIndex={1}
          >
            <Heading
              fontWeight={700}
              textTransform="uppercase"
              fontSize="20px"
              color="#FFB800"
              lineHeight="54px"
            >
              What We Do
            </Heading>

            <Heading
              as="h1"
              fontSize={{ base: "2xl", md: "48px" }}
              fontWeight={700}
            >
              Your Future Starts Here
            </Heading>

            <Text
              fontSize={{ base: "16px", md: "24px" }}
              color="#fff"
              textAlign={{ base: "center", md: "center", xl: "left" }}
              fontWeight={500}
              
            >
              Be part of a dynamic group shaping the future of businesses in
              emerging economies. Whether you&apos;re an innovator, a
              strategist, or a changemaker, Transalliance offers you
              opportunities to grow and make an impact.
            </Text>

            <Button
              bg="#003366"
              color="#fff"
              p="16px"
              fontSize="20px"
              fontWeight={600}
              borderRadius="12px"
              w="287px"
              h="76px"
            >
              View Current Opportunities
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Opportunity;
