import React from "react";
import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { teamData } from "../../common/constants";
import { useParams } from "react-router-dom";
import Back from "../../common/Back";

const MemberDetails = () => {
  const { id } = useParams();
  const allMembers = teamData.flatMap((group) => group.members);
  const member = allMembers.find((m) => m.id.toString() === id);

  return (
    <Box className="full_width">
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        py={10}
        mt={{ base: "60px", md: "", lg: "", xl: "80px" }}
      >
        {/* <Box mb="30px">
          <Back />
        </Box> */}

        <Box>
          <Flex
            direction={{ base: "column", md: "row" }}
            gap={{ base: 6, md: 12, xl:"45px" }}
            align={{ base: "center", md: "flex-start" }}
          >
            {/* Profile Image */}
            <Image
              src={member?.img}
              alt={member?.name}
              borderRadius="md"
              objectFit="cover"
              objectPosition="top"
              w={{ base: "100%", md: "300px", xl: "full" }}
              h={{ base: "auto", md: "350px", xl: "584px" }}
            />

            {/* Member Info */}
            <Box h="100%" w="100%">
              <VStack
                justify="flex-end"
                align="flex-end"
                spacing={3}
                w={{ base: "100%", md: "300px", xl:"601px" }}
                h={{ base: "auto", md: "584px", xl:"584px" }}
              >
                <Box color="#001A32" w="100%" mb="30px">
                  <Heading
                    fontSize={{ base: "24px", md: "32px", xl: "53px" }}
                    fontWeight={500}
                  >
                    {member?.name}
                  </Heading>
                  <Text
                    fontWeight={500}
                    fontSize={{ base: "18px", md: "20px", xl: "38px" }}
                  >
                    {member?.title}
                  </Text>
                </Box>
              </VStack>
            </Box>
          </Flex>

          {/* Description paragraphs */}
          <VStack spacing={4} align="flex-start" mt={10}>
            <Text
              textAlign="justify"
              fontSize="24px"
              fontWeight={500}
              lineHeight="120%"
              color="#001A32"
            >
              {member?.description}
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
};

export default MemberDetails;
