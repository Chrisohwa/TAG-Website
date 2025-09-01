import { Text } from "@chakra-ui/react";

export const MdText = ({
  children,
  fontSize = { base: "16px", md: "24px" },
  lineHeight = { base: "25px", md: "32px" },
  ...props
}) => {
  return (
    <Text fontSize={fontSize} lineHeight={lineHeight} {...props}>
      {children}
    </Text>
  );
};

export const SmText = ({
  children,
  fontSize = { base: "14px", md: "16px" },
  lineHeight = { base: "24px", md: "32px" },
  ...props
}) => {
  return (
    <Text pl="12px" fontSize={fontSize} lineHeight={lineHeight} {...props}>
      {children}
    </Text>
  );
};

export const MdsText = ({
  children,
  fontSize = { base: "28px", md: "42px" },
  lineHeight = { base: "35px", md: "55px" },
  ...props
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={700}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Text>
  );
};

export const OrangeText = ({
  children,
  fontSize = { base: "28px", md: "40px" },
  lineHeight = { base: "35px", md: "79px" },
  ...props
}) => {
  return (
    <Text
      color="#FFB60C"
      fontSize={fontSize}
      fontWeight={500}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Text>
  );
};

export const LgText = ({
  children,
  fontSize = { base: "30px", md: "48px" },
  lineHeight = { base: "40px", md: "65px" },
  ...props
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={700}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Text>
  );
};

export const XText = ({
  children,
  fontSize = { base: "30px", md: "54px" },
  lineHeight = { base: "40px", md: "59px" },
  ...props
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={700}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Text>
  );
};

export const XlText = ({
  children,
  fontSize = { base: "30px", md: "66px" },
  lineHeight = { base: "40px", md: "79px" },
  ...props
}) => {
  return (
    <Text
      fontSize={fontSize}
      fontWeight={700}
      lineHeight={lineHeight}
      {...props}
    >
      {children}
    </Text>
  );
};
