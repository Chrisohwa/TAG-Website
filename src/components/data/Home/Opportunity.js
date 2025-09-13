import { Box, Flex, Button, Heading, Text, VStack, Container } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";


const Opportunity = () => {
  const navigate = useNavigate();
  return (
    <Flex
      position="relative"
      className="full_width"
      h={{ base: "60vh", md: "60vh", xl: "100vh" }}
      bgImage="url('https://ik.imagekit.io/oilm06bg9/opportunity.jpg?updatedAt=1757754970261')"
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
          justify={{ base: "flex-start", md: "center", xl: "flex-end" }}
        >
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [60, 0], opacity: 1 }}
            transition={{ duration: 1.1 }}
          >
            <Flex
              flexDir="column"
              align={{ base: "flex-start", md: "center", xl: "flex-start" }}
              justifyContent={{ base: "flex-start", md: "", xl: "flex-end" }}
              gapY={{ base: "20px", md: "25px", xl: "25px" }}
              color="white"
              maxW="700px"
              px={{ base: "0px", md: 50, xl: 50 }}
              position="relative"
              zIndex={1}
            >
              <Heading
                fontWeight={700}
                textTransform="uppercase"
                fontSize="20px"
                color="#FFB800"
                lineHeight={{ base: "100%", md: "", xl: "54px" }}
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
                textAlign={{ base: "left", md: "center", xl: "left" }}
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
                onClick={() => navigate("/careers")}
              >
                View Current Opportunities
              </Button>
            </Flex>
          </motion.div>
        </Flex>
      </Container>
    </Flex>
  );
};

export default Opportunity;
