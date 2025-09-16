import React from "react";
import { Box, SimpleGrid, VStack, Image, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";


export default function BrandLogo() {

    const logos = [
      [
        "images/landing/brandlogo/mastercardlogo.png",
        "images/landing/brandlogo/afriaccesslogo.png",
      ],
      [
        "images/landing/brandlogo/zenithlogo.png",
        "images/landing/brandlogo/optimuslogo.png",
        "images/landing/brandlogo/cbnlogo.png",
        "images/landing/brandlogo/ubalogo.png",
      ],
      [
        "images/landing/brandlogo/wemalogo.png",
        "images/landing/brandlogo/gtlogo.png",
        "images/landing/brandlogo/interswitchlogo.png",
        "images/landing/brandlogo/fcmblogo.png",
        "images/landing/brandlogo/visalogo.png",
      ],
      [
        "images/landing/brandlogo/cardnalstonelogo.png",
        "images/landing/brandlogo/azlislogo.png",
        "images/landing/brandlogo/johnsonlogo.png",
        "images/landing/brandlogo/meristemlogo.png",
        "images/landing/brandlogo/ecologo.png",
        "images/landing/brandlogo/fidelitylogo.png",
      ],
    ];
  return (
    <Flex minH="50vh" align="center" justify="center">
      <SimpleGrid columns={{ base: 2, md: 3, xl: 4 }} gap="5px">
        {logos.map((column, colIdx) => (
          <VStack key={colIdx} align="center" justify="center" gap="5px">
            {column.map((logo, idx) => (
              <Box
                key={idx}
                bg="#fff"
                shadow="md"
                border="2px solid #001A32"
                w={{ base: "80px", md: "100px", xl: "125px" }}
                h={{ base: "80px", md: "126px", xl: "146px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={4}
                className="logo-animate"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                <Image
                  src={logo}
                  alt={`logo-${idx}`}
                  objectFit="cover"
                  maxH="45px"
                />
              </Box>
            ))}
          </VStack>
        ))}
      </SimpleGrid>
    </Flex>
  );
}

