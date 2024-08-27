"use client";
import DashHeader from "@/app/components/Dashboard/DashHeader";
import PageWrapper from "@/app/components/Dashboard/PageWrapper";
import AccordionComponent from "@/app/components/Ui/AccordionComponent";
import ProgressComponent from "@/app/components/Ui/ProgressComponent";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Input,
  Stack,
  Checkbox,
  SimpleGrid,
  Text,
  Avatar,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdCall, MdChevronRight, MdHelpOutline } from "react-icons/md";
const TransitData = [
  { name: "Preparing", value: 100 },
  { name: "Picked by rider", value: 100 },
  { name: "In Transit", value: 50 },
  { name: "Delivered", value: 0 },
];

const TrackPage = () => {
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Track" />
      <Flex
        flexDir={{ base: "column", xl: "row" }}
        mt={{ base: "1.5rem", lg: "0rem" }}
        gap={{ base: "2rem", lg: "10rem" }}
      >
        <Stack w={{ base: "100%", lg: "600px" }} gap="1.5rem">
          <HStack
            w={{ base: "100%", lg: "100%" }}
            px={{ base: "1rem", lg: "0rem" }}
          >
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              bg={"transparent"}
              w={{ base: "100%", xl: "100%" }}
              borderRadius={"5px"}
              p={{ base: "10px", xl: "0px" }}
            >
              <Input
                color={"#FF8C1A"}
                h="50px"
                variant={"filled"}
                type="text"
                bg={"#fff"}
                outline={"none"}
                borderColor="#EEE"
                placeholder="Please enter your tracking number"
                _placeholder={{
                  color: "#CACACA",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  fontSize: { base: "12px", xl: "13px" },
                }}
                _focus={{
                  bg: "#eee",
                  borderColor: "#FF8C1A",
                  outline: "none",
                }}
                _hover={{
                  bg: "#eee",
                }}
              />
            </Flex>
            <Button
              p="25px"
              h="50px"
              variant={"solid"}
              fontSize={"sm"}
              fontWeight={"500"}
            >
              Track Now
            </Button>
          </HStack>
          <Box w={{ base: "100%", lg: "600px" }}>
            <Image src="/Asset/Basemap.png" w="100%" alt="" />
          </Box>
          <Stack gap="20px" px={{ base: "1rem", lg: "0rem" }}>
            <Heading fontSize={{ base: "15px", lg: "20px" }}>
              In Transit
            </Heading>
            <HStack w="100%">
              {TransitData.map((i, index) => (
                <Stack w="100%" key={index}>
                  <ProgressComponent value={i.value} />
                  <Flex
                    flexDir={{ base: "column-reverse", lg: "row" }}
                    gap={{ base: "5px", lg: "5px" }}
                    justifyContent={{ base: "center", lg: "left" }}
                    alignItems={"center"}
                  >
                    <Checkbox
                      variant={"circular"}
                      isChecked={i.value === 100 ? true : false}
                      size={{ base: "sm", lg: "sm" }}
                    />
                    <Heading
                      fontSize={{ base: "10px", lg: "10px" }}
                      fontWeight={"500"}
                    >
                      {i.name}
                    </Heading>
                  </Flex>
                </Stack>
              ))}
            </HStack>
            <SimpleGrid
              columns={{ base: 2, lg: 4 }}
              fontSize={"sm"}
              fontWeight={"500"}
              spacing={"10px"}
            >
              <Stack>
                <Heading fontSize={"11px"} color="#CACACA" fontWeight={"500"}>
                  COURIER
                </Heading>
                <Text color="#1F1F1F">JAMES BROWN 4.7</Text>
              </Stack>

              <HStack
                alignItems={{ base: "left", lg: "center" }}
                justifyContent={{ base: "left", lg: "center" }}
              >
                <Avatar src="" name="James Brown" size={"sm"} />
                <Box
                  display={"flex"}
                  alignItems={"center"}
                  justifyContent={"center"}
                  bg="#3B82F6"
                  w="29px"
                  h="29px"
                  borderRadius={"255px"}
                >
                  <MdCall color="#fff" />
                </Box>
              </HStack>

              <Stack>
                <Heading fontSize={"11px"} color="#CACACA" fontWeight={"500"}>
                  ESTIMATED TIME
                </Heading>
                <Text color={"#1F1F1F"}>12:14 PM</Text>
              </Stack>
              <Stack>
                <Heading fontSize={"11px"} color="#CACACA" fontWeight={"500"}>
                  DELIVERY ID:
                </Heading>
                <Text color={"#FF8C1A"}>#3948774</Text>
              </Stack>
            </SimpleGrid>
            <Stack gap="10px">
              <AccordionComponent
                title={"Shipment Progress"}
              ></AccordionComponent>
              <AccordionComponent
                title={"Items in Shipment"}
              ></AccordionComponent>
              <AccordionComponent
                title={"Receiver Details"}
              ></AccordionComponent>
            </Stack>
          </Stack>
        </Stack>
        <Stack gap="1rem" px={{ base: "1rem", lg: "0rem" }}>
          <Heading fontSize={"16px"} fontWeight={"500"}>
            Need help with delivery
          </Heading>
          <Button
            bg="#FFF3E8"
            variant={"solid"}
            w={{ base: "100%", lg: "100%" }}
            fontSize={{ base: "12px", lg: " md" }}
            size={{ base: " ", lg: "md" }}
            h={{ base: "" }}
            _hover={{ bg: "#FFF3E8" }}
          >
            <Flex
              color="#FF8C1A"
              alignItems={{ base: "center", lg: "center" }}
              justifyContent={{ base: "center", lg: "center" }}
              gap={{ base: "10px", lg: "10px" }}
              fontSize={"sm"}
            >
              No, I haven’t received this item
              <MdHelpOutline color="#FF8C1A" size="24px" />
            </Flex>
          </Button>
        </Stack>
      </Flex>
    </PageWrapper>
  );
};

export default TrackPage;
