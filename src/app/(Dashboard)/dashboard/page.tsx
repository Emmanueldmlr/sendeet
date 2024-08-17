"use client";
import { DashHomeData } from "@/app/Data/DashboardBoardData";
import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import FixedLink from "@/app/components/Ui/FixedLink";
import {
  Text,
  Box,
  Button,
  Flex,
  Stack,
  Heading,
  Image,
  Icon,
} from "@chakra-ui/react";
import React from "react";

import { MdOutlineNotificationsActive } from "react-icons/md";

const Homepage = () => {
  return (
    <Box>
      <PageWrapper gap="3.5rem">
        <DashHeader />
        <Box w="100%" h="142px">
          <Flex
            h="100%"
            alignItems={"center"}
            justifyContent={"space-between"}
            w="100%"
            p="24px 16px"
            bg="#FFF3E8"
            borderRadius={"4px"}
            mt={{ base: "1.5rem", lg: "0rem" }}
          >
            <Stack fontWeight={"500"}>
              <Heading
                fontWeight={"500"}
                fontSize={{ base: "10px", lg: "16px" }}
                color={"primary"}
              >
                Monday, O3 September 2023
              </Heading>
              <Heading
                fontWeight={"500"}
                fontSize={{ base: "18px", lg: "32px" }}
              >
                Daramola Oluwadara
              </Heading>
            </Stack>
            <Box mb={{ base: "none", lg: "2rem" }}>
              <Image
                src="/Asset/amico.svg"
                alt=""
                w={{ base: "81.12px", lg: "100%" }}
              />
            </Box>
          </Flex>
        </Box>
        <Flex
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: "1rem", lg: "3.5rem" }}
          mx={{ base: "1rem", lg: "0rem" }}
        >
          {DashHomeData.map((item, index) => (
            <Stack
              w={{ base: "100%", xl: "450px" }}
              gap={index === 1 ? "16px" : "16px"}
              p="16px 20px"
              key={index}
              boxShadow={
                " 0px 2px 4px 0px rgba(0, 0, 0, 0.04), 0px 1px 1px 0px rgba(0, 0, 0, 0.02)"
              }
            >
              <Icon
                as={item.icon}
                w={"30px"}
                color={index === 1 ? "#3B82F6" : ""}
                bg={index === 1 ? "#F1F8FF" : ""}
                borderRadius={index === 1 ? "15px" : ""}
                h={"30px"}
              />
              <Heading fontSize={{ base: "16px", lg: "18px" }}>
                {item.title}
              </Heading>
              <Text fontSize={{ base: "12px", lg: "14px" }}>{item.body}</Text>
              <Button variant={"unstyled"} color={"#fff"} bg={item.color}>
                {item.btn}
              </Button>
            </Stack>
          ))}
        </Flex>
      </PageWrapper>
      <FixedLink />
    </Box>
  );
};

export default Homepage;
