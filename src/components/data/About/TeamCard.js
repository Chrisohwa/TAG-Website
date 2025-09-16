import { Box, Image, Text, VStack } from "@chakra-ui/react";



const TeamCard = ({onClick, img, name, title, newColor }) => {
    
  return (
    <VStack
      spacing={2}
      align="start"
      _hover={{ scale: "105%", transition: "0.3s ease-in-out" }}
      cursor="pointer"
      onClick={onClick}
    >
      <Image
        src={img}
        alt={name}
        borderRadius="md"
        objectFit="cover"
        objectPosition="top center"
        w={{ base: "180px", md: "350px", xl: "640px" }}
        h={{ base: "200px", md: "333px", xl: "600px" }}
      />
      <Text
        fontWeight={500}
        lineHeight="80%"
        fontSize={{ base: "20px", md: "24px", xl: "28px" }}
        color={newColor}
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        {name}
      </Text>
      <Text
        fontSize={{ base: "14px", md: "16px", xl: "18px" }}
        color={newColor}
        lineHeight="20px"
        fontWeight="400"
      >
        {title}
      </Text>
    </VStack>
  );
};

export default TeamCard;