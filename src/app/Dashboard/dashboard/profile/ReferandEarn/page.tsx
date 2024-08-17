"use client";
import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import { Flex, Text, HStack, Heading, Button } from "@chakra-ui/react";
import React from "react";
import { MdContentCopy, MdLink } from "react-icons/md";

const ReferandEarnpage = () => {
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
          Refer and Earn
        </Text>
      </Flex>
      <Flex
        mt="3rem"
        gap="1rem"
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        px={{ base: "30px", xl: "0px" }}
      >
        <Text color="#4B4B4B">Your referral code is </Text>
        <HStack
          gap="1.5rem"
          border="1px solid #FF8C1A"
          p="16px"
          borderRadius={"4px"}
        >
          <MdContentCopy color="#FF8C1A" size="24px" />
          <Heading color={"primary"} fontSize={{ base: "", xl: "32px" }}>
            DSendAra456
          </Heading>
        </HStack>
        <Text>OR</Text>
        <Button
          as={Flex}
          gap={"1rem"}
          w={{ base: "200px", xl: "292px" }}
          p="30px"
        >
          <MdLink size="24px" />
          Share Link
        </Button>
        <Text
          fontSize={{ base: "xs", xl: "15px" }}
          color="#4B4B4B"
          fontWeight={"600"}
          textAlign={{ base: "center", xl: "left" }}
        >
          Earn 500 naira after every referral that uses either your code or
          comes via your link{" "}
        </Text>
      </Flex>
    </PageWrapper>
  );
};

export default ReferandEarnpage;
