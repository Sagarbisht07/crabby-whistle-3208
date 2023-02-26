import {
  Box,
  Flex,
  Text,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
  Code,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

import Login from "./Login/Login";

import { HelperContext } from "../AuthContext.jsx/AuthContext";
import { useContext, useState } from "react";
import Live from "./Login/Live";
import { NavLink } from "react-router-dom";

export default function NavbarTop() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box
      style={{
        width: "80%",
        margin: "auto",
        fontFamily: "arial  sans-serif",
      }}
    >
      <Flex
        bg={useColorModeValue("white", "gray.800")}
        color={useColorModeValue("gray.600", "white")}
        minH={"60px"}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
        <Flex
          gap={5}
          flex={{ base: 1 }}
          justify={{ base: "center", md: "start" }}
        >
          {/* women section starts here */}
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"arial  sans-serif"}
            color={useColorModeValue("gray.800", "white")}
          >
            WOMEN
          </Text>
          {/* women section ends here */}

          {/* mans section starts here */}

          <NavLink to="/">
            <Text
              textAlign={useBreakpointValue({ base: "center", md: "left" })}
              fontFamily={"arial  sans-serif"}
              color={useColorModeValue("gray.800", "white")}
            >
              MEN
            </Text>
          </NavLink>
          {/* men section ends here */}

          {/* KIDS section starts here */}
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"arial  sans-serif"}
            color={useColorModeValue("gray.800", "white")}
          >
            KIDS
          </Text>
          {/* KIDS section ends here */}

          {/* LIFE section starts here */}
          <Text
            textAlign={useBreakpointValue({ base: "center", md: "left" })}
            fontFamily={"heading"}
            color={useColorModeValue("gray.800", "white")}
          >
            LIFE
          </Text>
          {/* LIFE section ends here */}
        </Flex>

        {/* right part starts here */}
        <Stack>
          <Flex display={{ base: "none", md: "flex" }} ml={10}>
            <DesktopNav />
          </Flex>
        </Stack>
        {/* right parts ends here */}
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = useColorModeValue("gray.600", "gray.200");
  const linkHoverColor = useColorModeValue("gray.800", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  const { state, dispatch } = useContext(HelperContext);

  function handlerUser(data) {
    if (data == "My account") {
      if (state.isAuth) {
        return (
          <>
            <Flex mt={-2} mb={-4}>
              <Code
                style={{
                  display: "flex",
                  gap: "7px",
                }}
                px={2}
                fontSize="16"
                colorScheme="teal"
                mt={-3}
                mb={-1}
              >
                {state.user.username}
                <Live />
              </Code>
              <Button
                colorScheme="teal"
                variant="outline"
                mb={-2}
                mt={-5}
                ml={2}
                color="red"
                onClick={() => dispatch({ type: "LOGOUT" })}
              >
                Logout
              </Button>
            </Flex>
          </>
        );
      } else {
        return "My account";
      }
    } else {
      return data;
    }
  }

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover
            trigger={state.isAuth ? "" : "hover"}
            placement={"bottom-start"}
          >
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"sm"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
              >
                {handlerUser(navItem.label)}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("rgb(255, 255, 255)", "gray.900") }}
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <Text
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </Text>
          <Text fontSize={"sm"}>{subLabel}</Text>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Text
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          zIndex="100"
          // borderLeft={1}
          // borderStyle={"solid"}
          // borderColor={useColorModeValue("gray.200", "gray.700")}

          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link key={child.label} py={2} href={child.href}>
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};
const NAV_ITEMS = [
  {
    label: "Signup for Newsletter",
  },
  {
    label: "My account",
    children: [
      {
        subLabel: <Login />,
        href: "#",
      },
    ],
  },
  {
    label: `My wishlist ⭐`,
    href: "#",
  },
  {
    label: "International | English",
    href: "#",
  },
];
