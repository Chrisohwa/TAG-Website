import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  useMediaQuery,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { headers } from "../components/common/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import MenuDrawer from "./MenuDrawer";

const Header = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 1200px)");
  const [hoverIndex, setHoverIndex] = useState("");
  const [scroll, setScroll] = useState(false);
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const openDrawer = () => setIsOpen(true);
  const closeDrawer = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location?.state?.section) {
      scrollToSection(location.state.section);
    }
  }, [location]);

  const headerEl = document.getElementById("header");
  const headerOffset = headerEl
    ? headerEl.offsetHeight + headerEl.offsetTop
    : 0;

  const scrollToSection = (sectionId, retryCount = 5) => {
    const element = document.getElementById(sectionId);

    if (element) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
        offset: -headerOffset,
      });
    } else if (retryCount > 0) {
      setTimeout(() => scrollToSection(sectionId, retryCount - 1), 500);
    } else {
      console.warn(`Element with ID ${sectionId} not found.`);
    }
  };

  const handleNavigation = (dat, subItem) => {
    const targetPath = subItem.path.toLowerCase();

    // Map names to their routes
    const pageRoutes = {
      "about us": "/about-us",
      businesses: "/businesses",
      sustainability: "/sustainability",
      careers: "/careeres",
    };

    const pageRoute = pageRoutes[dat.name.toLowerCase()];

    if (pageRoute) {
      if (window.location.pathname !== pageRoute) {
        navigate(pageRoute, { state: { section: targetPath } });
      } else {
        scrollToSection(targetPath);
      }
    } else {
      navigate(targetPath);
    }

    setHoverIndex(null);
  };

  return (
    <Flex
      id="header"
      zIndex={666}
      pos="fixed"
      transition=".3s ease-in-out"
      top="35px"
      w="full"
      left="0"
    >
      <MenuDrawer isOpen={isOpen} onClose={closeDrawer} />
      <Flex
        justifyContent="center"
        align="center"
        w={isMobile ? "100%" : "1350px"}
        gapX={{ base: "0px", md: "px" }}
        mx="auto"
      >
        {/* logo image */}
        <Box w="full" px={{ base: "10px", md: "10px", xl: "2px" }}>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ x: [-50, 0], opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Box w={{ base: "100%", md: "100%" }}>
              <Image
                onClick={() => navigate("/")}
                mt={isMobile ? "0" : "5px"}
                cursor="pointer"
                src="/images/statics/logo.png"
                w={{base:"full", md:"240px"}}
                h="40px"
              />
            </Box>
          </motion.div>
        </Box>

        {/* menu items */}
        <Flex
          display={isMobile ? "none" : "flex"}
          align="flex-start"
          bg="rgba(104, 123, 141, 0.8)"
          borderRadius="35px"
          gapX={{ base: "0px", md: "5px" }}
          px={{ base: "0px", md: "50px" }}
          py={{ base: "0px", md: "10px" }}
          mr={{ base: "0px", md: "70px" }}
        >
          {headers.map((dat, i) => (
            <Box
              key={i}
              pos="relative"
              cursor="pointer"
              onMouseEnter={() => setHoverIndex(i)}
              onMouseLeave={() => setHoverIndex("")}
              fontSize={{ base: "", md: "10px" }}
            >
              {dat?.sub && hoverIndex === i && (
                <Box top="12px" pt="30px" zIndex={99} pos="absolute">
                  <Box
                    p="10px"
                    bg="rgba(255, 255, 255, 0.1)"
                    w={hoverIndex === 2 ? "230px" : "200px"}
                    borderBottomRadius="8px"
                    zIndex={1}
                    backdropFilter="blur(30px)"
                    color="#fff"
                  >
                    {dat?.sub?.map((subItem, subIndex) => (
                      <Box
                        key={subIndex}
                        onClick={() => handleNavigation(dat, subItem)}
                        p="5px"
                        cursor="pointer"
                        fontSize="12px"
                        lineHeight="24px"
                        fontWeight={600}
                        _hover={{ color: "#000" }}
                      >
                        <Text
                          w="fit-content"
                          className="hover-underline-animation"
                        >
                          {subItem.name}
                        </Text>
                      </Box>
                    ))}
                  </Box>
                </Box>
              )}

              <NavLink to={dat?.path}>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ x: i < 3 ? [-50, 0] : [50, 0], opacity: 1 }}
                  transition={{ duration: 1, delay: i * 0.1 }}
                >
                  <Flex align="center" pos="relative" zIndex={99} w="full">
                    <Heading
                      lineHeight="14px"
                      fontSize="16px"
                      textWrap="nowrap"
                      px={4}
                      py={2}
                      fontWeight={700}
                      color={
                        location.pathname === dat?.path ? "#fff" : "#010725"
                      }
                      _hover={{ color: "#fff" }}
                      w="fit-content"
                    >
                      {dat.name}
                    </Heading>
                  </Flex>
                </motion.div>
              </NavLink>
            </Box>
          ))}
        </Flex>

        {/* menuicon */}
        <Flex
          justifyContent="flex-end"
          display={isMobile ? "flex" : "none"}
          w="100%"
          px={{ base: "10px", md: "10px", xl: "2px" }}
        >
          <AiOutlineMenu color="#fff" size={30} onClick={openDrawer} />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Header;
