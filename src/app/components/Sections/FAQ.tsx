import React from "react";
import SectionWrapper from "../Ui/SectionWrapper";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
  Image,
  Container,
  Stack,
  Heading,
  chakra,
  Link,
} from "@chakra-ui/react";
import ButtomAnimation from "../Animation/ButtomAnimation";
import { FAQS_DATA } from "@/app/Data/SectionDatas";
import { IoMdArrowDown } from "react-icons/io";

const FAQ = () => {
  return (
    <Box py="5rem">
      <Container p="1rem" bg="#fff" maxWidth="1200px">
        <ButtomAnimation>
          <Flex
            flexDir={{ base: "column", xl: "row" }}
            alignItems={"center"}
            justifyContent={"center"}
            w="100%"
            gap="2rem"
          >
            <Stack gap="1rem" textAlign={{ base: "center", xl: "left" }}>
              <Heading
                fontSize={{ base: "24px", xl: "32px" }}
                color="#1F1F1F"
                fontWeight={"500"}
              >
                Got Any <chakra.br display={{ base: "none", xl: "flex" }} />
                <chakra.span color="primary">Question?</chakra.span>
              </Heading>
              <Heading
                fontSize={{ base: "sm", xl: "16px" }}
                fontWeight={"500"}
                color={"#8e8e8e"}
                w={{ base: "100%", xl: "260px" }}
              >
                Quick answers to the questions you may have. Can’t find what
                you’re looking for? Check our full documentation by clicking
                below
              </Heading>

              <Link
                // as={Flex}
                href="/FaqPage"
                gap="0.2rem"
                display={{ base: "none", xl: "flex" }}
                alignItems={"center"}
                justifyContent={"left"}
                fontFamily={"Outfit"}
                fontSize={"18px"}
                fontWeight={"600"}
                color={"primary"}
              >
                More FAQs <IoMdArrowDown />
              </Link>
            </Stack>
            <Accordion
              allowToggle
              boxShadow={" 1px 1px 10px 0px rgba(0, 0, 0, 0.10)"}
              w="100%"
            >
              {FAQS_DATA.map((items, index) => (
                <AccordionItem key={index}>
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
                        {items.question}
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
                    {items.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
            <Link
              // as={Flex}
              href="/FaqPage"
              gap="0.2rem"
              display={{ base: "flex", xl: "none" }}
              alignItems={"center"}
              justifyContent={"left"}
              fontWeight={"500"}
              fontFamily={"Outfit"}
              fontSize={"16px"}
              color={"primary"}
            >
              More FAQs <IoMdArrowDown />
            </Link>
          </Flex>
        </ButtomAnimation>
      </Container>
    </Box>
  );
};

export default FAQ;
