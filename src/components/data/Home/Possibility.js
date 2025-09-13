import React from "react";
import { possibilityData } from "../../common/constants";
import { Box, Flex, Text, Heading, Grid, Container } from "@chakra-ui/react";
import PossibilityCard from "./PossibilityCard";

const Possibility = () => {
  return (
    <Flex
      className="full_width"
      // bgGradient="to-b"
      // gradientFrom="#fff"
      // gradientTo="#e0e0e0"
      direction="column"
      align="center"
      // justify="center"
      minH={{ base: "", md: "80vh", xl: "80vh" }}
      pt={{ base: "30px", md: "", xl: "0px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "", xl: "" }}>
        <Flex
          flexDir="column"
          gap={{ base: "10px", md: "28px", xl: "28px" }}
          textAlign={{ base: "left", md: "center", xl: "center" }}
          px={{ base: "15px", md: "", xl: "40px" }}
        >
          <Heading
            color="#00472D"
            fontWeight={700}
            fontSize={{ base: "20px", md: "20px", xl: "20px" }}
          >
            What We Do
          </Heading>
          <Heading
            color="#001A32"
            fontWeight={600}
            fontSize={{ base: "22px", md: "28px", xl: "36px" }}
          >
            Industries That Power Possibilities
          </Heading>
          <Text
            w="full"
            color="#002C56"
            fontWeight={500}
            fontSize={{ base: "16px", md: "22px", xl: "25px" }}
            lineHeight="34px"
          >
            At Transalliance Group, our work spans industries vital to Africa's
            future. We deliver lasting value across key sectors by integrating
            cutting-edge innovation, responsible practices, and a people-first
            approach.
          </Text>
        </Flex>
        <Box mt={{ base: "15px", md: "20px", xl: "56px" }}>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={{ base: "12px", md: "12px", xl: "17px" }}
            placeItems="center"
            maxW={{ base: "", md: "1301px" }}
            mx="auto"
          >
            {possibilityData.map((item, index) => (
              <PossibilityCard key={index} {...item} />
            ))}
          </Grid>
        </Box>
      </Container>
    </Flex>
  );
};

export default Possibility;
