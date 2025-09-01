import { Box, Image, Text, VStack } from "@chakra-ui/react";



const TeamCard = ({onClick, img, name, title }) => {
    
  return (
    <VStack
      spacing={2}
      align="start"
      cursor="pointer"
      onClick={onClick}
    >
      <Image
        src={img}
        alt={name}
        borderRadius="md"
        objectFit="cover"
        w="100%"
        h="333px"
        _hover={{ scale: "105%", transition:"0.3s ease-in-out" }}
      />
      <Text
        fontWeight={500}
        fontSize="28px"
        color="#001A32"
        transition="0.3s ease-in-out"
        _hover={{
          transform: "scale(1.05)",
        }}
      >
        {name}
      </Text>
      <Text fontSize="20px" color="#001A32" fontWeight="500">
        {title}
      </Text>
    </VStack>
  );
};

export default TeamCard;