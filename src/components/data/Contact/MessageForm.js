import {
  Box,
  Button,
  Grid,
  GridItem,
  Text,
  Container,
  VStack,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React from "react";
import Fields from "../../common/Fields";
import { Formik, Form } from "formik";
import { messageSchema, messageValue1 } from "../../../utils/validation";

const MessageForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form submitted", values);
    resetForm();
  };

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh", xl: "100vh" }}
      pt={{ base: 10, md: 20, xl: "200px" }}
      pb={{ base: "", md: "", xl: "50px" }}
      mt={{ base: "", md: "", xl: "-200px" }}
    >
      <Container
        maxW="1350px"
        px={{ base: "10px", md: "15px", xl: "0px" }}
        id="send-us-a-message"
      >
        <VStack gap="64px">
          <Flex
            flexDir="column"
            justify="center"
            align="center"
            gap={4}
            id="contact-form"
          >
            <Heading
              fontWeight={700}
              fontSize={{ base: "28px", md: "32px", xl: "36px" }}
              lineHeight="40px"
              color="#111827"
            >
              Send Us a Message
            </Heading>
            <Text
              textAlign="center"
              fontWeight={400}
              fontSize="20px"
              lineHeight="28px"
              maxW={{ xl: "754px" }}
              color="#4B5563"
            >
              Fill out the form below and we'll get back to you as soon as
              possible.
            </Text>
          </Flex>

          <Box
            maxW="900px"
            w={{ base: "full", md: "70%", xl: "70%" }}
            mx="auto"
            p={{ base: 4, md: 8 }}
            bg="#fff"
            borderRadius="16px"
            boxShadow="md"
          >
            <Formik
              initialValues={messageValue1}
              validationSchema={messageSchema}
              onSubmit={handleSubmit}
              validateOnMount
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                isSubmitting,
                isValid,
                dirty,
              }) => (
                <Form>
                  <Grid
                    templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
                    gap={6}
                  >
                    {/* First Name */}
                    <GridItem>
                      <Fields
                        title="First Name"
                        placeholder="Enter your first name"
                        required
                        inputFeild
                        type="text"
                        name="firstName"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.firstName && errors.firstName}
                      />
                    </GridItem>

                    {/* Last Name */}
                    <GridItem>
                      <Fields
                        title="Last Name"
                        placeholder="Enter your last name"
                        required
                        inputFeild
                        type="text"
                        name="lastName"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.lastName && errors.lastName}
                      />
                    </GridItem>

                    {/* Email Address */}
                    <GridItem>
                      <Fields
                        title="Email Address"
                        placeholder="your.email@example.com"
                        required
                        inputFeild
                        type="email"
                        name="email"
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && errors.email}
                      />
                    </GridItem>

                    {/* Phone Number */}
                    <GridItem>
                      <Fields
                        title="Phone Number"
                        placeholder="+1 (555) 123-4567"
                        inputFeild
                        type="tel"
                        name="phoneNumber"
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.phoneNumber && errors.phoneNumber}
                      />
                    </GridItem>

                    {/* Company */}
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Fields
                        title="Company"
                        placeholder="Your company name"
                        inputFeild
                        type="text"
                        name="company"
                        value={values.company}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.company && errors.company}
                      />
                    </GridItem>

                    {/* Message */}
                    <GridItem colSpan={{ base: 1, md: 2 }}>
                      <Fields
                        title="Message"
                        placeholder="Please describe your inquiry in detail..."
                        textarea
                        required
                        charLimit={500}
                        name="message"
                        value={values.message}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.message && errors.message}
                      />
                    </GridItem>
                  </Grid>

                  {/* Submit Button */}
                  <Box textAlign="center" mt={6}>
                    <Button
                      type="submit"
                      bg="#2563eb"
                      color="white"
                      w="183px"
                      h="52px"
                      px={8}
                      py={6}
                      borderRadius="8px"
                      _hover={{ bg: "#1d4ed8" }}
                      isLoading={isSubmitting}
                      loadingText="Sending..."
                      disabled={!isValid || !dirty}
                    >
                      Send Message
                    </Button>
                  </Box>
                </Form>
              )}
            </Formik>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
};

export default MessageForm;
