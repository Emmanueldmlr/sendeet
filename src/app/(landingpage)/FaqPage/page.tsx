"use client";
import { FAQsData, ServicesData } from "@/app/Data/PagesData";
import LeftAnimation from "@/app/components/Animation/LeftAnimation";
import RightAnimation from "@/app/components/Animation/RightAnimation";
import PageBanner from "@/app/components/Ui/PageBanner";
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  chakra,
  Image,
  Text,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Accordion,
} from "@chakra-ui/react";
import React from "react";
import Arrowbend from "../../../../public/Icons/Arrowbend";
import ButtomAnimation from "@/app/components/Animation/ButtomAnimation";

const page = () => {
  return (
    <Box>
      <PageBanner title="Frequently Asked Questions" bgImage="Faqbg.png" />
      <Container maxW={"1200px"} my="6rem">
        <Flex
          my="6rem"
          flexDir={{ base: "column", lg: "row" }}
          alignItems={""}
          justifyContent={""}
          gap={{ base: "3rem", xl: "6rem" }}
        >
          <LeftAnimation duration={0.5}>
            <Box w={{ base: "100%", md: "454px" }}>
              <Heading
                fontSize={{ base: "25px", xl: "30px" }}
                lineHeight={"2.1rem"}
                fontWeight={"500"}
              >
                We have answers to as many{" "}
                <chakra.br display={{ base: "none", xl: "flex" }} /> questions
                that you have about{" "}
                <chakra.br display={{ base: "flex", xl: "flex" }} />
                <chakra.span color={"primary"}>Sendeet Logistics</chakra.span>
                <Arrowbend pos={"absolute"} pt="1.2rem" pr="1.5rem" />
              </Heading>
            </Box>
          </LeftAnimation>
          <ButtomAnimation>
            <SimpleGrid
              columns={{ base: 1, lg: 1 }}
              spacing={{ base: "1rem", xl: "1rem" }}
            >
              {FAQsData.map((i, index) => (
                <Accordion
                  key={index}
                  allowToggle
                  border={"1px solid #FFF3E8"}
                  borderRadius={"4px"}
                  // boxShadow={" 1px 1px 10px 0px rgba(0, 0, 0, 0.10)"}
                  w={{ base: "100%", xl: "700px" }}
                >
                  <AccordionItem w="100%">
                    <h2>
                      <AccordionButton p={"10px"} color="#333">
                        <Box
                          as={Flex}
                          flex="1"
                          fontSize={{ base: "sm", lg: "md" }}
                          textAlign="left"
                          alignItems={"center"}
                          gap="1rem"
                          color="#333"
                        >
                          <Text>0{index + 1}</Text>
                          {i.question}
                        </Box>
                        <Box>
                          <Image src="/Asset/Add.svg" w="80%" />
                        </Box>
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      color="#333"
                      fontSize={{ base: "sm", lg: "md" }}
                      pb={4}
                    >
                      {i.answer}
                    </AccordionPanel>
                  </AccordionItem>
                </Accordion>
              ))}
            </SimpleGrid>
          </ButtomAnimation>
        </Flex>
      </Container>
    </Box>
  );
};

export default page;
