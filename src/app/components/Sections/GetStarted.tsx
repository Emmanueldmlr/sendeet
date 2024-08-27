import {
  Box,
  Container,
  Heading,
  Flex,
  Stack,
  Image,
  chakra,
  Button,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GETSTARTED } from "@/app/Data/SectionDatas";
import LeftAnimation from "../Animation/LeftAnimation";

const GetStarted = () => {
  return (
    <Container
      maxW={"100%"}
      display={"flex"}
      flexDir={"column"}
      gap="48px"
      justifyContent={"center"}
      alignItems="center"
      bg={"#FAFAFA"}
      p={{ base: "24px", md: "48px", lg: "64px" }}
    >
      <Heading color="#1F1F1F" fontSize={{ base: "24px", md: "28px", lg: "32px" }} fontWeight={"500"}>
        Your Journey <chakra.span color="#8E8E8E">Starts Here</chakra.span>
      </Heading>
      <Stack>
        <Flex
          maxW="1200px"
          mx="auto"
          justify="center"
          align="center"
          textAlign="center"
          flexWrap="wrap"
          gap={{ base: "24px", md: "40px" }}
          position={"relative"}
        >
          <Box
            position="absolute"
            top="50px"
            left={{ base: "0", md: "calc(50% - 360px)" }}
            right={{ base: "0", md: "calc(50% - 360px)" }}
            h="1px"
            bg="#DDD"
            zIndex="200"
            w={{ base: "100%", md: "70%" }}
            mx="auto"
            display={{ base: "none", xl: "block" }}
          />
          {GETSTARTED.map((i, index) => (
            <LeftAnimation key={index} duration={0.5}>
              <Box
                display={"flex"}
                flexDir={"column"}
                alignItems={"center"}
                w={{ base: "100%", md: "100%", lg: "270px" }}
                gap="16px"
                textAlign="center"
                flex="1 1 100%"
              >
                <Image
                  src={i.image}
                  h={{ base: "70px", md: "90px" }}
                  w={{ base: "70px", md: "90px" }}
                  bg="#EEE"
                  padding={"15px"}
                  borderRadius={"50px"}
                  zIndex={"999999999"}
                />
                <Heading
                  as="h3"
                  fontFamily={"Outfit"}
                  fontSize={{ base: "16px", md: "18px" }}
                  fontWeight={"500"}
                >
                  {i.title}
                </Heading>
                <Text
                  fontFamily={"Lora"}
                  color={"#8E8E8E"}
                  fontSize={{ base: "12px", md: "14px" }}
                  fontWeight={"500"}
                >
                  {i.body}
                </Text>
              </Box>
            </LeftAnimation>
          ))}
        </Flex>
      </Stack>
      <Button
        colorScheme="orange"
        w={{ base: "full", md: "196px" }}
        maxW="100%"
        mt={{ base: "24px", md: "32px" }}
        height={"50px"}
      >
        See available rate
      </Button>
    </Container>
  );
};

export default GetStarted;
