import { Menu, MenuButton, MenuList, MenuItem, Button, Text } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

const MenuItems = (props) => {
  console.log("props", props);
  return (
    <pre>
      <Menu bg="white" color="black" >
        <MenuButton as={Button} bg="white" width={80} rightIcon={<ChevronDownIcon color="white" />}>
          <Text bg="white">
            {props.name}
            </Text>
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
    </pre>
  );
};
export { MenuItems };
