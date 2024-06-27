import React from "react";
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

  const handleOnChange = (index) => {
    console.log("index ", index);
  }

  return (
    <pre>
      <Code bg="transparent" p={0}>
        {words.map((part, index, array) => (
          part === "" ? "  "          
            :
              <Menu bg="transparent" _hover={{ bg: "grey" }} color="black" p={0}>
            <MenuButton
              as={Button}
              bg="transparent"
              width="auto"
              _hover={{ bg: "grey" }}
              p={0}
              >
              <Text fontSize={18} _hover={{ bg: "grey" }} color="white">
                {part}
              </Text>
            </MenuButton>
            <MenuList>
              {/[ `!(@$%^&*_+\-=[\]{};':\\)|,/?~]/.test(part) ?
              (
                <>
              <MenuItem onChange={handleOnChange}>;</MenuItem>
              <MenuItem>"</MenuItem>
              <MenuItem>-</MenuItem>
              <MenuItem>+</MenuItem>
              <MenuItem>/</MenuItem>
              </>
              )
              :
              (<>
              <MenuItem>foo</MenuItem>
              <MenuItem>double</MenuItem>
              <MenuItem>while</MenuItem>
              <MenuItem>var</MenuItem>
              <MenuItem>if</MenuItem>
              </>)
              }
            </MenuList>
            </Menu>
        ))}
      </Code>
    </pre>
  );
};
export { MenuItems };
