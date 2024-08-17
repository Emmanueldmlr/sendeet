import { Stack, Heading, HStack, Flex, Text } from "@chakra-ui/react";
import React from "react";
import Stepper from "../Ui/Stepper";
import DashHeader from "../dashboard/DashHeader";
import PageWrapper from "../dashboard/PageWrapper";
import { MdCalendarToday } from "react-icons/md";

const GetDeliveryPrices = ({ form, setForm }: { form: any; setForm: any }) => {
  return (
    <PageWrapper gap="2.5rem">
      <Stack
        gap="1rem"
        mt={{ base: "2rem", xl: "0rem" }}
        px={{ base: "30px", xl: "0px" }}
      >
        <DashHeader pagename="Get Delivery Price" />
        <Heading
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"40px"}
          display={{ base: "flex", xl: "none" }}
        >
          Get Delivery Price
        </Heading>
        <Heading fontSize={{ base: "sm", xl: "18px" }} fontWeight={"500"}>
          Review & Select a delivery service to start booking your shipment
        </Heading>
      </Stack>
      <Stepper form={form} />
      <HStack
        flexDir={{ base: "column", xl: "row" }}
        alignItems={"left"}
        justifyContent={"space-between"}
        pr="40px"
        px={{ base: "30px", xl: "0px" }}
      >
        <Flex
          flexDirection={"column"}
          alignItems={{ base: "left", xl: " center" }}
          border={"1px solid #CACACA"}
          flexDir={"column"}
          p="10px"
          borderRadius={"4px"}
        >
          <HStack alignItems={"left"} gap="2rem">
            <Stack>
              <Text fontSize={{ base: "6px", xl: "15px" }}>
                Estimated Pickup Date :
              </Text>
              <Text>Mon, Sep 11th, from 8 am - 2 pm</Text>
              <Text>Estimated Pickup Date :</Text>
              <Text>Mon, Sep 11th, from 8 am - 2 pm</Text>
            </Stack>
            <MdCalendarToday size="24px" color="#C27123" />
          </HStack>
        </Flex>
        <Text color={"primary"} fontFamily={"Outfit"}>
          Save Shipment
        </Text>
      </HStack>
    </PageWrapper>
  );
};

export default GetDeliveryPrices;
