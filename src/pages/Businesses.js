import { Box } from '@chakra-ui/react'
import React, {useEffect}from 'react'
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
import Hero from '../components/data/Business/Hero';
import Focus from '../components/data/Business/Focus';
import Expertise from '../components/data/Business/Expertise';

const Businesses = () => {

   const location = useLocation();

   useEffect(() => {
     if (location?.state?.section) {
       scrollToSection(location.state.section);
     }
   }, [location]);

   const scrollToSection = (sectionId) => {
     scroller.scrollTo(sectionId, {
       duration: 800,
       delay: 0,
       smooth: "easeInOutQuart",
       offset: -150,
     });
   };
  return (
    <Box>
      <Hero/>
      <Focus/>
      <Expertise/>
    </Box>
  )
}

export default Businesses
