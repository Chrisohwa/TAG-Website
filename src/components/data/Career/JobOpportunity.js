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
  Image,
} from "@chakra-ui/react";
import React from "react";
import Fields from "../../common/Fields";
import { Formik, Form } from "formik";
import { toaster } from "../../ui/toaster";
import { FiTrash2 } from "react-icons/fi";

const jobOpportunityValues = {
  name: "",
  bio: "",
  cv: null,
};

const JobOpportunity = () => {
  const handleSubmit = async (values, { resetForm }) => {
    try {
      console.log("Submitting job opportunity:", values);

      // 🔹 mock upload (replace with your API call)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      toaster.success({
        title: "Application Submitted",
        description: "Your CV has been uploaded successfully.",
      });

      resetForm();
    } catch (err) {
      toaster.error({
        title: "Upload failed",
        description: err?.message || "An error occurred",
      });
    }
  };

  return (
    <Box
      className="full_width"
      minH={{ base: "40vh", md: "60vh", xl: "100vh" }}
      pt={{ base: 10, md: 20, xl: "100px" }}
      pb={{ base: 10, md: 20, xl: "50px" }}
    >
      <Container maxW="1350px" px={{ base: "10px", md: "15px", xl: "0px" }}>
        <VStack gap="48px">
          {/* Header */}
          <Flex flexDir="column" justify="center" align="center" gap={4}>
            <Heading
              fontWeight={700}
              fontSize={{ base: "28px", md: "32px", xl: "36px" }}
              lineHeight="40px"
              color="#111827"
            >
              Job Opportunity
            </Heading>
            <Text
              textAlign="center"
              fontWeight={400}
              fontSize="18px"
              lineHeight="28px"
              maxW={{ xl: "650px" }}
              color="#4B5563"
            >
              We're always looking out for new talent. Please send your name, a
              short bio, and upload your CV.
            </Text>
          </Flex>

          {/* Form */}
          <Box
            maxW="750px"
            w="full"
            mx="auto"
            p={{ base: 4, md: 8 }}
            bg="#fff"
            borderRadius="16px"
            boxShadow="md"
          >
            <Formik
              initialValues={jobOpportunityValues}
              onSubmit={handleSubmit}
              validateOnMount
            >
              {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                setFieldValue,
                isSubmitting,
              }) => (
                <Form>
                  <Grid templateColumns="1fr" gap={6}>
                    {/* Name */}
                    <GridItem>
                      <Fields
                        title="Name"
                        placeholder="Your company name"
                        inputFeild
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.name && errors.name}
                      />
                    </GridItem>

                    {/* Short Bio */}
                    <GridItem>
                      <Fields
                        title="Short Bio *"
                        placeholder="Please describe your inquiry in detail..."
                        textarea
                        required
                        charLimit={500}
                        name="bio"
                        value={values.bio}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.bio && errors.bio}
                      />
                    </GridItem>

                    {/* CV Upload */}
                    <GridItem>
                      <Text fontSize="16px" fontWeight="500" mb={2}>
                        CV Upload
                      </Text>
                      <Flex
                        fontSize="14px"
                        mt="30px"
                        fontWeight={400}
                        textAlign="left"
                        gap="15px"
                        cursor="pointer"
                        color="#5D6B82"
                        onClick={() =>
                          document.getElementById("cvUploadInput").click()
                        }
                      >
                        <Box>
                          <Image src="/images/career/upload-cloud.png" />
                        </Box>
                        <Text>Click to upload</Text>
                        <input
                          id="cvUploadInput"
                          type="file"
                          accept=".pdf,.doc,.docx"
                          style={{ display: "none" }}
                          onChange={(event) =>
                            setFieldValue("cv", event.currentTarget.files[0])
                          }
                        />
                      </Flex>

                      {/* Show selected file with delete option */}
                      {values.cv && (
                        <Flex
                          mt="30px"
                          align="center"
                          justify="space-between"
                          p={3}
                          border="1px solid #E2E8F0"
                          borderRadius="8px"
                          bg="gray.50"
                        >
                          <Text fontSize="sm" color="gray.700">
                            {values.cv.name}
                          </Text>
                          <Box
                            as={FiTrash2}
                            cursor="pointer"
                            fontSize="18px"
                            color="red.500"
                            onClick={() => setFieldValue("cv", null)}
                          />
                        </Flex>
                      )}
                    </GridItem>
                  </Grid>

                  {/* Submit Button */}
                  <Box textAlign="center" mt={8}>
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
                    >
                      Upload CV
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

export default JobOpportunity;
