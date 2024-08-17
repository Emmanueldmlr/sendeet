"use client";
import Page1 from "@/app/components/changePlanPages/Page1";
import Page2 from "@/app/components/changePlanPages/Page2";
import DashHeader from "@/app/components/Dashboard/DashHeader";
import PageWrapper from "@/app/components/Dashboard/PageWrapper";
import { Flex, Button, Text, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

const ChangePlanpage = () => {
  const [page, setPage] = useState(0);
  const Activepage = () => {
    if (page === 0) {
      return <Page1 />;
    } else {
      return <Page2 />;
    }
  };
  return (
    <PageWrapper gap={"2.5rem"}>
      {" "}
      <DashHeader pagename="Profile" />
      <Flex
        mt={{ base: "3rem", lg: "0rem" }}
        flexDir={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "30px", xl: "0px" }}
        gap={{ base: "1rem", xl: "0rem" }}
      >
        <Text
          fontSize={{ base: "15px", xl: "18px" }}
          color="#8E8E8E"
          fontWeight={"500"}
        >
          Change Plan
        </Text>
        <HStack>
          {" "}
          <Button
            fontSize={{ base: "xs", xl: "md" }}
            onClick={() => setPage(0)}
            color={"4B4B4B"}
            variant={"outline"}
            w={{ base: "71px", xl: "150px" }}
          >
            Add-On
          </Button>{" "}
          <Button
            fontSize={{ base: "xs", xl: "md" }}
            onClick={() => setPage(1)}
            w={{ base: "100px", xl: "150px" }}
          >
            {" "}
            Change Plan
          </Button>
        </HStack>
      </Flex>
      <>{Activepage()}</>
    </PageWrapper>
  );
};

export default ChangePlanpage;
