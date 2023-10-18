"use client";
import DashHeader from "@/app/components/Dashboard/DashHeader";
import PageWrapper from "@/app/components/Dashboard/PageWrapper";
import { Flex, Link, Stack, Switch, Text } from "@chakra-ui/react";
import React from "react";

const SignInAndSecuritypage = () => {
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Profile" />
      <Flex
        mt={{ base: "3rem", lg: "0rem" }}
        flexDir={"row"}
        alignItems={"left"}
        justifyContent={"left"}
        px={{ base: "30px", xl: "0px" }}
      >
        <Text
          fontSize={{ base: "15px", xl: "18px" }}
          color="#8E8E8E"
          fontWeight={"500"}
        >
          Sign In and Security
        </Text>
      </Flex>
      <Stack
        maxWidth={"800px"}
        gap={"1.5rem"}
        px={{ base: "30px", xl: "0px" }}
        fontWeight={"800"}
        fontSize={{ base: "xs", xl: "16px" }}
      >
        <Flex justifyContent={"left"} flexDir={"row"} alignItems={"left"}>
          <Text>To reset login password</Text>
          <Link color="primary">,click here</Link>
        </Flex>
        <Flex justifyContent={"left"} flexDir={"row"} alignItems={"left"}>
          <Text>
            To set up two-step authentication password for your wallet
          </Text>
          <Link color="primary">,click here</Link>
        </Flex>
      </Stack>
    </PageWrapper>
  );
};

export default SignInAndSecuritypage;
