"use client";
import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import PageBanner from "@/app/components/ui/PageBanner";
import {
  Avatar,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Link,
  Stack,
  Text,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { MdOutlineAddLocation } from "react-icons/md";

const PersonalInfopage = () => {
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Profile" />
      <Flex
        mt={{ base: "3rem", lg: "0rem" }}
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "30px", xl: "0px" }}
      >
        <Text
          fontSize={{ base: "15px", xl: "18px" }}
          color="#8E8E8E"
          fontWeight={"500"}
        >
          Personal Information
        </Text>
        <Button w={{ base: "71px", xl: "150px" }}>Update</Button>
      </Flex>
      <Stack alignItems={"center"} justifyContent={"center"}>
        <Avatar name="mark john" size={{ base: "lg", xl: "xl" }} />
      </Stack>
      <Flex px={{ base: "2rem", xl: "0rem" }}>
        {" "}
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
          <Flex flexDir={{ base: "column", md: "row" }} gap="1.5rem" w="100%">
            <FormControl
              as={Flex}
              flexDir={{ base: "column", xl: "row" }}
              alignItems={{ base: "left", xl: "center" }}
            >
              <FormLabel
                w="30%"
                color="#1F1F1F"
                fontFamily={"Outfit"}
                display={{ base: "flex", xl: "none" }}
              >
                First Name
              </FormLabel>
              <FormLabel
                display={{ base: "none", xl: "flex" }}
                w="95%"
                color="#1F1F1F"
                fontFamily={"Outfit"}
              >
                Name
              </FormLabel>
              <Input
                name="Full name"
                type="text"
                placeholder="Full name"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
            </FormControl>{" "}
            <FormControl
              as={Flex}
              flexDir={{ base: "column", xl: "row" }}
              alignItems={{ base: "left", xl: "center" }}
            >
              <FormLabel
                display={{ base: "flex", xl: "none" }}
                w="30%"
                color="#1F1F1F"
                fontFamily={"Outfit"}
              >
                Last Name
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Last Name"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
            </FormControl>
          </Flex>
          <FormControl
            as={Flex}
            flexDir={{ base: "column", xl: "row" }}
            alignItems={{ base: "left", xl: "center" }}
          >
            <FormLabel w="30%" color="#1F1F1F" fontFamily={"Outfit"}>
              Phone Number
            </FormLabel>

            <InputGroup size="lg">
              <InputLeftAddon>+234</InputLeftAddon>
              <Input
                name=""
                type="number"
                placeholder="Enter your Phone Number"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
            </InputGroup>
          </FormControl>
          <FormControl
            as={Flex}
            flexDir={{ base: "column", xl: "row" }}
            alignItems={{ base: "left", xl: "center" }}
          >
            <FormLabel
              w={{ base: "100%", xl: "30%" }}
              color="#1F1F1F"
              fontFamily={"Outfit"}
            >
              Additional Phone Number
            </FormLabel>
            <InputGroup size="lg">
              <InputLeftAddon>+234</InputLeftAddon>
              <Input
                name=""
                type="number"
                placeholder="Enter your Phone Number"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
            </InputGroup>
          </FormControl>
          <FormControl
            as={Flex}
            flexDir={{ base: "column", xl: "row" }}
            alignItems={{ base: "left", xl: "center" }}
          >
            <FormLabel w="30%" color="#1F1F1F" fontFamily={"Outfit"}>
              Address
            </FormLabel>

            <InputGroup
              as={Flex}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Input
                name="address"
                placeholder="Enter your Address"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
              <InputRightElement>
                <MdOutlineAddLocation />
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl
            as={Flex}
            flexDir={{ base: "column", xl: "row" }}
            alignItems={{ base: "left", xl: "center" }}
          >
            <FormLabel
              w={{ base: "100%", xl: "30%" }}
              color="#1F1F1F"
              fontFamily={"Outfit"}
            >
              Additional Address
            </FormLabel>
            <InputGroup
              as={Flex}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Input
                name="password"
                placeholder="Enter your Additional Address"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
              <InputRightElement>
                {" "}
                <MdOutlineAddLocation />
              </InputRightElement>
            </InputGroup>
          </FormControl>
        </chakra.form>
      </Flex>
    </PageWrapper>
  );
};

export default PersonalInfopage;
