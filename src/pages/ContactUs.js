import { Box } from '@chakra-ui/react'
import React from 'react'
import Hero from '../components/data/Contact/Hero'
import ContactInfo from '../components/data/Contact/ContactInfo'
import MessageForm from '../components/data/Contact/MessageForm'
import FindUs from '../components/data/Contact/FindUs'

const ContactUs = () => {
  return (
    <Box>
      <Hero/>
      <ContactInfo/>
      <MessageForm/>
      <FindUs/>
    </Box>
  )
}

export default ContactUs
