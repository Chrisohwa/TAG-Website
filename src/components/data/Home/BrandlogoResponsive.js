import {Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

export const slides = [
  "images/landing/brandlogo/mastercardlogo.png",
  "images/landing/brandlogo/afriaccesslogo.png",
  "images/landing/brandlogo/zenithlogo.png",
  "images/landing/brandlogo/optimuslogo.png",
  "images/landing/brandlogo/cbnlogo.png",
  "images/landing/brandlogo/ubalogo.png",
  "images/landing/brandlogo/wemalogo.png",
  "images/landing/brandlogo/gtlogo.png",
  "images/landing/brandlogo/interswitchlogo.png",
  "images/landing/brandlogo/fcmblogo.png",
  "images/landing/brandlogo/visalogo.png",
  "images/landing/brandlogo/cardnalstonelogo.png",
  "images/landing/brandlogo/azlislogo.png",
  "images/landing/brandlogo/johnsonlogo.png",
  "images/landing/brandlogo/meristemlogo.png",
  "images/landing/brandlogo/ecologo.png",
  "images/landing/brandlogo/fidelitylogo.png",
];

const BrandlogoResponsive = () => {
  return (
    <Box>
      <Flex
        className="review-card__anim1"
        justifyContent="center"
        align="center"
        gap="20px"
      >
        {slides.slice(0, 9)?.map((item, i) => (
          <Flex
            key={i}
            align="center"
            justifyContent="center"
            py={{ base: "10px", lg: "18px" }}
            px={{ base: "", lg: "10px" }}
            w={{ base: "150px", lg: "200px" }}
            h={{ base: "50px", lg: "100px" }}
          >
            <Image
              src={item}
              w={{ base: "150px", md: "200px" }}
              h={{ base: "80px", md: "100px" }}
              objectFit="contain"
            />
          </Flex>
        ))}
      </Flex>
      <Flex
        mt={{base:"30px", md:"50px"}}
        className="review-card__anim2"
        justifyContent="center"
        align="center"
        gap="20px"
      >
        {slides.slice(10, 17)?.map((item, i) => (
          <Flex
            key={i}
            align="center"
            justifyContent="center"
            py={{ base: "", lg: "18px" }}
            px={{ base: "", lg: "10px" }}
            w={{ base: "150px", lg: "200px" }}
            h={{ base: "50px", lg: "100px" }}
          >
            <Image
              src={item}
              w={{ base: "150px", lg: "200px" }}
              h={{ base: "50px", lg: "100px" }}
              objectFit="contain"
            />
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default BrandlogoResponsive;
