import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  MdDeliveryDining,
  MdOutlineLocalCarWash,
  MdSocialDistance,
} from "react-icons/md";
import { TbPackages, TbTruckDelivery } from "react-icons/tb";
import PlansCard from "../Ui/PlansCard";

const Page1 = () => {
  return (
    <Stack px={{ base: "1rem", xl: "0rem" }}>
      <PlansCard />
    </Stack>
  );
};

export default Page1;
