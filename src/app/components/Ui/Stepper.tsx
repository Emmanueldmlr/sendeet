import React from "react";

import { Box, Flex, HStack, Heading, Text } from "@chakra-ui/react";

const STEP_DATA = [
  { no: 1, stepNumber: "1", description: "Pickup Origin and Destination" },
  { no: 3, stepNumber: "2", description: "Describe Your Package" },
  { no: 4, stepNumber: "3", description: "Get Delivery Prices" },
  { no: 5, stepNumber: "4", description: "Proceed To Payment" },
];
const Stepper = ({ form }: { form: any }) => {
  return (
    <Flex
      flexDirection={{ base: "column", xl: "row" }}
      alignItems={{ base: "left", xl: "left" }}
      justifyContent={{ base: "left", xl: "left" }}
      gap={"10px"}
      px={{ base: "30px", xl: "0px" }}
    >
      {STEP_DATA.map((step, index) => (
        <Flex
          key={index}
          flexDirection={{ base: "column", xl: "row" }}
          alignItems={{ base: "left", xl: "center" }}
          justifyContent={{ base: "left", xl: "center" }}
          gap="10px"
        >
          <HStack>
            <Heading
              as={Flex}
              alignItems={"center"}
              textAlign={"center"}
              background={
                step.no === 1 || step.no === 2
                  ? "#FF8C1A"
                  : form === step.no
                  ? "#FF8C1A"
                  : "#E1E1E1"
              }
              width={"32px"}
              height={"32px"}
              borderRadius={"32px"}
              fontSize={{ base: "sm", lg: "18px" }}
              fontWeight={"500"}
              color={
                step.no === 1 || step.no === 2
                  ? "#fff"
                  : form === step.no
                  ? "#fff"
                  : "#8E8E8E"
              }
              justifyContent={"center"}
            >
              {step.stepNumber}
            </Heading>

            <Text
              fontSize={{ base: "sm", lg: "16px" }}
              color={
                step.no === 1 || step.no === 2
                  ? "#1F1F1F"
                  : form === step.no
                  ? "#1F1F1F"
                  : "#8E8E8E"
              }
              lineHeight={"150%"}
              fontFamily={"Outfit"}
            >
              {step.description}
            </Text>
          </HStack>
          {index < 3 && (
            <Box
              w="26px"
              h="1px"
              bg="#E1E1E1"
              display={{ base: "none", xl: "flex" }}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
};

export default Stepper;
