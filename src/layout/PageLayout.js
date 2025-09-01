import React, { useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Box, Flex, useMediaQuery } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

const PageLayout = ({ children }) => {
  const [isMobile] = useMediaQuery();
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <Flex flexDir="column" minH="100vh" w="full" color="#010725" bg="#fff">
      <Header />
      <Flex
        justifyContent="center"
        align="center"
        w="full"
        overflow="hidden"
        px={isMobile ? "20px" : "unset"}
      >
        <Box
          mt="0px"
          pb={{ base: "50px", lg: "0px" }}
          w={{ base: "full", md: "full", lg: "1250px" }}
          px="20px"
          minH="100vh"
        >
          {children}
        </Box>
      </Flex>
      <Box mt="auto">
        <Footer />
      </Box>
    </Flex>
  );
};

export default PageLayout;
