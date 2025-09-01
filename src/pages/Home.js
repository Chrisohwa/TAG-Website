import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/data/Home/Hero";
import VisionSection from "../components/data/Home/VisionSection";
import Possibility from "../components/data/Home/Possibility";
import Impact from "../components/data/Home/Impact";
import Opportunity from "../components/data/Home/Opportunity";
import Partner from "../components/data/Home/Partner";
import Contact from "../components/data/Home/Contact";

const Home = () => {
  return (
    <Box gGradient="linear(to-b,#889db2,#e0e0e0)">
      <Hero />
      <VisionSection />
      <Possibility />
      <Impact />
      <Opportunity />
      <Partner />
      <Contact />
    </Box>
  );
};

export default Home;
