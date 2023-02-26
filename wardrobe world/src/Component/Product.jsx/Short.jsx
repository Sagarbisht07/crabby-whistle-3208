import {
    Button,
    Menu,
    MenuButton,
    MenuDivider,
    MenuItemOption,
    MenuList,
    MenuOptionGroup,
    useColorModeValue,
  } from "@chakra-ui/react";
  import React from "react";
import { HelperContext } from "../../AuthContext.jsx/AuthContext";

  
  const SortComp = () => {
    const { state,dispatch } = React.useContext(HelperContext);
 
    let data= state.data

    const handleChange = (e) => {
        console.log(e);

        console.log(data);
       
        if(e=="asc"){
          let sortedData = data.sort((a, b) => a.price - b.price);
            dispatch({ type: "SUCCESS", payload: sortedData });

        }else{
            let sortedData = data.sort((a, b) => b.price - a.price);
            dispatch({ type: "SUCCESS", payload: sortedData });
        }



    };
    return (
      <div>
        <Menu closeOnSelect={false} w="100%">
          <MenuButton as={Button}>Select your options</MenuButton>
          <MenuList
            minWidth="240px"
            // bg={useColorModeValue("gray.100", "black")}
          >
            <MenuOptionGroup
              defaultValue="asc"
              title="Order by price"
              type="radio"
              name="price"
              onChange={handleChange}
            >
              <MenuItemOption value="asc">Price : Low To High</MenuItemOption>
              <MenuItemOption value="desc">Price : High To Low</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </div>
    );
  };
  
  export default SortComp;
  