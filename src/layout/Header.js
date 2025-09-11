import React, { useState, useEffect } from "react";
import {
  Flex,
  Box,
  Image,
  Text,
  useMediaQuery,
  Heading,
  Grid,
  Link,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { headers } from "../components/common/constants";
import { AiOutlineMenu } from "react-icons/ai";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { scroller } from "react-scroll";
import MenuDrawer from "./MenuDrawer";
import NavCard from "../components/common/NavCard";
import AboutNavGrid from "../components/common/AboutNavGrid";
import BusinessNavGrid from "../components/common/BusinessNavGrid";
import SustainabilityNavGrid from "../components/common/SustainabilityNavGrid";

const Header = () => {
  const navigate = useNavigate();
  const [isMobile] = useMediaQuery("(max-width: 1200px)");
  const [hoverIndex, setHoverIndex] = useState(null);
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
    if (location.hash) {
      const sectionId = location.hash.replace("#", "");
      scrollToSection(sectionId);
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
    const targetId = subItem.path.toLowerCase();

    // Map names to their routes
    const pageRoutes = {
      "about us": "/about-us",
      businesses: "/businesses",
      sustainability: "/sustainability",
      careers: "/careers",
    };

    const pageRoute = pageRoutes[dat.name.toLowerCase()];

    if (pageRoute) {
      navigate(`${pageRoute}#${targetId}`);
      setTimeout(() => scrollToSection(targetId), 200);
    } else {
      navigate(`#${targetId}`);
      setTimeout(() => scrollToSection(targetId), 200);
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
        {/* invincible nav logo */}
        <Box
          w="full"
          px={{ base: "10px", md: "10px", xl: "2px" }}
          display={isMobile ? "block" : "none"}
        >
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
                w={{ base: "full", md: "240px" }}
                h="40px"
              />
            </Box>
          </motion.div>
        </Box>

        {/*  nav menu items */}
        <Flex
          flexDir="column"
          bg="rgba(104, 123, 141, 0.8)"
          display={isMobile ? "none" : "flex"}
          w={scroll ? "auto" : "100%"}
          borderRadius="35px"
          onMouseEnter={() => scroll && setScroll(false)}
          onMouseLeave={() => {
            setHoverIndex(null);
            if (window.scrollY > 20) setScroll(true);
          }}
        >
          {/* coloum 1 */}
          <Flex
            align="center"
            gapX={{ base: "0px", md: "5px" }}
            px={{ base: "0px", md: "50px" }}
            py={{ base: "0px", md: "10px" }}
            mr={{ base: "0px", md: "70px" }}
          >
            {/* logo image */}
            <Box
              display={scroll ? "none" : "block"}
              w="full"
              px={{ base: "10px", md: "10px", xl: "2px" }}
            >
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
                    w={{ base: "full", md: "240px" }}
                    h="35px"
                  />
                </Box>
              </motion.div>
            </Box>

            <Flex align="center" justifyContent="space-between">
              <Box display={scroll ? "block" : "none"} pr="50px">
                <Image
                  onClick={() => navigate("/")}
                  mt={isMobile ? "0" : "5px"}
                  cursor="pointer"
                  src="/images/statics/translogo.png"
                  w={{ base: "30px", md: "30px" }}
                  h="30px"
                />
              </Box>
              {headers.map((dat, i) => (
                <Box
                  key={i}
                  pos="relative"
                  cursor="pointer"
                  onMouseEnter={() => setHoverIndex(i)}
                  fontSize={{ base: "", md: "10px" }}
                >
                  <NavLink to={dat?.path}>
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileInView={{
                        x: i < 3 ? [-50, 0] : [50, 0],
                        opacity: 1,
                      }}
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
          </Flex>

          {/* column 2 submenu section */}
          {hoverIndex !== null && (
            <>
              {headers[hoverIndex]?.name === "About Us" && (
                <AboutNavGrid onNavigate={handleNavigation} />
              )}

              {headers[hoverIndex]?.name === "Businesses" && (
                <BusinessNavGrid onNavigate={handleNavigation} />
              )}

              {headers[hoverIndex]?.name === "Sustainability" && (
                <SustainabilityNavGrid onNavigate={handleNavigation} />
              )}
            </>
          )}
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
