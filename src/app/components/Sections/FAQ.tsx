import React from "react";
import {
  Accordion,
  AccordionButton,
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
} from "@chakra-ui/react";
import ButtomAnimation from "../animation/ButtomAnimation";
import { FAQS_DATA } from "@/app/Data/SectionDatas";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

const FAQ = () => {
  return (
      <Container p={{base: "48px 24px" , lg: "55px 160px"}} bg="#fff" maxWidth="100%">
        <ButtomAnimation>
          <Flex
            flexDir={{ base: "column", md: "row" }}
            justifyContent={"center"}
            alignItems={{ base: "center", md: "flex-start" }}
            w="100%"
            gap="4rem"
          >
            <Stack
              gap="1rem"
              textAlign={{ base: "center", md: "left" }}
              w={{ base: "100%", md: "600px" }}
            >
              <Heading
                fontSize={{ base: "24px", md: "32px" }}
                color="#1F1F1F"
                fontWeight={"500"}
              >
                Got Other <chakra.span color="#8E8E8E">Questions?</chakra.span>
              </Heading>
              <Heading
                fontSize={{ base: "sm", md: "16px" }}
                fontWeight={"500"}
                color={"#8e8e8e"}
                fontFamily="Lora"
              >
                Quick answers to the questions you may have. Can’t find what
                you’re looking for?
              </Heading>
              <Box
                mt="48px"
                color="#573312"
                fontSize={"14px"}
                fontWeight={"500"}
                display={"flex"}
                flexDir={"column"}
                alignItems={{base: "center", md: "left"}}
                gap="11px"
              >
                <Text display="flex" alignItems="center">
                  <MdOutlinePhoneInTalk />
                  <chakra.span ml="12px">+2348146523620</chakra.span>
                </Text>
                <Text display="flex" alignItems="center">
                  <IoMail />
                  <chakra.span ml="12px">
                    sendeetlogistics@gmail.com
                  </chakra.span>
                </Text>
                <Text display="flex" alignItems="center">
                  <FaLocationDot />
                  <chakra.span ml="12px">
                    Obokun Street, Eleyele, Ibadan
                  </chakra.span>
                </Text>
              </Box>
            </Stack>
            <Accordion
              allowToggle
              w="100%"
              gap="24px"
            >
              {FAQS_DATA.map((items, index) => (
                <AccordionItem
                  key={index}
                  borderRadius={"10px"}
                  mb="24px"
                  border="1px solid #E1E1E1"
                >
                  <h2>
                    <AccordionButton color="#333" p="0 0 0 18px !important">
                      <Box
                        as={Flex}
                        flex="1"
                        fontSize={{ base: "sm", md: "md" }}
                        textAlign="left"
                        alignItems={"center"}
                        gap="1rem"
                        color="#333"
                      >
                        <Text>0{index + 1}</Text>
                        {items.question}
                      </Box>
                      <Box>
                        <Image src="/Asset/Add.svg" h="2.9rem" />
                      </Box>
                    </AccordionButton>
                  </h2>
                  <AccordionPanel
                    color="#333"
                    fontSize={{ base: "sm", md: "md" }}
                    pb={4}
                  >
                    {items.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Flex>
        </ButtomAnimation>
      </Container>
  );
};

export default FAQ;
