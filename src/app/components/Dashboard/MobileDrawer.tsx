import {
  Flex,
  HStack,
  Spacer,
  Avatar,
  Heading,
  IconButton,
  Drawer,
  Box,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Stack,
  Link,
  useDisclosure,
} from "@chakra-ui/react";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import HamBurger from "../../../../public/Icons/Hamburger";
import Logo from "../ui/Logo";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Sidebar from "./Sidebar";

const MobileDrawer = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  return (
    <Box pos={"fixed"} w="100%" zIndex={100}>
      <Flex
        display={{ base: "flex", lg: "none" }}
        p={{ base: "4px 20px", lg: "4px 61px" }}
        justifyContent={"space-between"}
        background={"#fff"}
        boxSize="full"
        align="center"
        gap="2.5"
        py="17px"
        fontSize="sm"
        zIndex={200}
      >
        <HStack gap={"1rem"}>
          <Flex display={{ base: "flex", xl: "none" }} flex={"start"}>
            <IconButton
              onClick={onToggle}
              _hover={{ bg: "transparent" }}
              icon={
                isOpen ? (
                  <AiOutlineClose
                    size="1.5rem"
                    color="rgba(122, 122, 122, 1)"
                  />
                ) : (
                  <HamBurger fontSize="1.5rem" />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>
          <Link
            href="/"
            cursor={"pointer"}
            display={{ base: "flex", xl: "none" }}
          >
            <Logo />
          </Link>
        </HStack>

        <HStack gap="1rem">
          <MdOutlineNotificationsActive size="24px" />
          <Avatar
            size={"sm"}
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
        </HStack>
      </Flex>
      {isOpen && (
        <Drawer
          isOpen={isOpen}
          placement="left"
          onClose={onClose}
          size={"full"}
        >
          <DrawerContent bg="transparent" boxShadow={"0px"}>
            <DrawerBody p="0px" w="0px">
              <Sidebar
                display={{ base: "flex", xl: "none" }}
                onclick={onClose}
              />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      )}
    </Box>
  );
};

export default MobileDrawer;
