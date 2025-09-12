import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Image,
  Container,
  Heading,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const CIRCLE_BORDER = 14;
// minimum spacing between circles

const nodes = [
  {
    id: "environment",
    label: "Environmental Stewardship:",
    desc: "Aligned with SDG 13 (Climate Action) and SDG 15 (Life on Land).",
    img: "/images/sustainability/enviroment.png",
    bg: "#0f6b42",
    pos: {
      lg: { nx: -1.3, ny: -0.9 }, // phones
      md: { nx: -1.3, ny: -0.9 }, // tablets
      xl: { nx: -1.1, ny: -0.6 }, // desktops
    },
  },
  {
    id: "governance",
    label: "Accountable Governance",
    desc: "Aligned with SDG 16 (Peace, Justice, and Strong Institutions).",
    img: "/images/sustainability/keys.png",
    bg: "#997135",
    pos: {
      lg: { nx: -0.05, ny: -0.7 }, // phones
      md: { nx: -0.05, ny: -0.7 }, // tablets
      xl: { nx: 0.0, ny: -0.5 }, // desktops
    },
  },
  {
    id: "communities",
    label: "Resilient Communities",
    desc: "Aligned with SDG 1 (No Poverty), SDG 3 (Good Health and Well-being), SDG 4 (Quality Education), and SDG 8 (Decent Work and Economic Growth).",
    img: "/images/sustainability/hands.png",
    bg: "#0e4b77",
    pos: {
      lg: { nx: 1.2, ny: -0.8 }, // phones
      md: { nx: 1.2, ny: -0.8 }, // tablets
      xl: { nx: 1.1, ny: -0.55 }, // desktops
    },
  },
  {
    id: "technology",
    label: "Technology for Good",
    desc: "Aligned with SDG 9 (Industry, Innovation, and Infrastructure) and SDG 12 (Responsible Consumption and Production).",
    img: "/images/sustainability/message.png",
    bg: "#0e4b77",
    pos: {
      lg: { nx: -1, ny: 0.6 }, // phones
      md: { nx: -1, ny: 0.6 }, // tablets
      xl: { nx: -0.85, ny: 0.6 }, // desktops
    },
  },
  {
    id: "heritage",
    label: "Heritage\nProtection",
    desc: "Aligned with SDG 11 (Sustainable Cities and Communities).",
    img: "/images/sustainability/industry.png",
    bg: "#0f6b42",
    pos: {
      lg: { nx: 0.8, ny: 0.55 }, // phones
      md: { nx: 0.8, ny: 0.55 }, // tablets
      xl: { nx: 0.65, ny: 0.55 }, // desktops
    },
  },
];

const connections = [
  ["environment", "technology"],
  ["governance", "technology"],
  ["governance", "heritage"],
  ["communities", "heritage"],
];

