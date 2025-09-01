import {
  Flex,
  Heading,
  Text,
  Box,
  Checkbox,
  Button,
  Container,
  Link,
} from "@chakra-ui/react";
import Fields from "../../common/Fields";
import React, { useState } from "react";

const Contact = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Box
      className="full_width"
      minH={{ base: "70vh", md: "70vh", xl: "100vh" }}
      bgGradient="to-b"
      gradientFrom="#5e83a6 "
      gradientTo="#002a52 "
      py={{ base: "0px", md: "50px", xl: "0px" }}
      mt={{ base: "-5px", md: "-5px", xl: "0px" }}
      mb={{ base: "-50px", md: "-50px", xl: "0px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          align={{ base: "flex-start", md: "center", xl: "center" }}
          justify={{
            base: "flex-start",
            md: "space-between",
            xl: "flex-start",
          }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "30px", md: "", xl: "350px" }}
        >
          {/* left */}
          <Flex
            direction="column"
            align={{ base: "center", md: "flex-start", xl: "flex-start" }}
            justify={{ base: "center", md: "center", xl: "flex-start" }}
          >
            <Text
              color="#FFBD59"
              fontSize={{ base: "20px", md: "20px", xl: "20px" }}
              fontWeight={700}
              textAlign={{ base: "center", md: "left", xl: "left" }}
              lineHeight="64px"
            >
              Contact Us
            </Text>

            <Heading
              color="#fff"
              fontWeight={600}
              fontSize={{ base: "26px", md: "26px", xl: "32px" }}
              textAlign={{ base: "center", md: "left", xl: "left" }}
              lineHeight="64px"
            >
              Let&apos;s Create the Future Together
            </Heading>

            <Text
              fontWeight={500}
              fontSize="20px"
              color="#fff"
              maxW={{ base: "100%", md: "380px", xl: "545px" }}
              textAlign={{ base: "center", md: "left", xl: "left" }}
              mb={4}
            >
              Whether you&apos;re looking to collaborate, learn more about our
              initiatives, or explore career opportunities, we&apos;d love to
              hear from you.
            </Text>

            <Flex
              direction="column"
              align={{ base: "center", md: "flex-start", xl: "flex-start" }}
              justify={{ base: "center", md: "flex-start", xl: "flex-start" }}
              as="ul"
              color="#fff"
              w="100%"
              mx={{ base: "0", md: "0", xl: "0" }}
            >
              <Box
                as="li"
                listStyle="disc"
                ml={{ base: "0", md: "17px", xl: "17px" }}
                fontSize="20px"
                textAlign={{ base: "center", md: "left", xl: "left" }}
                lineHeight="34px"
              >
                <a href="mailto:info@transalliancegroup.com">
                  Email: info@transalliancegroup.com
                </a>
              </Box>

              <Box
                as="li"
                listStyle="disc"
                ml={{ base: "0", md: "17px", xl: "17px" }}
                fontSize="20px"
                textAlign={{ base: "center", md: "left", xl: "left" }}
                lineHeight="34px"
              >
                <a href="tel:+2348055058367">Phone: +234 805 505 8367</a>
              </Box>

              <Box
                as="li"
                listStyle="disc"
                ml={{ base: "0", md: "17px", xl: "17px" }}
                fontSize="20px"
                textAlign={{ base: "center", md: "left", xl: "left" }}
                lineHeight="34px"
              >
                Address: 200c Muri Okunola Street VI Lagos.
              </Box>
            </Flex>
          </Flex>

          {/* Right Form */}
          <Box
            bg="white"
            borderRadius="20px"
            p="50px"
            w="full"
            boxShadow="lg"
            maxW="500px"
            flexBasis="50%"
            mb="50px"
          >
            <Heading size="3xl" fontWeight="400" textAlign="center" mb={6}>
              Send Us Message
            </Heading>

            <Fields title="First Name" placeholder="Your First Name" />
            <Fields title="Email" placeholder="Your Email Address" />
            <Fields title="Enquiries" placeholder="Note" textarea />

            <Checkbox.Root variant="outline" colorPalette="blue">
              <Checkbox.HiddenInput />
              <Checkbox.Control />
              <Checkbox.Label>
                {" "}
                I hereby accept the{" "}
                <Link href="/about-us" color="blue.600">
                  T&amp;C
                </Link>{" "}
                of TAG
              </Checkbox.Label>
            </Checkbox.Root>

            <Button
              bg="#003366"
              color="white"
              w="100%"
              h="48px"
              borderRadius="12px"
              fontWeight="600"
              _hover={{ bg: "#002244" }}
              mt="15px"
            >
              Send
            </Button>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
