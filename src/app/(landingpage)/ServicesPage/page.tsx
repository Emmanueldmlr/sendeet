"use client";
import { ServicesData, TakeAdvantageData } from "@/app/Data/PagesData";
import LeftAnimation from "@/app/components/animation/LeftAnimation";
import RightAnimation from "@/app/components/animation/RightAnimation";
import PageBanner from "@/app/components/Ui/PageBanner";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Stack,
  chakra,
  Text,
} from "@chakra-ui/react";
import React from "react";
import Arrowbend from "../../../../public/Icons/Arrowbend";

const ServicesPage = () => {
  return (
    <Box>
      <PageBanner title="Our Services" bgImage="aboutimg.png" />
      <Container maxW={"1200px"} my="6rem">
        <Flex
          my="6rem"
          flexDir={{ base: "column", lg: "row" }}
          alignItems={""}
          justifyContent={""}
          gap={{ base: "3rem", xl: "10rem" }}
        >
          <LeftAnimation duration={0.5}>
            <Box w={{ base: "100%", md: "454px" }}>
              <Heading
                fontSize={{ base: "25px", xl: "30px" }}
                lineHeight={"2.1rem"}
                fontWeight={"500"}
              >
                Unlock the Power of Tailored
                <chakra.br display={{ base: "none", xl: "flex" }} />
                <chakra.span color={"primary"}>
                  {" "}
                  Logistics Solutions
                </chakra.span>{" "}
                for Your Business
                <Arrowbend pos={"absolute"} pt="1.2rem" pr="1.5rem" />
              </Heading>
            </Box>
          </LeftAnimation>
          <SimpleGrid
            columns={{ base: 1, lg: 1 }}
            spacing={{ base: "2rem", xl: "5rem" }}
          >
            {ServicesData.map((i, index) => (
              <RightAnimation key={index}>
                <Stack gap="0.8rem">
                  <Heading
                    fontWeight={"500"}
                    color="#4B4B4B"
                    fontSize={{ base: "lg", lg: "25px" }}
                  >
                    {i.title}
                  </Heading>
                  <Text
                    color="#8E8E8E"
                    fontSize={{ base: "sm", lg: "16px" }}
                    w={"100%"}
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

export default ServicesPage;
