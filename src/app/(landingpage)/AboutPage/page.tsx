"use client";

import { ABOUT_DATA, TakeAdvantageData } from "@/app/Data/PagesData";
import PageBanner from "@/app/components/Ui/PageBanner";
import {
  Box,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  chakra,
  SimpleGrid,
  Icon,
} from "@chakra-ui/react";

import React from "react";
import Arrowbend from "../../../../public/Icons/Arrowbend";
import LeftAnimation from "@/app/components/Animation/LeftAnimation";
import RightAnimation from "@/app/components/Animation/RightAnimation";

const Aboutpage = () => {
  return (
    <Box>
      <PageBanner title="About Us" bgImage="aboutimg.png" />
      <Container maxW={"1200px"} my="6rem">
        <Stack spacing={"6rem"}>
          {ABOUT_DATA.map((i, index) => (
            <Flex
              key={index}
              flexDir={
                index === 1
                  ? { base: "column", lg: "row-reverse" }
                  : { base: "column", lg: "row" }
              }
              gap="3rem"
              alignItems={"center"}
              justifyContent={"center"}
            >
              <LeftAnimation duration={0.5}>
                <Box w={{ base: "100%", xl: "518px" }}>
                  <Image src={i.img} w="100%" alt="" />
                </Box>
              </LeftAnimation>
              <RightAnimation>
                <Stack>
                  <Heading
                    color={"#4B4B4B"}
                    fontWeight={"500"}
                    fontSize={{ base: "20px", xl: "30px" }}
                  >
                    {i.title}
                  </Heading>
                  <Text fontSize={{ base: "sm", xl: "15px" }} color="#8E8E8E">
                    {i.body}
                  </Text>
                </Stack>
              </RightAnimation>
            </Flex>
          ))}
        </Stack>
        <Flex
          my="6rem"
          flexDir={{ base: "column", lg: "row" }}
          alignItems={"center"}
          justifyContent={"center"}
          gap={{ base: "5rem", xl: "15rem" }}
        >
          <LeftAnimation duration={0.5}>
            <Box w={{ base: "100%", md: "454px" }}>
              <Heading
                fontSize={{ base: "25px", xl: "30px" }}
                lineHeight={"2.1rem"}
                fontWeight={"500"}
              >
                Why should you take advantage
                <chakra.br display={{ base: "none", xl: "flex" }} /> of
                <chakra.span color={"primary"}> Sendeet Logistics</chakra.span>
                <Arrowbend pos={"absolute"} pt="1.2rem" pr="1.5rem" />
              </Heading>
            </Box>
          </LeftAnimation>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"5rem"}>
            {TakeAdvantageData.map((i, index) => (
              <RightAnimation key={index}>
                <Stack gap="0.8rem">
                  <Icon as={i.icon} fontSize="30px" />
                  <Heading
                    fontWeight={"500"}
                    color="#C27123"
                    fontSize={{ base: "lg", lg: "20px" }}
                  >
                    {i.title}
                  </Heading>
                  <Text
                    color="#4B4B4B"
                    fontSize={{ base: "sm", lg: "14px" }}
                    w={{ base: "100%", xl: "222px" }}
                  >
                    {i.body}
                  </Text>
                </Stack>
              </RightAnimation>
            ))}
          </SimpleGrid>
        </Flex>
      </Container>
    </Box>
  );
};

export default Aboutpage;
