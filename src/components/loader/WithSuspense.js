import React, { Suspense } from "react";
import { Flex, ProgressCircle } from "@chakra-ui/react";
import { color } from "framer-motion";

const Loader = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%", height: "100vh" }}
      h="100vh"
      bgGradient="to-b"
      gradientFrom="#e7ebef"
      gradientTo="#002a53"
      className="full_width"
    >
      <ProgressCircle.Root value={null} colorPalette="fg">
        <ProgressCircle.Circle>
          <ProgressCircle.Track />
          <ProgressCircle.Range />
        </ProgressCircle.Circle>
      </ProgressCircle.Root>
    </Flex>
  );
};
const WithSuspense = (Component) => (props) => (
  <Suspense fallback={<Loader />} >
    <Component {...props} />
  </Suspense>
);

export default WithSuspense;
