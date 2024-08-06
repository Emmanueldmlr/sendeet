import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import { Box, Flex, Heading, Image, Link, Stack, Text } from "@chakra-ui/react";
import React, { useState } from "react";
const OptionData = [
  {
    title: "Individual",
    image: "/dashicon/individual.svg",
    type: "individual",
    body: "Better suited for individual consumers. It is tailored to meet personal preferences",
  },
  {
    image: "/dashicon/Business.svg",
    title: "Business",
    type: "business",
    body: "Caters to users who prioritize factors like bulk deliveries, streamlined routes, and predictable delivery windows",
  },
];
const SchedulePickup = ({ form, setForm }: { form: any; setForm: any }) => {
  const handleOptionClick = (type: any) => {
    if (type === "business") {
      setForm(1);
    } else {
      setForm(2);
    }
  };
  return (
    <PageWrapper gap="2.5rem">
      <Stack
        gap="1rem"
        mt={{ base: "2rem", xl: "0rem" }}
        px={{ base: "30px", xl: "0px" }}
      >
        <DashHeader pagename="Schedule Pickup" />
        <Heading
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"40px"}
          display={{ base: "flex", xl: "none" }}
        >
          Schedule Pickup
        </Heading>
        <Heading fontSize={{ base: "sm", xl: "18px" }} fontWeight={"500"}>
          Choose the best option and proceed with booking
        </Heading>
      </Stack>
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"center"}
        gap="4rem"
        px={{ base: "30px", xl: "0px" }}
      >
        {OptionData.map((items, index) => (
          <Stack
            onClick={() => handleOptionClick(items.type)}
            _hover={{ textDecor: "none" }}
            cursor={"pointer"}
            key={index}
            alignItems={"center"}
            justifyContent={"center"}
            p={{ base: "20px", xl: "20px" }}
            gap="1rem"
            boxShadow={
              " 0px 4px 10px 0px rgba(0, 0, 0, 0.08), 0px 1px 4px 0px rgba(0, 0, 0, 0.04)"
            }
          >
            <Image src={items.image} alt="" w="80px" />
            <Heading
              fontSize={{ base: "sm", xl: "24px" }}
              fontWeight={"500"}
              color="#1F1F1F"
            >
              {items.title}
            </Heading>
            <Text
              textAlign="center"
              fontSize={{ base: "xs", xl: "14px" }}
              color="#4B4B4B"
              px={{ base: "30px", xl: "100px" }}
            >
              {items.body}
            </Text>
          </Stack>
        ))}
      </Flex>
    </PageWrapper>
  );
};

export default SchedulePickup;
