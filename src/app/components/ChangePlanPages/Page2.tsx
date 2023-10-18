import { FormControl, FormLabel, Input, Stack, Text } from "@chakra-ui/react";
import React from "react";
import PlansCard from "../Ui/PlansCard";

const Page2 = () => {
  return (
    <Stack gap={"20px"} maxW={"800px"} px={{ base: "1rem", xl: "0rem" }}>
      <Text>You have chosen: </Text>
      <PlansCard />
      <Stack gap="1rem">
        <Text>What Add-ons will you like to have</Text>
        <FormControl>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Distance
          </FormLabel>
          <Input
            name="email"
            fontSize={"sm"}
            size="lg"
            borderRadius="4px"
            border="0.662px  solid  #EEE"
            bg={"#fff"}
            _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
            _hover={{ border: "0.662px solid  #EEE" }}
          />
        </FormControl>{" "}
        <FormControl>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Weight
          </FormLabel>
          <Input
            name="email"
            fontSize={"sm"}
            size="lg"
            borderRadius="4px"
            border="0.662px  solid  #EEE"
            bg={"#fff"}
            _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
            _hover={{ border: "0.662px solid  #EEE" }}
          />
        </FormControl>{" "}
        <FormControl>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Vehicles
          </FormLabel>
          <Input
            name="email"
            fontSize={"sm"}
            size="lg"
            borderRadius="4px"
            border="0.662px  solid  #EEE"
            bg={"#fff"}
            _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
            _hover={{ border: "0.662px solid  #EEE" }}
          />
        </FormControl>{" "}
        <FormControl>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Number of deliveries
          </FormLabel>
          <Input
            name="email"
            fontSize={"sm"}
            size="lg"
            borderRadius="4px"
            border="0.662px  solid  #EEE"
            bg={"#fff"}
            _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
            _hover={{ border: "0.662px solid  #EEE" }}
          />
        </FormControl>
      </Stack>
    </Stack>
  );
};

export default Page2;
