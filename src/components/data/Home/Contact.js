import {
  Flex,
  Heading,
  Text,
  Box,
  Checkbox,
  Button,
  Container,
  Link,
  HStack,
} from "@chakra-ui/react";
import Fields from "../../common/Fields";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Formik, Form } from "formik";
import { messSchema, messValue } from "../../../utils/validation";
import { useSendQuickMessage } from "../../../services/query";
import {toaster} from "../../ui/toaster";

const Contact = () => {
  const [isChecked, setIsChecked] = useState(false);
  

  const { mutate, isLoading } = useSendQuickMessage({
    onSuccess: (res) => {
      // successToast(res?.message);
      toaster.success({
              title: "Successful",
              description: res?.message,
            });
      resetForm();
    },
    onError: (err) => {
      toaster.error({
              title: err?.message,
              description: err?.response?.data?.message,
            });
      // errorToast(
      //   err?.response?.data?.message || err?.message || "An Error occurred"
      // );
    },
  });
  const handleSubmit = (values) => {
    console.log("Form submitted", values);
    mutate(values);
  };

  return (
    <Box
      className="full_width"
      minH={{ base: "70vh", md: "70vh", xl: "100vh" }}
      bgGradient="to-b"
      gradientFrom={{ base: "#fff ", md: "#fff 5%", xl: "#fff" }}
      gradientTo={{
        base: "#002e5b 5%",
        md: "#002e5b 20%",
        xl: "#002e5b 0%",
      }}
      py={{ base: "0px", md: "50px", xl: "40px" }}
      mt={{ base: "-5px", md: "-5px", xl: "0px" }}
      mb={{ base: "-50px", md: "-50px", xl: "0px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <Flex
          align={{ base: "flex-start", md: "center", xl: "center" }}
          justify={{
            base: "flex-start",
            md: "space-between",
            xl: "flex-start",
          }}
          flexDir={{ base: "column", md: "row" }}
          gap={{ base: "30px", md: "", xl: "350px" }}
        >
          {/* left */}
          <Flex
            direction="column"
            align={{ base: "flex-start", md: "flex-start", xl: "flex-start" }}
            justify={{ base: "flex-start", md: "center", xl: "flex-start" }}
            mt={{ base: "40px", md: "", xl: "" }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Text
                color="#FFBD59"
                fontSize={{ base: "20px", md: "20px", xl: "20px" }}
                fontWeight={700}
                textAlign={{ base: "left", md: "left", xl: "left" }}
                lineHeight={{ base: "100%", md: "64px", xl: "64px" }}
                mb={{ base: "20px", md: "", xl: "" }}
              >
                Contact Us
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Heading
                color="#fff"
                fontWeight={600}
                fontSize={{ base: "24px", md: "26px", xl: "32px" }}
                textAlign={{ base: "left", md: "left", xl: "left" }}
                lineHeight={{ base: "100%", md: "64px", xl: "64px" }}
                mb={{ base: "20px", md: "", xl: "" }}
              >
                Let&apos;s Create the Future Together
              </Heading>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Text
                fontWeight={500}
                fontSize={{ base: "16px", md: "20px", xl: "20px" }}
                color="#fff"
                maxW={{ base: "100%", md: "380px", xl: "545px" }}
                textAlign={{ base: "left", md: "left", xl: "left" }}
                mb={4}
              >
                Whether you&apos;re looking to collaborate, learn more about our
                initiatives, or explore career opportunities, we&apos;d love to
                hear from you.
              </Text>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ x: [-60, 0], opacity: 1 }}
              transition={{ duration: 1.1 }}
            >
              <Flex
                direction="column"
                align={{
                  base: "flex-start",
                  md: "flex-start",
                  xl: "flex-start",
                }}
                justify={{
                  base: "flex-start",
                  md: "flex-start",
                  xl: "flex-start",
                }}
                as="ul"
                color="#fff"
                w="100%"
                mx={{ base: "0", md: "0", xl: "0" }}
              >
                <Box
                  as="li"
                  listStyle="disc"
                  ml={{ base: "0", md: "17px", xl: "17px" }}
                  fontSize={{ base: "16px", md: "20px", xl: "20px" }}
                  textAlign={{ base: "left", md: "left", xl: "left" }}
                  lineHeight="34px"
                >
                  <a href="mailto:info@transalliancegroup.com">
                    Email: info@transalliancegroup.com
                  </a>
                </Box>

                <Box
                  as="li"
                  listStyle="disc"
                  ml={{ base: "0", md: "17px", xl: "17px" }}
                  fontSize={{ base: "16px", md: "20px", xl: "20px" }}
                  textAlign={{ base: "left", md: "left", xl: "left" }}
                  lineHeight="34px"
                >
                  <a href="tel:+2348055058367">Phone: +234 805 505 8367</a>
                </Box>

                <Box
                  as="li"
                  listStyle="disc"
                  ml={{ base: "0", md: "17px", xl: "17px" }}
                  fontSize={{ base: "16px", md: "20px", xl: "20px" }}
                  textAlign={{ base: "left", md: "left", xl: "left" }}
                  lineHeight="34px"
                >
                  Address: 200c Muri Okunola Street VI Lagos.
                </Box>
              </Flex>
            </motion.div>
          </Flex>

          {/* Right Form */}
          <Box
            bg="white"
            borderRadius="20px"
            p="50px"
            w="full"
            boxShadow="lg"
            maxW="500px"
            flexBasis="50%"
            mb="50px"
          >
            <Heading size="3xl" fontWeight="400" textAlign="center" mb={6}>
              Send Us Message
            </Heading>
            <Formik
              initialValues={messValue}
              onSubmit={handleSubmit}
              validationSchema={messSchema}
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
                  <Fields
                    title="First Name"
                    placeholder="Your First Name"
                    name="firstName"
                    type="text"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.firstName && errors.firstName}
                  />
                  <Fields
                    title="Email"
                    placeholder="Your Email Address"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={touched.email && errors.email}
                  />
                  <Fields
                    title="Enquiries"
                    placeholder="Note"
                    textarea
                    value={values.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    name="message"
                    error={touched.message && errors.message}
                  />

                  <Checkbox.Root
                    colorPalette="blue"
                    name="acceptTerms"
                    isChecked={values.acceptTerms}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    variant="outline"
                  >
                    <Checkbox.HiddenInput />
                    <Checkbox.Control />
                    <Checkbox.Label>
                      I hereby accept the{" "}
                      <Link href="/about-us" color="blue.600">
                        T&amp;C
                      </Link>{" "}
                      of TAG
                    </Checkbox.Label>
                  </Checkbox.Root>
                  {touched.acceptTerms && errors.acceptTerms && (
                    <Text color="red" fontSize="sm" mt={1}>
                      {errors.acceptTerms}
                    </Text>
                  )}

                  <Button
                    type="submit"
                    bg="#003366"
                    color="white"
                    w="100%"
                    h="48px"
                    borderRadius="12px"
                    fontWeight="600"
                    _hover={{ bg: "#002244" }}
                    mt="15px"
                    loading={isSubmitting || isLoading}
                    loadingText="Sending..."
                    spinnerPlacement="end"
                    disabled={!isValid || !dirty}
                  >
                    Send
                  </Button>
                </Form>
              )}
            </Formik>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contact;
