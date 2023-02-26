import { Flex, Stack } from "@chakra-ui/react";
import React from "react";

const HomeImg = () => {
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
            backgroundColor: "black",
          }}
        >
          <img
            src="shop1.png"
            alt=""
            style={{
              width: "85%",
              marginLeft: "7%",
              marginTop: "15%",
              cursor: "pointer",
            }}
          />
        </Stack>
        <Stack
          style={{
            width: "50%",
            height: "100%",
            backgroundImage:
              "url(https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/BIG2/BIG2_DESKTOP_2x_20230220111401.jpg?imwidth=1180&imdensit)",
            backgroundSize: "cover",
          }}
        ></Stack>
      </Flex>
    </div>
  );
};

export default HomeImg;
