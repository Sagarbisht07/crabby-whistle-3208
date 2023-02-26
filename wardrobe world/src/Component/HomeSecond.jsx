import { Flex, Stack, VStack } from "@chakra-ui/react";
import React from "react";

const HomeSecond = () => {
  return (
    <div>
      <Flex
        style={{
          width: "85%",
          margin: "auto",
          marginBottom: "20px",
          height: "35rem",
        }}
      >
        <Stack
          style={{
            width: "100%",
            height: "100%",
            backgroundImage:
              "url(https://img.mytheresa.com/media/static/raw/cms/l/MW_HP_2023_CW08/BIG1/BIG1_DESKTOP_2x_20230220110628.jpg?imwidth=1180&imdensity=1)",
          }}
        >
          <VStack
            style={{
              width: "100%",
              height: "100%",
              justifyContent: "center",
            }}
          >
            <p
              style={{
                fontSize: "16px",
                cursor: "pointer",
                color: "#fff",
                textAlign: "center",
                marginTop: "0",
                fontFamily:
                  "Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".8px",
                marginBottom: "0",
              }}
            >
              _New wardrobe cornerstones
            </p>
            <h1
              style={{
                fontSize: "54px",
                cursor: "pointer",
                color: "#fff",
                textAlign: "center",
                marginTop: "0",
                fontFamily:
                  "Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".8px",
                marginBottom: "0",
              }}
            >
              Cruise 2023
            </h1>

            <a
              style={{
                fontSize: "12px",
                cursor: "pointer",
                color: "#fff",
                textAlign: "center",
                marginTop: "0",
                fontFamily:
                  "Futura-Medium,Century Gothic,Gill Sans,Helvetica,Arial,sans-serif",
                textTransform: "uppercase",
                letterSpacing: ".8px",
                marginBottom: "0",
                backgroundColor: "#fff",
                border: "1px solid #757575",
                padding: "7px 20px",
                textDecoration: "none",
                display: "inline-block",
                width: "auto",
                transition:
                  "background-color .4s ease-out,border-color .4s ease-out,color .4s ease-out",
                boxSizing: "inherit",
                textAlign: "center",
                color: "#000",
                borderColor: "#757575",
              }}
              href="https://www.mytheresa.com/int_en/men/new-season.html?box=1"
            
              
            >
              SHOP NOW {"> "}
            </a>
          </VStack>
        </Stack>
      </Flex>

    </div>
  );
};

export default HomeSecond;
