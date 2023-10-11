"use client";
import {
  Box,
  Button,
  IconButton,
  useDisclosure,
  Collapse,
  Stack,
  Link,
  Flex,
  HStack,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Logo from "../Ui/Logo";
import DesktopNav from "./DesktopNav";
import HamBurger from "../../../../public/Icons/Hamburger";
import MobileNav from "./MobileNav";
import { AiOutlineClose } from "react-icons/ai";

const Header = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Flex
        pos={"fixed"}
        bg={"#fff"}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
        padding={{ base: "20px 30px", xl: "20px 120px" }}
        // borderBottom={"2px solid #eee"}
        zIndex={100}
      >
        <Flex>
          <Link href="/">
            <Logo />
          </Link>
        </Flex>
        <Box display={{ base: "flex", xl: "none" }}>
          <IconButton
            _hover={{ bg: "none" }}
            onClick={onToggle}
            bg="none"
            icon={
              isOpen ? (
                <AiOutlineClose size="1.5rem" color="rgba(122, 122, 122, 1)" />
              ) : (
                <HamBurger />
              )
            }
            aria-label={"icon"}
          />
        </Box>

        <DesktopNav />
        <HStack display={{ base: "none", xl: "flex" }}>
          <Link href="/SignIn">
            <Button variant="outline" color={"primary"}>
              Sign In
            </Button>
          </Link>
          <Link href="/Register">
            <Button variant="solid">Register</Button>
          </Link>
        </HStack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Stack
          mt={"0.3rem"}
          color="white"
          bg="teal.500"
          display={{ xl: "none" }}
          shadow="md"
          onClick={onClose}
        >
          <MobileNav />
        </Stack>
      </Collapse>
    </>
  );
};

export default Header;
