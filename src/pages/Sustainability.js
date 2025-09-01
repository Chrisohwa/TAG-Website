import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/data/Sustainability/Hero'
import EarthPillars from '../components/data/Sustainability/EarthPillars'
import TestStory from '../components/data/About/TestStory'
import Strategy from '../components/data/Sustainability/Strategy'
import Stories from '../components/data/Sustainability/Stories'

const Sustainability = () => {
  return (
    <Box>
      <Hero/>
      <EarthPillars/>
      <Strategy/>
      <Stories/>
      {/* <TestStory/> */}
    </Box>
  )
}

export default Sustainability