const Strategy = () => {
  const containerRef = useRef(null);
  const [size, setSize] = useState({ width: 0, height: 0 });
  const [points, setPoints] = useState({});
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile] = useMediaQuery("(max-width: 820px)");
  const CIRCLE_SIZE = isMobile ? 180 : 346;
  const MIN_GAP = isMobile ? 30 : 40;

  useLayoutEffect(() => {
    const measure = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const cx = width / 2;
      const cy = height / 2;

      const circleRadius = CIRCLE_SIZE / 2;
      const spacing = circleRadius * 2 + MIN_GAP;

      const newPoints = {};
      for (const n of nodes) {
        // 👇 pick correct pos based on screen size
        let pos = n.pos.md;
        if (window.innerWidth >= 1280 && n.pos.xl) {
          pos = n.pos.xl;
        } else if (window.innerWidth >= 768 && n.pos.md) {
          pos = n.pos.md;
        }

        const x = cx + pos.nx * spacing;
        const y = cy + pos.ny * spacing;
        newPoints[n.id] = { x, y };
      }

      setSize({ width, height });
      setPoints(newPoints);
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [CIRCLE_SIZE, MIN_GAP]);

  useEffect(() => {
    const t = setInterval(
      () => setActiveIndex((i) => (i + 1) % nodes.length),
      3200
    );
    return () => clearInterval(t);
  }, []);
  return (
    <Flex
      justifyContent="center"
      minH={{ base: "50vh", md: "70vh", xl: "100vh" }}
      color="#fff"
      pos="relative"
      className="full_width"
      bgImage="url(/images/sustainability/greenfield.png)"
      bgRepeat="no-repeat"
      bgSize="cover"
      bgPos="center"
      px="20px"
    >
      <Box
        position="absolute"
        top={0}
        left={0}
        width="100%"
        height="100%"
        bg="#001A32B2"
        zIndex={1}
      />
      {/* tablet and laptop container */}
      <Container
        display={{ base: "none", md: "block", xl: "block" }}
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
      >
        <Flex
          justify="center"
          mt={{ base: "80px", md: "130px", xl: "130px" }}
          id="strategies"
        >
          <Heading
            fontSize={{ base: "32px", md: "40px", xl: "60px" }}
            fontWeight={700}
            lineHeight="100%"
            color="#fff"
            zIndex={2}
          >
            Our Sustainability Strategy
          </Heading>
        </Flex>

        <Flex
          ref={containerRef}
          position="relative"
          h={{ base: "", md: "60vh", xl: "130vh" }}
          w="100%"
          align="center"
          justify="center"
          display={{ base: "none", md: "flex", xl: "flex" }}
        >
          {/* SVG connectors */}
          {size.width > 0 && (
            <svg
              width={size.width}
              height={size.height}
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                pointerEvents: "none",
                zIndex: 0,
              }}
            >
              {connections.map(([from, to], i) => {
                const a = points[from];
                const b = points[to];
                if (!a || !b) return null;
                return (
                  <line
                    key={i}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke="#c9d97d"
                    strokeWidth={18}
                    strokeLinecap="round"
                    opacity={0.95}
                  />
                );
              })}
            </svg>
          )}

          {/* ghost image that travels between centers */}
          {points && Object.keys(points).length > 0 && (
            <MotionBox
              position="absolute"
              left={0}
              top={0}
              w={{ base: "", md: "200px", xl: `${CIRCLE_SIZE}px` }}
              h={{ base: "", md: "200px", xl: `${CIRCLE_SIZE}px` }}
              borderRadius="full"
              overflow="hidden"
              zIndex={1}
              animate={{
                x: points[nodes[activeIndex].id].x - CIRCLE_SIZE / 2,
                y: points[nodes[activeIndex].id].y - CIRCLE_SIZE / 2,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              //   style={{ filter: "brightness(0.75)" }}
            >
              <Image
                src={nodes[activeIndex].img}
                alt=""
                w={{ base: "", md: "200px", xl: "100%" }}
                h={{ base: "", md: "200px", xl: "100%" }}
                objectFit="cover"
                draggable={false}
              />
            </MotionBox>
          )}

          {/* circles with borders + labels */}
          {nodes.map((n, idx) => {
            const center = points[n.id];
            return (
              <MotionBox
                key={n.id}
                position="absolute"
                left={center ? `${center.x - CIRCLE_SIZE / 2}px` : "50%"}
                top={center ? `${center.y - CIRCLE_SIZE / 2}px` : "50%"}
                w={{ base: "", md: "200px", xl: `${CIRCLE_SIZE}px` }}
                h={{ base: "", md: "200px", xl: `${CIRCLE_SIZE}px` }}
                borderRadius="full"
                overflow="hidden"
                bgColor={n.bg}
                boxShadow="lg"
                zIndex={2}
                initial={{ scale: 1 }}
                animate={{
                  scale: activeIndex === idx ? 1.05 : 1,
                  opacity: activeIndex === idx ? 1 : 1,
                }}
                transition={{ duration: 0.6 }}
              >
                <Box w="100%" h="100%" position="absolute" zIndex={0}>
                  {/* 1. Background image */}
                  <Image
                    src={n.img}
                    alt={n.label}
                    w="100%"
                    h="100%"
                    objectFit="cover"
                    draggable={false}
                  />

                  {/* 2. Dark overlay */}
                  <Box
                    position="absolute"
                    top="0"
                    left="0"
                    w="100%"
                    h="100%"
                    bg="rgba(0,0,0,0.7)"
                    zIndex={1}
                  />

                  {/* 3. Text above overlay */}
                  <Box
                    position="absolute"
                    left="50%"
                    top="20%"
                    transform="translateX(-50%)"
                    color="white"
                    lineHeight="1"
                    w="80%"
                    textAlign="center"
                    zIndex={3}
                  >
                    <Text
                      fontSize={{ base: "14px", md: "14px", xl: "20px" }}
                      fontWeight="700"
                      lineHeight="100%"
                    >
                      {n.label}
                    </Text>
                    <Text
                      fontSize={{ base: "12px", md: "12px", xl: "18px" }}
                      fontWeight="400"
                      lineHeight="29px"
                    >
                      {n.desc}
                    </Text>
                  </Box>
                </Box>
              </MotionBox>
            );
          })}
        </Flex>
      </Container>

      {/* mobile container */}
      <Container
        display={{ base: "block", md: "none", xl: "none" }}
        maxW="1350px"
        px={{ base: "0px", md: "15px", xl: "0px" }}
      >
        <Flex justify="center" mt={{ base: "80px", md: "130px", xl: "130px" }}>
          <Heading
            fontSize={{ base: "32px", md: "40px", xl: "60px" }}
            fontWeight={700}
            lineHeight="100%"
            color="#fff"
            zIndex={2}
          >
            Our Sustainability Strategy
          </Heading>
        </Flex>

        <Flex flexDir="column" mt="60px" w="full" minH="full">
          {nodes.map((n, idx) => (
            <MotionBox
              key={n.id}
              w="full"
              borderRadius="md"
              overflow="hidden"
              bgColor={n.bg}
              boxShadow="lg"
              mb={4}
              zIndex={2}
              initial={{ scale: 1 }}
              animate={{
                scale: activeIndex === idx ? 1.05 : 1,
                opacity: activeIndex === idx ? 1 : 0.7,
              }}
              transition={{ duration: 0.6 }}
            >
              <Flex flexDir="column" gap={4} w="100%" h="100%" zIndex={2}>
                <Box
                  color="white"
                  lineHeight="1"
                  w="full"
                  textAlign="left"
                  zIndex={2}
                  p={4}
                >
                  <Text
                    fontSize={{ base: "16px", md: "16px", xl: "20px" }}
                    fontWeight="700"
                    lineHeight="100%"
                  >
                    {n.label}
                  </Text>
                  <Text
                    fontSize={{ base: "16px", md: "16px", xl: "18px" }}
                    fontWeight="400"
                    lineHeight="29px"
                  >
                    {n.desc}
                  </Text>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </Flex>
      </Container>
    </Flex>
  );
};

export default Strategy;
