import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  chakra,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import React from "react";
import { SERVICES } from "@/app/Data/SectionDatas";
import LeftAnimation from "../Animation/LeftAnimation";
import RightAnimation from "../Animation/RightAnimation";

const Services = () => {
  return (
    <Box padding={{ base: "48px 25px", md: "64px 0" }}>
      <Container maxW={"1300px"}>
        <Grid
          templateColumns={{
            base: "1fr",
            md: "1fr 1fr",
          }}
          gap={{ base: "40px", md: "0" }}
        >
          <GridItem>
            <LeftAnimation duration={0.5}>
              <Box
                display="flex"
                justifyContent={{ md: "flex-end", base: "center" }}
              >
                <Image
                  src="/Asset/delivery-service.png"
                  h={{ base: "329px", md: "529px" }}
                  w="474px"
                />
              </Box>
            </LeftAnimation>
          </GridItem>
          <GridItem>
            <RightAnimation delay={0.5}>
              <Stack pl={{ md: "40px", base: "0" }}>
                <Heading
                  fontSize={{ base: "24px", xl: "32px" }}
                  fontWeight={"500"}
                  color={"#1F1F1F"}
                >
                  Experience hassle-free delivery service with the{" "}
                  <chakra.span color="#8E8E8E">
                    premier courier companies near you
                  </chakra.span>
                </Heading>
                <SimpleGrid
                  columns={1}
                  spacing={{ base: "3rem", lg: "24px" }}
                  mt="16px"
                >
                  {SERVICES.map((item, index) => (
                    <LeftAnimation duration={0.5} key={index}>
                      <Flex
                        flexDir={"column"}
                        alignItems={"left"}
                        justifyContent={"left"}
                        p={"10px 20px"}
                        borderBottom={
                          index < SERVICES.length - 1
                            ? "1px solid #E1E1E1"
                            : "none"
                        }
                      >
                        <HStack alignItems={"none"} gap="1rem">
                          <Image
                            src={item.src}
                            h="64px"
                            w="64px"
                            borderRadius={"50%"}
                            padding={"12px"}
                            bg="#FFF3E8"
                          />
                          <Stack gap="1rem">
                            <Heading
                              color="#333"
                              fontSize={{ base: "lg", lg: "20px" }}
                            >
                              {item.title}
                            </Heading>
                            <Text
                              color="#7B7B7B"
                              fontSize={{ base: "sm", lg: "14px" }}
                            >
                              {item.body}
                            </Text>
                          </Stack>
                        </HStack>
                      </Flex>
                    </LeftAnimation>
                  ))}
                </SimpleGrid>
              </Stack>
            </RightAnimation>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;
