import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import React from "react";
import { GETSTARTED } from "@/app/Data/SectionDatas";
import LeftAnimation from "../Animation/LeftAnimation";

const GetStarted = () => {
  return (
    <Box py="2rem">
      <Container maxW={"1200px"}>
        <Stack>
          <Stack
            backgroundImage="url('/Asset/Column.png')"
            backgroundPosition={"center"}
            backgroundRepeat={"no-repeat"}
            backgroundSize={"cover"}
            w="100%"
            textAlign={"center"}
            borderRadius={"16px"}
            padding={{
              base: "40px 40px 108px 40px",
              xl: "64px 184px 148px 184px",
            }}
            gap="1rem"
          >
            <Text
              fontSize={{ base: "xs", xl: "12px" }}
              color="#8E8E8E"
              fontWeight={"500"}
            >
              HOW TO GET STARTED
            </Text>
            <Heading
              fontSize={{ base: "24px", xl: "32px" }}
              color="#fff"
              fontWeight={"400"}
            >
              Start sending your package now!
            </Heading>
            <Text
              fontSize={{ base: "xs", xl: "15px" }}
              color="#fff"
              fontWeight={"500"}
            >
              Experience hassle-free delivery service without any complications
              with the premier courier company.
            </Text>
          </Stack>
          <SimpleGrid
            columns={{ base: 1, xl: 3 }}
            mt="-6rem"
            spacing={{ base: 4, xl: 10 }}
          >
            {GETSTARTED.map((i, index) => (
              <LeftAnimation key={index} duration={0.5}>
                <Stack
                  alignItems={"center"}
                  textAlign={"center"}
                  gap={{ base: "0.5rem", xl: "1.5rem" }}
                >
                  <Image src={i.image} w="50%" />
                  <Heading
                    color={"#1F1F1F"}
                    fontSize={"18px"}
                    fontWeight={"500"}
                  >
                    {i.title}
                  </Heading>
                  <Heading
                    color="#8E8E8E"
                    fontSize={"16px"}
                    fontWeight={"500"}
                    px={{ base: "2rem", xl: "0rem" }}
                  >
                    {i.body}
                  </Heading>
                </Stack>
              </LeftAnimation>
            ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
  );
};

export default GetStarted;
