import { Search2Icon } from "@chakra-ui/icons";
import {
  Container,
  Flex,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  useColorModeValue,
  useToast,
  VStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect } from "react";
import SortComp from "./Short";
import { BsFillCartCheckFill } from "react-icons/bs";
import SideBar from "./Siderbar";
import { HelperContext } from "../../AuthContext.jsx/AuthContext";
import Pagination from "./Pagination";

const Products = () => {
  const { state, dispatch,setCart ,cart} = React.useContext(HelperContext);

  const [total, setTotal] = React.useState(0);

  let [limit, setLimit] = React.useState(20);
  let [page, setPage] = React.useState(1);

  let [Search, setSearch] = React.useState("");

  async function fetchProduct(Search, limit = 20, page = 1) {
    let res = await axios.get(
      `https://nasal-berry-cornet.glitch.me/mensproduct?_page=${page}&_limit=${limit}&q=${Search}`
    );
    const data = await res.data;
    setTotal(Math.ceil(res.headers["x-total-count"] / limit));
    dispatch({ type: "SUCCESS", payload: data });
    
  }

  const toast = useToast();

  useEffect(() => {
    fetchProduct(Search, limit, page);
  }, [Search, limit, page]);

  function addToCart(item) {
    const newCart = [...cart, item];
    setCart(newCart);
    toast({
      title: "Item added to cart.",
      description: "We've added item to your cart.",
      status: "success",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <Container maxW="container.xl" centerContent>
      <HStack
        mt={"2rem"}
        w={"100%"}
        gap={"1rem"}
        display={"flex"}
        alignItems={"flex-start"}
      >
        <Stack w={"22%"}>
          <VStack h="10rem" mb="8">
            <HStack w={"100%"}>
              <FormLabel>
                <Text fontWeight={"bold"} mb="1">
                  Keyword
                </Text>
                <Input
                  placeholder="Search Product"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </FormLabel>
              <Search2Icon
                bg={useColorModeValue("gray.100", "black")}
                color={useColorModeValue("black", "white")}
                w={10}
                h={10}
                p={2}
                borderRadius={"10px"}
                position={"relative"}
                top={2}
                right={2}
              />
            </HStack>
            <HStack w={"100%"}>
              <FormLabel>
                <Text fontWeight={"bold"} mb="1">
                  Sort by
                </Text>
                <SortComp />
              </FormLabel>
            </HStack>
          </VStack>
          <SideBar />
        </Stack>

        <VStack w={"70%"}>
          <Flex
            w={"140%"}
            borderRadius={"10px"}
            p={"1rem"}
            alignItems={"center"}
            justifyContent={"flex-end"}
          >
            <Pagination
              total={total}
              page={page}
              setPage={setPage}
              setLimit={setLimit}
            />
          </Flex>

          <div
            style={{
              height: "auto",
              display: "grid",
              gridTemplateColumns: "repeat(4,1fr)",
              gridGap: "10px",
              width: "120%",
              padding: "5px",
              margin: "auto",
              marginBottom: "5rem",
            }}
          >
            {state.data.map((item) => {
              return (
                <div
                  style={{
                    boxShadow: "0 0 10px 0 rgba(0,0,0,0.2)",
                    // border: "4px solid black",

                    // boxShadow:
                    // "box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
                  }}
                  key={item.id}
                >
                  <div
                    style={{
                      padding: "5px",
                    }}
                    // hover effect
                    onMouseEnter={(e) => {
                      e.target.style.transform = "scale(.9)";
                      e.target.style.transition = "all 0.5s ease-in-out";
                      e.target.style.opacity = "0.8";
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.transform = "scale(1)";
                      e.target.style.transition = "all 0.5s ease-in-out";
                      e.target.style.opacity = "1";
                    }}
                  >
                    <img src={item.img} alt="i" width={"100%"} />
                  </div>
                  <h2
                    style={{
                      padding: "3px",
                    }}
                  >
                    {item.title}
                  </h2>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "3px",
                      marginBottom: "3px",
                    }}
                  >
                    <h1
                      style={{
                        borderRadius: "5px",
                        marginLeft: "3px",
                        backgroundColor: "black",
                        fontFamily: "sans-serif",
                        color: "white",
                        fontSize: "1rem",
                        marginBottom: "1px",
                        padding: "5px",
                        paddingTop: "12px",
                        paddingLeft: "-8px",
                      }}
                    >
                      € {item.price}
                    </h1>
                    <button
                      disabled={cart.find((i) => i.id === item.id)}
                      onClick={() => addToCart(item)}
                      style={{
                        borderRadius: "5px",
                        padding: "6px",
                        backgroundColor: "red",
                        opacity: "0.7",
                        color: "white",
                        fontWeight: "bold",
                        fontSize: "1.9rem",
                        marginRight: "15px",
                        marginBottom: "4px",
                      }}
                    >
                      <BsFillCartCheckFill></BsFillCartCheckFill>
                    </button>
                  </div>
                  {/* <h1
                  style={{
                    borderRadius: "5px",
                    marginLeft: "3px",
                    width: "38%",
                    padding: "5px",
                    backgroundColor: "black",
                    marginTop: "3px",
                    color: "white",
                    opacity: "0.7",
                    marginBottom: "1px",
                  }}
                >
                  Discount: {item.off}
                </h1> */}
                </div>
              );
            })}
          </div>
        </VStack>
      </HStack>
    </Container>
  );
};

export default Products;
