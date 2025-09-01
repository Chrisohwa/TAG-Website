// MenuDrawer.tsx
import React, { useState, useEffect, useRef } from "react";
import { MdClose } from "react-icons/md";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { Box, Flex, Text } from "@chakra-ui/react";
import { IoIosArrowDown } from "react-icons/io";
import { headers } from "../components/common/constants";
import { scroller } from "react-scroll";
import { useNavigate, useLocation } from "react-router-dom";

const MenuDrawer = ({ isOpen, onClose }) => {
  const [hoverIndex, setHoverIndex] = useState(null);
  const drawerRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleHoverIndex = (i) => {
    setHoverIndex((prev) => (prev === i ? null : i));
  };

  const handleNavigation = (dat, subItem) => {
    const targetPath = subItem.path.toLowerCase();

    // Map names to their routes (fix typos here if needed)
    const pageRoutes = {
      "about us": "/about-us",
      businesses: "/businesses",
      sustainability: "/sustainability",
      careers: "/careers", // fixed typo
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
    onClose(); // close drawer after navigating
  };

  const scrollToSection = (sectionId, retryCount = 5) => {
    const element = document.getElementById(sectionId);
    if (element) {
      scroller.scrollTo(sectionId, {
        duration: 800,
        smooth: "easeInOutQuart",
        offset: -80,
      });
    } else if (retryCount > 0) {
      setTimeout(() => scrollToSection(sectionId, retryCount - 1), 500);
    } else {
      console.warn(`Element with ID ${sectionId} not found.`);
    }
  };

  useEffect(() => {
    // If navigating into this page with state.section
    if (location?.state?.section) {
      scrollToSection(location.state.section);
    }
  }, [location]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (drawerRef.current && !drawerRef.current.contains(event.target)) {
        setHoverIndex(null);
      }
    };
    if (isOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <Drawer
      open={isOpen} // <-- correct prop name
      onClose={onClose}
      direction="top"
      style={{ height: "100vh", background: "#fff", zIndex: 9999 }} // ensure on top
    >
      <Box mt="20px" px="15px" ref={drawerRef}>
        <Flex justifyContent="flex-end">
          <MdClose
            size="24px"
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </Flex>

        {headers.map((item, i) => (
          <Box key={i}>
            <Flex
              align="center"
              px="20px"
              gap="10px"
              py="19px"
              onClick={() => toggleHoverIndex(i)}
              style={{ cursor: "pointer" }}
            >
              <Text
                onClick={(e) => {
                  // if item has a direct path (no sub), navigate and close
                  if (item.path && !item.sub) {
                    e.stopPropagation();
                    navigate(item.path);
                    onClose();
                  }
                }}
                borderBottom={
                  location.pathname === item?.path ? "3px solid #010725" : ""
                }
              >
                {item.name}
              </Text>

              {item?.sub && <IoIosArrowDown />}
            </Flex>

            {item.sub && hoverIndex === i && (
              <Box p="10px">
                {item.sub.map((subItem, subIndex) => (
                  <Box
                    key={subIndex}
                    onClick={() => handleNavigation(item, subItem)}
                    p="15px"
                    fontWeight={600}
                    style={{ cursor: "pointer" }}
                  >
                    {subItem.name}
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        ))}
      </Box>
    </Drawer>
  );
};

export default MenuDrawer;
