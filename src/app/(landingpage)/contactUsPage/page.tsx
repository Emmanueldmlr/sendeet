"use client";
import { ServicesData } from "@/app/Data/PagesData";
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
  Text,
  FormControl,
  Button,
  Input,
  Spinner,
  Textarea,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import Arrowbend from "../../../../public/Icons/Arrowbend";
import ButtomAnimation from "@/app/components/Animation/ButtomAnimation";

const Contactpage = () => {
  return (
    <Box>
      <PageBanner title="Contact Us" bgImage="aboutimg.png" />
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
                We are ready to listen to what{" "}
                <chakra.br display={{ base: "none", xl: "flex" }} />
                you have to say about{" "}
                <chakra.br display={{ base: "flex", xl: "none" }} />
                <chakra.span color={"primary"}>
                  Sendeet Logistics
                </chakra.span>{" "}
                <Arrowbend pos={"absolute"} pt="1.2rem" pr="1.5rem" />
              </Heading>
            </Box>
          </LeftAnimation>
          <ButtomAnimation>
            <Flex
              flexDir={"column"}
              alignItems={"center"}
              justifyContent={"center"}
              textAlign={"left"}
              gap="1.5rem"
            >
              <Text
                color="#1F1F1F"
                lineHeight={"150%"}
                fontSize={{ base: "sm", xl: "lg" }}
              >
                If you have any questions about us, please leave a message, we
                will contact you as soon as possible and answer them.
              </Text>

              <chakra.form
                flexDir={"column"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
                gap="1.5rem"
                w="100%"
                bg={"#fff"}
                // onSubmit={handleSubmit}
                // ref={formRef}
              >
                <FormControl>
                  <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                    Name
                  </FormLabel>
                  <Input
                    name="Full_name"
                    type="text"
                    placeholder="Enter your name"
                    fontSize={"sm"}
                    size="lg"
                    borderRadius="4px"
                    border="0.662px  solid  #7B7B7B"
                    bg={"#fff"}
                    _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                    _hover={{ border: "0.662px solid  #7B7B7B" }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                    Email Address
                  </FormLabel>
                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your Email Address"
                    fontSize={"sm"}
                    size="lg"
                    borderRadius="4px"
                    border="0.662px  solid  #7B7B7B"
                    bg={"#fff"}
                    _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                    _hover={{ border: "0.662px solid  #7B7B7B" }}
                  />
                </FormControl>
                <FormControl>
                  <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                    Message
                  </FormLabel>
                  <Textarea
                    name="message"
                    placeholder="Enter your Email Message"
                    h="180px"
                    borderRadius="4px"
                    border="0.662px solid  #7B7B7B"
                    _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                    _hover={{ border: "0.662px solid  #7B7B7B" }}
                    bg={"#fff"}
                    w="100%"
                  />
                </FormControl>
                <Button
                  variant={"solid"}
                  size={"xl"}
                  color="#fff"
                  type="submit"
                  w="100%"
                >
                  Submit
                </Button>
              </chakra.form>
            </Flex>
          </ButtomAnimation>
        </Flex>
      </Container>
    </Box>
  );
};

export default Contactpage;
