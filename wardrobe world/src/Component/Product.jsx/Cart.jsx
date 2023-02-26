import { DeleteIcon, ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Container,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Heading,
  Text,
  Button,
  Image,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  useToast,
} from "@chakra-ui/react";

import React from "react";
import { NavLink } from "react-router-dom";
import { HelperContext } from "../../AuthContext.jsx/AuthContext";


const Cart = () => {
  const toast = useToast();
  const {setCart ,cart} = React.useContext(HelperContext);
  let total = cart.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);



  function handleDelete(id) {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    toast({
      title: "Item removed from cart.",
      description: "We've removed item from your cart.",
      status: "error",
      duration: 2000,
      isClosable: true,
    });
  }

  return (
    <div>
      <Container
        // border={"1px solid black"}
        maxW="container.xl"
        centerContent
        mt="5rem"
        mb={"5rem"}
        w="100%"
        gap="1rem"
      >
        <Heading>Shopping Cart Total €{total}</Heading>
        <SimpleGrid
          w="100%"
          // border={"1px solid black"}

          spacing={4}
          templateColumns="repeat(auto-fill, minmax(250px, 1fr))"
        >
          {cart &&
            cart.map((item) => {
              return (
                <Card key={item.id} boxShadow="lg">
                  <CardHeader>
                    <Image src={item.img} alt={item.name} />
                  </CardHeader>
                  <CardBody>
                    <Heading size={"sm"}>{item.name}</Heading>
                    <Stat>
                      <StatLabel>Price</StatLabel>
                      <StatNumber>€{item.price}</StatNumber>
                      <Text color={"red.700"} as="s">
                        ₹{item.price + 0}
                      </Text>
                      <Text color={"red.700"}>{item.off}</Text>
                    </Stat>
                  </CardBody>
                  <CardFooter>
                    <NavLink to="/buy">
                      <Button mr={"1.5rem"} colorScheme="red">
                        Buy Now &nbsp; <ExternalLinkIcon />
                      </Button>
                    </NavLink>

                    <Button onClick={() => handleDelete(item.id)}>
                      {" "}
                      <DeleteIcon />
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
        </SimpleGrid>
      </Container>
    </div>
  );
};

export default Cart;
