import { Flex, Icon, Link, Stack, Text, Box, HStack } from "@chakra-ui/react";
import React from "react";
import { WhiteLogo } from "../ui/Logo";
import { DashboardNavData } from "@/app/Data/DashboardBoardData";

import SidebarItem from "./SidebarItem";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlinePowerSettingsNew } from "react-icons/md";

const Sidebar = ({ display, onclick }: { display: any; onclick?: any }) => {
  return (
    <Flex
      overflow={{ base: "auto", lg: "none" }}
      display={display}
      pos="fixed"
      bg="#1F1F1F"
      flexDir={"column"}
      alignItems=""
      justifyContent=""
      h="100vh"
      p={{ base: "20px 0px 0px 0px", lg: "50px 0px 50px 0px" }}
      w={{ base: "100%", lg: "280px" }}
      gap="3rem"
    >
      <Flex
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "2rem", lg: "0rem" }}
      >
        <HStack gap="1rem">
          <Box display={{ base: "flex", lg: "none" }}>
            <AiOutlineClose
              size="1.5rem"
              color="#fff"
              onClick={onclick}
              cursor={"pointer"}
            />
          </Box>
          <Box px={{ base: "0rem", lg: "2rem" }}>
            <WhiteLogo />
          </Box>
        </HStack>{" "}
        <Box display={{ base: "flex", lg: "none" }}>
          {" "}
          <MdOutlineNotificationsActive size="24px" color="#fff" />
        </Box>
      </Flex>
      <Stack alignItems={"left"} justifyContent={"left"} gap={"3rem"}>
        {DashboardNavData.map((i, index) => (
          <SidebarItem key={index} theindex={index} items={i} />
        ))}
      </Stack>
      <Stack gap="1rem">
        <Box
          w="100%"
          h="2px"
          bg="#4B4B4B"
          display={{ base: "flex", lg: "none" }}
        />
        <Flex
          display={{ base: "flex", lg: "none" }}
          as={Link}
          _hover={{ textDecor: "none" }}
          href="/SignIn"
          flexDir={"row"}
          alignItems="center"
          justifyContent="left"
          gap="1rem"
          mr="2rem"
          mb="1rem"
          color="#EC2D30"
        >
          <MdOutlinePowerSettingsNew
            size="18px"
            style={{ marginLeft: "40px" }}
          />
          <Text fontSize={{ base: "16px", lg: "" }} fontFamily={"Outfit"}>
            Sign Out
          </Text>
        </Flex>
      </Stack>
    </Flex>
  );
};

export default Sidebar;
