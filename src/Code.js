import React, { useState, useEffect } from "react";
import { Code, Box, Stack, Button, Heading, Center } from "@chakra-ui/react";
import { motion } from "framer-motion";
import "./index.css";
import { MenuItems } from "./MenuItems";

function ToggleCode() {
  const [code, setdata] = useState([]);
  const [everyword, seteveryword] = useState([]);
  const [editCode, setCodeToEdit] = useState(false);
  const [breakerCounter, setbcounter] = useState(0);
  const [fixerCounter, setfcounter] = useState(0);
  const toggleSwitch = () => setCodeToEdit(!editCode);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/")
      .then((res) => res.json())
      .then((data) => console.log("data", [setdata(data.body), data]))
      .catch((error) => console.error("Error:", error));
  }, []);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/everyword")
      .then((res) => res.json())
      .then((data) => console.log("data", [seteveryword(data.body), data]))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <div className="ToggleCode">
        <div className="switch" data-isOn={editCode} onClick={toggleSwitch}>
          <motion.div className="handle" layout transition={spring} />
        </div>
        <Box>
          {editCode ? (
            <>
              {everyword.map((word) => (
                <MenuItems name={word} />
              ))}
            </>
          ) : (
            <pre>
              {code.map((line) => (
                <Code
                  display="flex"
                  bg="hsl(0, 0%, 8%)"
                  color="lavender"
                  fontSize={25}
                >
                  {line}
                </Code>
              ))}
            </pre>
          )}
        </Box>
        <Box >
          <Box outline="dotted">
            <Center>
              <Heading color="white" pt={10} pb={10}>
                Scoreboard
              </Heading>
            </Center>
            <Center>
              <Stack direction="row" pb={10}>
                <Button colorScheme="red" size="lg">
                  Breaker {<br></br>} {breakerCounter}
                </Button>
                <Button colorScheme="blue" size="lg">
                  Fixer {<br></br>} {fixerCounter}
                </Button>
              </Stack>
            </Center>
          </Box>
        </Box>
      </div>
    </>
  );
}
const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30,
};
export default ToggleCode;
