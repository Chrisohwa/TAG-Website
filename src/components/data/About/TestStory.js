"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  Box,
  Text,
  Image,
  Container,
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
    label: "Environmental\nStewardship",
    img: "/images/landing/circle1.jpg",
    border: "#0f6b42",
    pos: {
      lg: { nx: -1.3, ny: -0.9 }, // phones
      md: { nx: -1.3, ny: -0.9 }, // tablets
      xl: { nx: -1.1, ny: -0.6 }, // desktops
    },
  },
  {
    id: "governance",
    label: "Accountable\nGovernance",
    img: "/images/landing/circle2.jpg",
    border: "#e3a247",
    pos: {
      lg: { nx: -0.05, ny: -0.7 }, // phones
      md: { nx: -0.05, ny: -0.7 }, // tablets
      xl: { nx: 0.0, ny: -0.5 }, // desktops
    },
  },
  {
    id: "communities",
    label: "Resilient\nCommunities",
    img: "/images/landing/circle3.jpg",
    border: "#0e4b77",
    pos: {
      lg: { nx: 1.2, ny: -0.8 }, // phones
      md: { nx: 1.2, ny: -0.8 }, // tablets
      xl: { nx: 1.1, ny: -0.55 }, // desktops
    },
  },
  {
    id: "technology",
    label: "Technology\nfor Good",
    img: "/images/landing/circle4.jpg",
    border: "#0e4b77",
    pos: {
      lg: { nx: -1, ny: 0.6 }, // phones
      md: { nx: -1, ny: 0.6 }, // tablets
      xl: { nx: -0.85, ny: 0.6 }, // desktops
    },
  },
  {
    id: "heritage",
    label: "Heritage\nProtection",
    img: "/images/landing/circle5.jpg",
    border: "#0f6b42",
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

export default function CircleNetwork() {
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
        let pos = n.pos.base;
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
    <Container
      maxW="1350px"
      minH={{ base: "", md: "60vh", xl: "100vh" }}
      px={{ base: "0px", md: "0px", xl: "0px" }}
      border="2px solid red"
    >
      <Flex
        ref={containerRef}
        position="relative"
        h={{ base: "", md: "60vh", xl: "130vh" }}
        w="100%"
        align="center"
        justify="center"
        border="3px solid blue"
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
            style={{ filter: "brightness(0.75)" }}
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
              borderWidth={`${CIRCLE_BORDER}px`}
              borderColor={n.border}
              boxShadow="lg"
              zIndex={2}
              initial={{ scale: 1 }}
              animate={{
                scale: activeIndex === idx ? 1.02 : 1,
                opacity: activeIndex === idx ? 1 : 0.99,
              }}
              transition={{ duration: 0.6 }}
            >
              <Box w="100%" h="100%" position="relative">
                <Image
                  src={n.img}
                  alt={n.label}
                  w="100%"
                  h="100%"
                  objectFit="cover"
                  draggable={false}
                  style={{ filter: "brightness(0.45)" }}
                />
                <Box
                  position="absolute"
                  left="20%"
                  top="45px"
                  color="white"
                  lineHeight="1"
                >
                  <Text fontSize="21.65px" fontWeight="500" letterSpacing="1px">
                    <Text
                      as="span"
                      display="inline-block"
                      mr="4px"
                      fontSize="36px"
                      fontWeight="700"
                    >
                      {n.label.charAt(0)}
                    </Text>
                    {n.label.split("\n")[0].slice(1)}
                  </Text>
                  {n.label
                    .split("\n")
                    .slice(1)
                    .map((l, i) => (
                      <Text
                        key={i}
                        fontSize="21.65px"
                        fontWeight="500"
                        ml="20px"
                        mt="2px"
                      >
                        {l}
                      </Text>
                    ))}
                </Box>
              </Box>
            </MotionBox>
          );
        })}
      </Flex>
    </Container>
  );
}
