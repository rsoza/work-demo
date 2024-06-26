import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import ToggleCode from "./Code";
import './index.css';

function App() {


  return (
    <ChakraProvider>
      <div className="App">
        <ToggleCode />
      </div>
    </ChakraProvider>
  );
}

export default App;
