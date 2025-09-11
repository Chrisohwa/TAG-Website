import React from "react";
import Pages from "./routes";
import ScriptLoader from "./utils/ScriptLoader";

const App = () => {
  return (
    <>
      <ScriptLoader />
      <Pages />
    </>
  );
};

export default App;
