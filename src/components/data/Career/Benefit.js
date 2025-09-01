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
} from "@chakra-ui/react";
import {
  FaDollarSign,
  FaHeart,
  FaChartLine,
  FaUsers,
  FaWallet,
  FaStar,
} from "react-icons/fa";
import { TfiMedall } from "react-icons/tfi";
import { RiHeartAddLine } from "react-icons/ri";

const BenefitCard = ({ icon, title, text }) => {
  return (
    <Box
      w={{ base: "full", md: "355px", xl: "390px" }}
      h={{ base: "248px", md: "300px", xl: "319px" }}
      bgGradient="to-b" // subtle gradient
      gradientFrom="#D6ECFF  100%"
      gradientTo="#001e39"
      borderRadius="12px"
      p="24px"
      boxShadow="sm"
    >
      <VStack align="start" spacing="16px">
        {/* Icon */}
        <Box
          bg="#DBEAFE"
          borderRadius="full"
          p="12px"
          boxShadow="md"
          display="flex"
          alignItems="center"
          justifyContent="center"
          mt="30px"
        >
          <Icon as={icon} boxSize="25px" color="#2B6CB0" />
        </Box>

        {/* Heading */}
        <Text fontSize="20px" fontWeight="600" lineHeight="28px">
          {title}
        </Text>

        {/* Description */}
        <Text
          fontSize="16px"
          fontWeight="400"
          lineHeight="26px"
          color="gray.700"
        >
          {text}
        </Text>
      </VStack>
    </Box>
  );
};

const Benefit = () => {
  const benefitList = [
    {
      icon: FaDollarSign,
      title: "Competitive Salary",
      text: "Rewarding innovation and dedication with compensation that reflects the value you bring.",
    },
    {
      icon: RiHeartAddLine,
      title: "Comprehensive Health Coverage",
      text: "Your well-being matters. Our health plans are designed to safeguard you and your family.",
    },
    {
      icon: FaChartLine,
      title: "Growth Opportunities",
      text: "From cross-industry exposure to leadership development, we provide opportunities to learn, grow, and lead.",
    },
    {
      icon: FaUsers,
      title: "Diverse and Inclusive Culture",
      text: "We thrive on collaboration and the exchange of perspectives, cultivating a workplace where everyone belongs and innovation flourishes.",
    },
    {
      icon: FaWallet,
      title: "Financial Support",
      text: "As a Group with financial expertise, we extend flexible short-term credit facilities to employees, ensuring peace of mind beyond the workplace.",
    },
    {
      icon: TfiMedall,
      title: "Purpose Driven",
      text: "Whether it’s creating seamless global payments, delivering unforgettable travel experiences, or pioneering fintech innovations, you’ll be part of work that matters.",
    },
  ];

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh", xl: "100vh" }}
      py={{ base: 10, md: 20 }}
      mt={{ base: "-25px", md: "-55px", xl: "-55px" }}
      mb={{ base: "-50px", md: "px", xl: "px" }}
      bgGradient="to-br"
      gradientTo="#003b73 "
      gradientFrom="#fff 50%"
      id=""
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex flexDir="column" justify="center" align="center" gap={4}>
          <Heading
            fontWeight={700}
            fontSize={{ base: "32px", md: "36px", xl: "48px" }}
            lineHeight="40px"
            color="#111827"
          >
            What benefits are waiting for you?
          </Heading>
          <Text
            textAlign={{ base: "center", md: "center", xl: "center" }}
            fontWeight={400}
            fontSize="20px"
            lineHeight="28px"
            maxW={{ base: "", md: "", xl: "754px" }}
            color="#4B5563"
          >
            We understand that a fulfilling career is about more than the work
            you do, it&apos;s about the culture, the growth, and the support you
            receive.
          </Text>
        </Flex>

        <Grid
          templateColumns={{
            base: "1fr",
            md: "repeat(2, 1fr)",
            xl: "repeat(3, 1fr)",
          }}
          gap="24px"
          justifyItems="center"
          maxW="1200px"
          mx="auto"
          py="60px"
        >
          {benefitList.map((val, i) => (
            <BenefitCard
              key={i}
              icon={val.icon}
              title={val.title}
              text={val.text}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Benefit;
