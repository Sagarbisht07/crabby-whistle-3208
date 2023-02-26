import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail,
} from "react-icons/md";
import { BsDiscord, BsPerson } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { FcUnlock } from "react-icons/fc";
import { useRef } from "react";

export default function Singup() {
  let toast = useToast();

  let name = useRef();
  let email = useRef();
  let password = useRef();

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      username: name.current.value,
      email: email.current.value,
      password: password.current.value,
    };
    async function postUserData() {
      const response = await fetch(
        `https://frequent-ionized-grapple.glitch.me/user`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      const result = await response.json();
      // console.log(result);
    }

    if (data.username === "" || data.email === "" || data.password === "") {
      toast({
        title: "Error.",
        description: "Please fill all the Details.",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
     name.current.value = "";
      email.current.value = "";
      password.current.value = "";



    } else {
      toast({
        title: "Account created.",
        description: "We've created your account for you.",
        status: "success",
        duration: 6000,
        isClosable: true,
      });
      postUserData();
      name.current.value = "";
      email.current.value = "";
      password.current.value = "";
      // console.log(state);
      // setTimeout(() => {
      //   navigate("/login");
      // }, 3000);
    }
  }
  return (
    <Container
      mb={{ sm: 0, md: 0, lg: 20 }}
      bg="rgb(242, 242, 242)"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
    >
      <Flex>
        <Box
          bg="#02054B"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <Box>
                  <Heading>CREATE AN ACCOUNT</Heading>
                  <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                    Please enter the following information to create your
                    account.
                  </Text>

                  <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                    <VStack pl={0} spacing={3} alignItems="flex-start">
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdPhone color="#1970F1" size="20px" />}
                      >
                        +91-9837659778
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="230px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdEmail color="#1970F1" size="20px" />}
                      >
                        wordrobworld@gmail.com
                      </Button>
                      <Button
                        size="md"
                        height="48px"
                        width="200px"
                        variant="ghost"
                        color="#DCE2FF"
                        _hover={{ border: "2px solid #1C6FEB" }}
                        leftIcon={<MdLocationOn color="#1970F1" size="20px" />}
                      >
                        Karnavati, India
                      </Button>
                    </VStack>
                  </Box>
                  <HStack
                    mt={{ lg: 10, md: 10 }}
                    spacing={5}
                    px={5}
                    alignItems="flex-start"
                  >
                    <IconButton
                      aria-label="facebook"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<MdFacebook size="28px" />}
                    />
                    <IconButton
                      aria-label="github"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<AiFillInstagram size="28px" />}
                    />
                    <IconButton
                      aria-label="discord"
                      variant="ghost"
                      size="lg"
                      isRound={true}
                      _hover={{ bg: "#0D74FF" }}
                      icon={<BsDiscord size="28px" />}
                    />
                  </HStack>
                </Box>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#0B0E3F">
                    <VStack spacing={5}>
                      <FormControl id="name">
                        <FormLabel>Entre Your Name</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<BsPerson color="gray.800" />}
                          />
                          <Input ref={name} type="text" size="md" />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="name">
                        <FormLabel>Email Id</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<MdOutlineEmail color="gray.800" />}
                          />
                          <Input ref={email} type="text" size="md" />
                        </InputGroup>
                      </FormControl>

                      <FormControl id="name">
                        <FormLabel>Password</FormLabel>
                        <InputGroup borderColor="#E0E1E7">
                          <InputLeftElement
                            pointerEvents="none"
                            children={<FcUnlock color="gray.800" />}
                          />
                          <Input ref={password} type="text" size="md" />
                        </InputGroup>
                      </FormControl>

                      <FormControl
                        textAlign={{ sm: "center", md: "center", lg: "center" }}
                        id="name"
                        float="right"
                      >
                        <Button
                          onClick={handleSubmit}
                          w={{ sm: "100%", md: "100%", lg: "100%" }}
                          variant="solid"
                          bg="#0D74FF"
                          color="white"
                          _hover={{
                            bg: "green.500",
                            color: "white",
                          }}
                        >
                          REGISTER
                        </Button>
                      </FormControl>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
}
