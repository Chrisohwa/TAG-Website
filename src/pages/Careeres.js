import { Box } from "@chakra-ui/react";
import React from "react";
import Hero from "../components/data/Career/Hero";
import Values from "../components/data/Career/Values";
import OfficeLife from "../components/data/Career/OfficeLife";
import Benefit from "../components/data/Career/Benefit";
import SocialSection from "../components/data/Career/SocialSection";

const Careeres = () => {
  return (
    <Box>
      <Hero />
      <Values />
      <OfficeLife/>
      <Benefit/>
      <SocialSection/>
    </Box>
  );
};

export default Careeres;
