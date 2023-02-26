import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const HomeImg2 = () => {
  return (
    <div>
      <Flex
        w={{ base: "100%", md: "85%", lg: "80%" }}
        h={{ base: "20rem", md: "30rem", lg: "35rem" }}
        m="auto"
        mt={{ base: "0", md: "0", lg: "2rem" }}
        mb={{ base: "0", md: "0", lg: "2rem" }}
      >
        <Stack
          style={{
            width: "50%",
            height: "100%",
            backgroundImage:
              "url(https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/BIG3/BIG3_DESKTOP_2x_20230220111742.jpg?imwidth=1180&imdensity=1)",
            backgroundSize: "cover",
          }}
        ></Stack>
        <Stack
          style={{
            width: "50%",
            height: "100%",
            backgroundColor: "black",
            cursor: "pointer",
          }}
        >
          <img
            src="shop3.png"
            alt=""
            style={{
              width: "75%",
              marginLeft: "8%",
              marginTop: "20%",
            }}
          />
        </Stack>
      </Flex>
    </div>
  );
};

export default HomeImg2;
