import {
  Box,
  Container,
  Grid,
  Flex,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  useMediaQuery,
} from "@chakra-ui/react";
import TeamCard from "./TeamCard";
import { teamData } from "../../common/constants";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const OurTeam = () => {
  const navigate = useNavigate();
  // const groupIds = ["leadership", "ceos", "management"];
  const [isMobile] = useMediaQuery("(max-width: 800px)");
  return (
    <Box
      bgGradient="to-b"
      gradientFrom="#ffffff"
      gradientTo="#002b53"
      py={16}
      className="full_width"
      mb={{ base: "-50px", md: "-50px", xl: "0px" }}
      id="team"
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        {/* Section Heading */}
        <VStack align="start" spacing={4} mb={10}>
          <Heading
            color="#001A32"
            fontWeight={{ base: 600, xl: 400 }}
            fontSize={{ base: "2xl", md: "3xl", xl: "74px" }}
            mb={{ base: "", md: "", xl: "20px" }}
          >
            Meet Our Team
          </Heading>
          <Text fontSize="20px" maxW="full" color="#151D26">
            Our global team of experienced engineers, consultants, and project
            managers is the backbone of ABC Company. With a shared passion for
            problem-solving and innovation, we&apos;re dedicated to delivering
            exceptional results for every client.
          </Text>
        </VStack>
        {/* dynamic mapping of id id={groupIds[idx]} */}
        {teamData.map((team, idx) => (
          <Box key={idx} mb={12}>
            {/* Yellow Tag */}
            <Flex w="full" justify={idx % 2 === 0 ? "flex-start" : "flex-end"}>
              <Flex
                bg="#FFBD59"
                color="#001A32"
                flexDir="column"
                p="15PX"
                justify={{
                  base: "center",
                  md: "center",
                  lg: "flex-end",
                  xl: "flex-end",
                }}
                borderRadius="15px"
                mb={6}
                w={{ base: "100", md: "200", lg: "200px", xl: "250px" }}
                h={{ base: "", md: "100", lg: "100px", xl: "150px" }}
              >
                <Heading
                  fontWeight="bold"
                  fontSize={{
                    base: "28px",
                    md: "20px",
                    lg: "20px",
                    xl: "34px",
                  }}
                  bottom="15px"
                  textAlign={idx % 2 === 0 ? "left" : "right"}
                >
                  {team.group}
                </Heading>
              </Flex>
            </Flex>

            {/* Members Grid */}
            <SimpleGrid
              columns={{ base: "2", md: "2", lg: "2", xl: "2" }}
              gapX="20px"
              gapY="50px"
            >
              {team.members.map((member, index) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{
                    x: isMobile
                      ? index % 2 === 0
                        ? [-50, 0]
                        : [50, 0]
                      : index < 3
                        ? [-50, 0]
                        : [50, 0],
                    opacity: 1,
                  }}
                  transition={{ duration: 1 }}
                >
                  <TeamCard
                    key={member.id}
                    img={member.img}
                    name={member.name}
                    title={member.title}
                    onClick={() =>
                      navigate(`/about-us/member-details/${member.id}`)
                    }
                    newColor={index < 4 ? "#001A32" : "#fff"}
                  />
                </motion.div>
              ))}
            </SimpleGrid>
          </Box>
        ))}
      </Container>
    </Box>
  );
};

export default OurTeam;
