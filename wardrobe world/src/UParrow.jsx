import React from "react";
import { Button, VStack, Text, useColorModeValue } from "@chakra-ui/react";
import { FaArrowAltCircleUp } from "react-icons/fa";
export function UParrow() {
  return (
    <Button
      position="fixed"
      bottom="50px"
      right="0"
      zIndex="100"
      w="40px"
      h="40px"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      bg={useColorModeValue("rgb(177, 177, 177)", "rgb(177, 177, 177)")}
      _hover={{
        bg: useColorModeValue("rgb(177, 177, 177)", "rgb(177, 177, 177)"),
      }}
    >
      <VStack spacing={0}>
        <FaArrowAltCircleUp fontSize={30}
        color={useColorModeValue("rgb(255, 255, 255)", "rgb(255, 255, 255)")}
        />
       
      </VStack>
    </Button>
  );
}
