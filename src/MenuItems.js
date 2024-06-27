import React, {useState} from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Code,
} from "@chakra-ui/react";


const MenuItems = (props) => {
  const words = props.name.split(" ");
  const parts = words.filter((word) => word.trim().length > 0);
  const [p, setpart] = useState("");

  

  return (
    <pre>
      <Code bg="transparent">
        {parts.map((part, index, array) => (
          <Menu bg="transparent" _hover={{ bg: "grey" }} color="black">
            <MenuButton
              as={Button}
              bg="transparent"
              width="auto"
              _hover={{ bg: "grey" }}
            >
              <Text _hover={{ bg: "grey" }} color="white">
                {part}
              </Text>
            </MenuButton>
            <MenuList>
              <MenuItem onClick={() => array[index] = "foo"}>foo</MenuItem>
              <MenuItem onClick={() => array[index] = "foo"}>double</MenuItem>
              <MenuItem onClick={() => array[index] = "foo"}>while</MenuItem>
              <MenuItem onClick={() => array[index] = "foo"}>var</MenuItem>
              <MenuItem onClick={() => array[index] = "foo"}>if</MenuItem>
            </MenuList>
          </Menu>
        ))}
      </Code>
    </pre>
  );
};
export { MenuItems };
