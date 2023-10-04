"use client";
import {
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Input,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";

import { WhiteLogo } from "../Ui/Logo";
import { AiOutlineCopyright } from "react-icons/ai";
import { IoLogoTwitter } from "react-icons/io";
import { BsFacebook } from "react-icons/bs";
import { RxInstagramLogo } from "react-icons/rx";
const Footer = () => {
  return (
    <Box
      background={
        "radial-gradient(67.33% 56.97% at 56.46% 43.4%, rgba(31, 31, 31, 0.88) 0%, #1F1F1F 100%)"
      }
    >
      <Box px="1rem" pb="6rem" pt="4rem" borderBottom={"1px solid #A19F9F"}>
        <Flex
          flexDirection={"column"}
          alignItems={{ base: "left", xl: "center" }}
          justifyContent={{ base: "", xl: "center" }}
          gap="70px"
        >
          <SimpleGrid
            columns={{ base: 1, md: 2, xl: 4 }}
            spacing={{ base: "2rem", lg: "7rem" }}
          >
            <Stack color={"#fff"} gap={"1rem"}>
              {" "}
              <WhiteLogo />
              <Heading
                color={"primary"}
                fontSize={{ base: "sm", xl: "15px" }}
                fontWeight={"500"}
              >
                Contact Us
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                +2348146523620
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                sendeetlogistics@gmail.com
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Obokun Street, Eleyele, Ibadan
              </Heading>
            </Stack>

            <Stack color="#F5F5F5" gap={"1rem"}>
              <Heading
                fontSize={{ base: "sm", xl: "15px" }}
                fontWeight={"500"}
                color={"primary"}
              >
                Resources
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Developers - API Docs
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                FAQ
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Customer care
              </Heading>
            </Stack>
            <Stack color={"#fff"} gap={"1rem"}>
              <Heading
                fontSize={{ base: "sm", xl: "15px" }}
                fontWeight={"500"}
                color={"primary"}
              >
                Company
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Terms and Conditions
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Privacy Policy
              </Heading>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Customer care
              </Heading>
            </Stack>
            <Stack color="#F5F5F5" gap={"1rem"}>
              <Heading fontSize={{ base: "sm", xl: "15px" }} fontWeight={"500"}>
                Join our Newsletter
              </Heading>
              <Input
                border={"none"}
                placeholder="Enter your Email Address"
                borderBottom={"1px solid #4b4b4b"}
                borderRadius={"none"}
                _placeholder={{ fontFamily: "Outfit", color: "#4b4b4b" }}
              />
              <Button>Subscribe</Button>
            </Stack>
          </SimpleGrid>
        </Flex>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={{ base: "center", xl: "center" }}
        flexDirection={"row"}
        pt="1rem"
        pb="2rem"
        px={{ base: "2rem", xl: "" }}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, xl: 3 }}
          spacing={{ base: "1rem", lg: "28rem" }}
          color="#DADADA"
        >
          <HStack
            color="#8E8E8E"
            alignItems={"center"}
            justifyContent={"center"}
          >
            <AiOutlineCopyright />
            <Heading fontWeight={"500"} fontSize={{ base: "xs", xl: "xs" }}>
              2023 SENDEET
            </Heading>
          </HStack>

          <Heading
            fontWeight={"500"}
            color="#8E8E8E"
            fontSize={{ base: "xs", xl: "xl" }}
          >
            <HStack
              color={"#fff"}
              gap="1rem"
              alignItems={"center"}
              justifyContent={"center"}
              fontSize={{ base: "24px", xl: "24px" }}
            >
              <IoLogoTwitter />
              <BsFacebook />
              <RxInstagramLogo />
            </HStack>
          </Heading>
          <Heading
            fontWeight={"500"}
            fontSize={{ base: "xs", xl: "xs" }}
            color="#8E8E8E"
          >
            All rights reserved
          </Heading>
        </SimpleGrid>
      </Flex>
    </Box>
  );
};

export default Footer;
