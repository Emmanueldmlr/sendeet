"use client";
import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import { Flex, Button, Text, Stack, Switch } from "@chakra-ui/react";
import React from "react";

const NotificationSettingspage = () => {
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Profile" />
      <Flex
        mt={{ base: "3rem", lg: "0rem" }}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "30px", xl: "0px" }}
      >
        <Text
          fontSize={{ base: "15px", xl: "18px" }}
          color="#8E8E8E"
          fontWeight={"500"}
        >
          Notification Settings
        </Text>
      </Flex>
      <Stack maxWidth={"800px"} gap={"1.5rem"} px={{ base: "30px", xl: "0px" }}>
        <Flex
          justifyContent={"space-between"}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Text>Keep Notifications within the webapp</Text>
          <Switch />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Text>Send your notifications to your email</Text>
          <Switch />
        </Flex>
        <Flex
          justifyContent={"space-between"}
          flexDir={"row"}
          alignItems={"center"}
        >
          <Text>Stop sending notifications about marketing or promotions</Text>
          <Switch />
        </Flex>
      </Stack>
    </PageWrapper>
  );
};
export default NotificationSettingspage;
