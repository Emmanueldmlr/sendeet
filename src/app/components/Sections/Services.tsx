import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  Button,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import SectionWrapper from "../Ui/SectionWrapper";
import { SERVICES } from "@/app/Data/SectionDatas";
import LeftAnimation from "../Animation/LeftAnimation";
import RightAnimation from "../Animation/RightAnimation";

const Services = () => {
  return (
    <Box>
      <Container maxW={"1200px"}>
        <Flex
          flexDir={"row"}
          alignItems={""}
          justifyContent={"center"}
          gap="1rem"
        >
          <LeftAnimation duration={0.5}>
            <Stack
              gap={{ base: "2rem", xl: "2rem" }}
              py={{ base: "2rem", xl: "5rem" }}
            >
              <Text
                fontSize={{ base: "xs", xl: "12px" }}
                fontWeight={"500"}
                lineHeight={"18px"}
                color="#8E8E8E"
              >
                OUR BEST SERVICES FOR YOU
              </Text>
              <Heading
                fontSize={{ base: "24px", xl: "32px" }}
                fontWeight={"500"}
                color={"#1F1F1F"}
              >
                We manage logistics services for
                <chakra.br display={{ base: "none", md: "flex" }} /> individuals
                and businesses
              </Heading>
              <SimpleGrid
                columns={{ base: 1, md: 2, xl: 2 }}
                spacing={{ base: "3rem", lg: "10" }}
              >
                {SERVICES.map((item, index) => (
                  <LeftAnimation duration={0.5} key={index}>
                    <Flex
                      flexDir={"column"}
                      alignItems={"left"}
                      justifyContent={"left"}
                      gap={"1rem"}
                      px={{ base: "1.9rem", lg: "0rem" }}
                    >
                      <HStack alignItems={"none"} gap="1rem">
                        <Icon as={item.icon} fontSize={"30px"} />
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
              <Flex
                alignItems={{ base: "center", xl: "left" }}
                justifyContent={{ base: "center", xl: "left" }}
                mt={{ base: "1rem", lg: "1rem" }}
              >
                <Button
                  h="40px"
                  w={{ base: "100%", xl: "250px" }}
                  mx={{ base: "2rem", lg: "1rem" }}
                  variant="solid"
                >
                  Schedule a Delivery/Pickup
                </Button>
              </Flex>
            </Stack>
          </LeftAnimation>
          <RightAnimation delay={0.5}>
            <Box display={{ base: "none", xl: "flex" }}>
              <Image
                src="/Asset/man carrying box 1.png"
                w="1900px"
                h="650px"
                mt="-0.8rem"
              />
            </Box>
          </RightAnimation>
        </Flex>
      </Container>
    </Box>
  );
};

export default Services;
