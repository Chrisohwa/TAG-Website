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
    <Container
      maxW="1220px"
      py={10}
      mt={{ base: "60px", md: "", lg: "", xl: "80px" }}
    >
      <Box mb="30px">
        <Back />
      </Box>

      <Box>
        <Flex
          direction={{ base: "column", md: "row" }}
          gap={{ base: 6, md: 12 }}
          align={{ base: "center", md: "flex-start" }}
        >
          {/* Profile Image */}
          <Image
            src={member?.img}
            alt={member?.name}
            borderRadius="md"
            objectFit="cover"
            w={{ base: "100%", md: "300px" }}
            h={{ base: "auto", md: "350px" }}
          />

          {/* Member Info */}
          <VStack
            justify="flex-end"
            align="flex-start"
            spacing={3}
            w={{ base: "100%", md: "300px" }}
            h={{ base: "auto", md: "350px" }}
          >
            <Box color="#001A32">
              <Heading
                fontSize={{ base: "", md: "", lg: "", xl: "32px" }}
                fontWeight={500}
              >
                {member?.name}
              </Heading>
              <Text fontSize={{ base: "", md: "", lg: "", xl: "20px" }}>
                {member?.title}
              </Text>
            </Box>
          </VStack>
        </Flex>

        {/* Description paragraphs */}
        <VStack spacing={4} align="flex-start" mt={10}>
          <Text
            textAlign="justify"
            fontSize="sm"
            lineHeight="tall"
            color="gray.700"
          >
            {member?.description}
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default MemberDetails;
