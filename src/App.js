import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import { Code } from "@chakra-ui/react";

function App() {
  const [code, setdata] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/code")
      .then((res) => res.json())
      .then((data) => console.log("data", [setdata(data.body), data]))
      .catch((error) => console.error("Error:", error));
  }, []);
  
  return (
    <ChakraProvider>
      <div className="App">
        <pre>
          {code.map((line) => (
            <Code>{line}</Code>
          ))}
        </pre>
      </div>
    </ChakraProvider>
  );
}

export default App;
