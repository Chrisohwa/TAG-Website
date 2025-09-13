import React from "react";
import {
  Box,
  Flex,
  Grid,
  Heading,
  Text,
  Button,
  Container,
  VStack,
  Icon,
  Link,
  Center,
} from "@chakra-ui/react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";

const ContactCard = ({ icon, title, contactLink, details }) => {
  const isClickable =
    title.toLowerCase() === "phone" || title.toLowerCase() === "email";

  return (
    <Flex
      w={{ base: "370px", md: "284px" }}
      h="248px"
      bg="#fff"
      borderRadius="12px"
      boxShadow="lg"
      p="24px"
      flexDir="column"
      alignItems="center"
      justify="flex-start"
      textAlign="center"
      
    >
      <Center w="64px" h="64px" borderRadius="full" bg="#2563EB" mb="14px">
        <Icon as={icon} boxSize="22px" color="white" />
      </Center>

      {/* Title */}
      <Heading
        fontSize="20px"
        fontWeight={600}
        lineHeight="28px"
        color="#111827"
        mb="10px"
      >
        {title}
      </Heading>

      {/* Contact value */}
      <Box mb="6px">
        {isClickable ? (
          <Link
            href={contactLink}
            fontSize="16px"
            color="#2F64FF"
            fontWeight={600}
            _hover={{ textDecoration: "underline" }}
          >
            {contactLink.replace(/^(tel:|mailto:)/, "")}
          </Link>
        ) : (
          <Text color="#2F64FF" fontSize="16px" fontWeight={600} maxW="350px">
            {contactLink}
          </Text>
        )}
      </Box>

      {/* Details */}
      {details && (
        <Text
          fontSize="14px"
          lineHeight="20px"
          fontWeight={400}
          color="#4B5563"
        >
          {details}
        </Text>
      )}
    </Flex>
  );
};

const ContactInfo = () => {
  const contactList = [
    {
      icon: FiPhone,
      title: "Phone",
      contactLink: "tel: +234 805 505 8367",
      details: "Monday to Friday, 9 AM - 5 PM WAT",
    },
    {
      icon: FiMail,
      title: "Email",
      contactLink: "mailto:info@transalliancegroup.com",
      details: "We'll respond within 24 hours",
    },
    {
      icon: FiMapPin,
      title: "Address",
      contactLink: "200c Muri Okunola Victoria Island, Lagos",
      details: "",
    },
    {
      icon: FiClock,
      title: "Business Hours",
      contactLink: "Monday - Friday: 9:00 AM - 5:00 PM",
      details: "Saturday - Sunday: Closed",
    },
  ];

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh", xl: "100vh" }}
      pt={{ base: 10, md: 20, xl: "169px" }}
      //   mt={{ base: "-25px", md: "-55px", xl: "0px" }}
      //   mb={{ base: "-50px", md: "px", xl: "px" }}
      bgGradient="to-tl"
      gradientTo="#447099"
      gradientFrom="#fff 60%"
      id=""
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <VStack gap="64px">
          <Flex flexDir="column" justify="center" align="center" gap={4}>
            <Heading
              fontWeight={700}
              fontSize={{ base: "28px", md: "32px", xl: "36px" }}
              lineHeight="40px"
              color="#111827"
            >
              Contact Information
            </Heading>
            <Text
              textAlign={{ base: "center", md: "center", xl: "center" }}
              fontWeight={400}
              fontSize="20px"
              lineHeight="28px"
              maxW={{ base: "", md: "", xl: "754px" }}
              color="#4B5563"
            >
              Multiple ways to reach us. Choose the method that works best for
              you.
            </Text>
          </Flex>

          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(2, 1fr)",
              xl: "repeat(4, 1fr)",
            }}
            gap={{ base: 6, md: 8, xl: 10 }}
            justifyItems="center"
          >
            {contactList.map((contact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ y: [50, 0], opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <ContactCard key={i} {...contact} />
              </motion.div>
            ))}
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
};

export default ContactInfo;
