import { Flex, Stack } from "@chakra-ui/react";
import React, { useContext } from "react";
import { BsHandbag } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HelperContext } from "../AuthContext.jsx/AuthContext";

const NavBottom = () => {
  let { cart } = useContext(HelperContext);

  return (
    <div>
      <Flex w={"80%"} margin={"auto"} mt={"20px"} style={{}}>
        <Stack
          style={{
            width: "90%",
            alignItems: "center",
            marginLeft: "5rem",
          }}
        >
          <Link to="/">
            <img
              src="logo2.png"
              alt="logo"
              style={{
                width: "300px",
              }}
            />
          </Link>
        </Stack>

        <Stack
          style={{
            width: "20%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Flex
            style={{
              alignItems: "center",
              fontFamily: "arial sans-serif",
              fontSize: "20px",
              gap: "5px",
            }}
          >
            <Link
              to="/cart"
              style={{
                textDecoration: "none",
                display: "flex",
              }}
            >
              <h1>SHOPPING BAG</h1>

              <BsHandbag
                style={{
                  fontSize: "35px",
                  marginTop: "-8px",
                  marginLeft: "5px",
                 
                  
                }}
              />
              <span
               style={{
                color:"red",
                marginTop:"-.8rem",
                fontSize:"1.2rem",
                fontFamily:"cursive",
                fontWeight:"bold"
               
               }}

              
              >{cart.length}</span>
            </Link>
          </Flex>
        </Stack>
      </Flex>
    </div>
  );
};

export default NavBottom;
