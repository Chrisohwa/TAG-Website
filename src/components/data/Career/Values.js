import { Box, Flex, Grid, Heading, Text, Icon, Container } from "@chakra-ui/react";
import {
  FiUsers,
  FiTrendingUp,
  FiShield,
  FiAward,
  FiStar,
} from "react-icons/fi";


// card component

const ValueCard = ({ icon, title, description }) => {
  return (
    <Box
      
      w={{ base: "full", md: "220px", xl: "390px" }}
      h={{base:"248px", md:"248px", xl:"248px"}}
      borderRadius="12px"
      bg="#fff"
      boxShadow="sm"
      p="24px"
      display="flex"
      flexDirection="column"
      gap={{base:"16px", md:"0px", xl:"16px"}}
    >
      {/* Icon */}
      <Box
        w="40px"
        h="40px"
        borderRadius="full"
        bg="#DBEAFE"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Icon as={icon} boxSize="20px" color="#2563EB" />
      </Box>

      {/* Title */}
      <Heading
        fontSize="20px"
        fontWeight={600}
        lineHeight="28px"
        color="#111827"
      >
        {title}
      </Heading>

      {/* Description */}
      <Text
        fontSize="16px"
        fontWeight={400}
        lineHeight="26px"
        maxW="325px"
        color="#4B5563"
      >
        {description}
      </Text>
    </Box>
  );
};



const Values = () => {

    const value = [
      {
        icon: FiUsers,
        title: "People First",
        description:
          "We deeply understand and prioritize the needs of our customers, partners and team members",
      },
      {
        icon: FiTrendingUp,
        title: "Innovation",
        description:
          "We embrace a mindset of continuous learning and innovation, driving programs through creativity and insight",
      },
      {
        icon: FiShield,
        title: "Integrity",
        description: "We must display honesty and strong moral principles.",
      },
      {
        icon: FiAward,
        title: "Passion",
        description:
          "We remain steadfast and adaptable overcoming obstacles to achieve our vision",
      },
      {
        icon: FiStar,
        title: "Excellence",
        description:
          "We continuously push the boundaries of what’s possible, striving and highest standards",
      },
    ];

  return (
    <Box
      className="full_width"
      minH={{ base: "60vh", md: "60vh" }}
      bgGradient="to-t"
      gradientTo="#003b73 "
      gradientFrom="#fff 40%"
      py={{ base: 10, md: 20 }}
      mt={{ base: "0px", md: "0px", lg: "0px", xl: "0px" }}
      id=""
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          flexDir="column"
          justify="center"
          align="center"
          color="#fff"
          gap={4}
        >
          <Heading
            fontWeight={700}
            fontSize={{ base: "32px", md: "36px" }}
            lineHeight="40px"
          >
            Our Core Values
          </Heading>
          <Text
            textAlign={{ base: "center", md: "center", xl: "center" }}
            fontWeight={400}
            fontSize={{ base: "20px", md: "20px", xl: "20px" }}
            lineHeight="28px"
            maxW={{ base: "", md: "", xl: "800px" }}
          >
            These values guide everything we do and shape the culture that makes
            Transalliance Group special
          </Text>
        </Flex>

        {/* First Row */}
        <Box
          maxW={{ base: "", md: "", xl: "1232px" }}
          mx="auto"
          mt={{ base: "40px", md: "40px", xl: "64px" }}
        >
          <Grid
            templateColumns={{
              base: "1fr",
              md: "repeat(3, 1fr)",
              xl: "repeat(3, 1fr)",
            }}
            justifyItems="center"
            gap="32px"
          >
            {value.slice(0, 3).map((v, i) => (
              <ValueCard
                key={i}
                icon={v.icon}
                title={v.title}
                description={v.description}
              />
            ))}
          </Grid>
        </Box>

        {/* Second Row (centered) */}
        <Flex
          maxW={{ base: "", md: "", xl: "1232px" }}
          justify="center"
          gap="32px"
          mt="32px"
          flexWrap="wrap"
          mx="auto"
        >
          {value.slice(3).map((v, i) => (
            <ValueCard
              key={i + 3}
              icon={v.icon}
              title={v.title}
              description={v.description}
            />
          ))}
        </Flex>
      </Container>
    </Box>
  );
};

export default Values;
