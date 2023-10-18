import { Flex, Stack, HStack, Text } from "@chakra-ui/react";
import React from "react";
import {
  MdOutlineLocalCarWash,
  MdSocialDistance,
  MdDeliveryDining,
} from "react-icons/md";
import { TbPackages, TbTruckDelivery } from "react-icons/tb";

const PlansCard = () => {
  return (
    <Flex
      pt="10px"
      alignItems={"left"}
      flexDir={"column"}
      border={"1px solid #FF8C1A"}
      w={{ base: "100%", xl: "585px" }}
      gap="12px"
      borderRadius={"4px"}
    >
      <Stack alignItems={"center"} gap={"1rem"}>
        <HStack alignItems={"center"} fontSize={{ base: "15px", xl: "16px" }}>
          <Text fontWeight={"500"}>Current Plan</Text>
          <Text color={"primary"}>Basic Tier</Text>
        </HStack>
        <Text
          textAlign={{ base: "center" }}
          color="#8E8E8E"
          fontSize={{ base: "xs", xl: "12px" }}
          px={{ base: "20px" }}
        >
           (Lowest-priced tier, suitable for individuals or small businesses
          with occasional delivery needs)
        </Text>
      </Stack>
      <Flex
        flexDir={{ base: "column-reverse", xl: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        gap={"2rem"}
      >
        <Flex
          w={{ base: "100%", xl: "203px" }}
          textAlign={"center"}
          alignItems={"center"}
          justifyContent={"center"}
          bg="#EEE"
          p="0px 12px"
          h={{ base: "100px", xl: "208px" }}
        >
          <Text color="#1F1F1F" fontWeight={"800"}>
            3% discount on each trip
          </Text>
        </Flex>
        <Stack w={{ base: "", xl: "362px" }} alignItems={"left"}>
          <HStack>
            <MdOutlineLocalCarWash size="24px" color="#FF8C1A" />
            <Text fontSize={{ base: "xs", xl: "12px" }}>Bike/Motorcycle</Text>
          </HStack>
          <HStack>
            <MdSocialDistance size="24px" color="#FF8C1A" />
            <Text fontSize={{ base: "xs", xl: "12px" }}>
              Short Distance (within a city or town)
            </Text>
          </HStack>{" "}
          <HStack>
            <TbPackages size="24px" color="#FF8C1A" />
            <Text fontSize={{ base: "xs", xl: "12px" }}>
              Small and Medium packages
            </Text>
          </HStack>{" "}
          <HStack>
            <TbTruckDelivery size="24px" color="#FF8C1A" />
            <Text fontSize={{ base: "xs", xl: "12px" }}>
              {" "}
              Up to 10 deliveries per month
            </Text>
          </HStack>{" "}
          <HStack>
            <MdDeliveryDining size="24px" color="#FF8C1A" />
            <Text fontSize={{ base: "xs", xl: "12px" }}>
              {" "}
              7 Out of 10 deliveries left{" "}
            </Text>
          </HStack>
        </Stack>
      </Flex>
    </Flex>
  );
};

export default PlansCard;
