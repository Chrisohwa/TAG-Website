import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/data/About/Hero'
import OurPhilosophy from '../components/data/About/OurPhilosophy'
import OurTeam from '../components/data/About/OurTeam'
import OurStory from '../components/data/About/OurStory'
import TestStory from '../components/data/About/TestStory'

const AboutUs = () => {
  return (
    <Box>
      <Hero/>
      {/* <TestStory/> */}
      <OurPhilosophy/>
      <OurStory/>
      <OurTeam/>
    </Box>
  )
}

export default AboutUs