import React from "react";
import Pages from "./routes";
import ScriptLoader from "./utils/ScriptLoader";
import { Toaster } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <ScriptLoader />
      <Pages />
      {/* <Toaster /> */}
    </>
  );
};

export default App;


