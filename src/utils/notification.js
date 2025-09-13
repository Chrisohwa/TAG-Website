import { Box, Flex, Heading, Text, Toaster, Icon } from "@chakra-ui/react";
import {
  FiCheckCircle,
  FiAlertTriangle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";

// Base Alert
const BaseAlert = ({ color, icon, title, details }) => {
  return (
    <Flex
      align="center"
      gap={3}
      p={4}
      borderRadius="10px"
      border="1px solid #E5E7EB"
      boxShadow="0px 4px 12px rgba(0,0,0,0.08)"
      bg="#fff"
      w="350px"
      fontFamily="Open Sans"
    >
      {/* Icon */}
      <Flex
        w="40px"
        h="40px"
        align="center"
        justify="center"
        borderRadius="full"
        bg={`${color}.100`}
        flexShrink={0}
      >
        <Icon as={icon} boxSize={6} color={`${color}.600`} />
      </Flex>

      {/* Text */}
      <Box>
        <Heading
          fontSize="16px"
          lineHeight="120%"
          color={`${color}.700`}
          fontWeight="600"
        >
          {title}
        </Heading>
        {details && (
          <Text mt={1} fontSize="14px" color="gray.600">
            {details}
          </Text>
        )}
      </Box>
    </Flex>
  );
};

// Variants
export const SuccessAlert = (props) => (
  <BaseAlert icon={FiCheckCircle} color="green" {...props} />
);

export const ErrorAlert = (props) => (
  <BaseAlert icon={FiXCircle} color="red" {...props} />
);

export const WarningAlert = (props) => (
  <BaseAlert icon={FiAlertTriangle} color="orange" {...props} />
);

export const InfoAlert = (props) => (
  <BaseAlert icon={FiInfo} color="blue" {...props} />
);

// Hook
export const useCustomToast = () => {
  const toast = Toaster();

  const successToast = (msg = "Operation successful", pos = "top") => {
    const id = "success";
    if (!toast.isActive(id)) {
      toast({
        id,
        position: pos,
        isClosable: true,
        duration: 4000,
        render: () => <SuccessAlert title="Success" details={msg} />,
      });
    }
  };

  const errorToast = (msg = "Something went wrong", pos = "top") => {
    const id = "error";
    if (!toast.isActive(id)) {
      toast({
        id,
        position: pos,
        isClosable: true,
        duration: 4000,
        render: () => <ErrorAlert title="Error" details={msg} />,
      });
    }
  };

  const warningToast = (msg = "Be careful!", pos = "top") => {
    const id = "warning";
    if (!toast.isActive(id)) {
      toast({
        id,
        position: pos,
        isClosable: true,
        duration: 4000,
        render: () => <WarningAlert title="Warning" details={msg} />,
      });
    }
  };

  const infoToast = (msg = "FYI", pos = "top") => {
    const id = "info";
    if (!toast.isActive(id)) {
      toast({
        id,
        position: pos,
        isClosable: true,
        duration: 4000,
        render: () => <InfoAlert title="Info" details={msg} />,
      });
    }
  };

  return { successToast, errorToast, warningToast, infoToast };
};
