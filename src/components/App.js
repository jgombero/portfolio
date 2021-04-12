import React from "react";
import { PortfolioProvider } from "../context/context";

const App = () => {

  return(
    <PortfolioProvider value={} >
      <h1>This is my App.</h1>
    </PortfolioProvider>
  );
}

export default App;