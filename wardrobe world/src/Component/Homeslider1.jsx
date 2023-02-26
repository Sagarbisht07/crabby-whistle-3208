import React from "react";
import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Image,
  Center,
  Heading,
  Stack,
} from "@chakra-ui/react";

import Swipers from "./Swiper";

const Slider1 = () => {
  return (
    <div>
      <Box p="10">
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "2px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
          }}
        >
          <Center
            border={"2px solid"}
            p={2}
            borderColor={useColorModeValue("gray.200", "gray.700")}
            w={"300px"}
          >
            <Text
              style={{
                fontSize: "26px",
                cursor: "pointer",
                color: "#000",
                textAlign: "center",
                marginTop: "0",
                fontFamily:
                  "Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".8px",
                marginBottom: "0",
              }}
            >
              New Arrivals
            </Text>
          </Center>
        </Flex>
        <Stack>
          <Swipers />
        </Stack>
      </Box>
    </div>
  );
};

export default Slider1;
