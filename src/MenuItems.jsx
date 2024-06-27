import React from "react";
import { Select, Stack, Code } from "@chakra-ui/react";

const MenuItems = (props) => {
  const words = props.name.split(" ");

  return (
    <pre>
      <Code bg="transparent" p={0} fontSize={25}>
        <Stack direction="row">
          {words.map((part, index, array) =>
            part === "" ? (
              "  "
            ) : (
              <Select
                fontSize={25}
                variant="flushed"
                placeholder={part}
                bg="transparent"
                _hover={{ bg: "grey" }}
                color="white"
                border="transparent"
                height="auto"
                icon="transparent"
                width="auto"
                sx={{
                  option: {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "select:hover option": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "select:focus option": {
                    backgroundColor: "black",
                    color: "white",
                  },
                  "select:active option": {
                    backgroundColor: "black",
                    color: "white",
                  },
                }}
              >
                {/[ `!(@$%^&*_+\-=[\]{};':\\)|,/?~]/.test(part) ? (
                  <>
                    <option value=";">
                      ;
                    </option>
                    <option value='"'>"</option>
                    <option value="-">-</option>
                  </>
                ) : (
                  <>
                    <option value="foo">foo</option>
                    <option value="bool">bool</option>
                    <option value="while">while</option>
                  </>
                )}
              </Select>
            )
          )}
        </Stack>
      </Code>
    </pre>
  );
};
export { MenuItems };
