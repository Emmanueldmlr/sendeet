"use client";
import {
  Container,
  Stack,
  Heading,
  chakra,
  Button,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Flex,
  InputRightElement,
  InputLeftAddon,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

const RegisterationPage = () => {
  const pathname = usePathname();

  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };
  return (
    <Box my={{ base: "8rem", xl: "10rem" }}>
      <Container maxW={"500px"} textAlign={{ base: "left", md: "center" }}>
        <Stack gap="1.5rem">
          {" "}
          <Text
            color="#1F1F1F"
            fontWeight={"500"}
            fontSize={{ base: "18px", md: "28px" }}
          >
            Create your Sendeet account
          </Text>
          <Heading
            display={{ base: "flex", md: "none" }}
            fontSize={{ base: "sm", xl: "md" }}
            fontWeight={"500"}
            color="#1F1F1F"
            lineHeight={"26px"}
          >
            {pathname === "/SignIn"
              ? " Do Not Have an Account?"
              : "Have an Account?"}
            <chakra.span pl="10px" color={"primary"} as={Link} href={Route}>
              {" "}
              {pathname === "/SignIn" ? "Create One" : "Login here"}
            </chakra.span>
          </Heading>
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
              <FormControl>
                <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                  First Name
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
              <FormControl>
                <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
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
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Phone Number
              </FormLabel>

              <InputGroup size="lg">
                <InputLeftAddon children="+234" />
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
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Email
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                fontSize={"sm"}
                size="lg"
                borderRadius="4px"
                border="0.662px  solid  #EEE"
                bg={"#fff"}
                _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                _hover={{ border: "0.662px solid  #EEE" }}
              />
            </FormControl>
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Password
              </FormLabel>

              <InputGroup
                as={Flex}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  fontSize={"sm"}
                  size="lg"
                  borderRadius="4px"
                  border="0.662px  solid  #EEE"
                  bg={"#fff"}
                  _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                  _hover={{ border: "0.662px solid  #EEE" }}
                />
                <InputRightElement>
                  <Button variant={"unstyled"} size="lg" onClick={handleShow}>
                    {show ? (
                      <AiFillEyeInvisible color="#4B4B4B" />
                    ) : (
                      <AiFillEye color="#4B4B4B" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Confirm Password
              </FormLabel>
              <InputGroup
                as={Flex}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Input
                  name="password"
                  type={show ? "text" : "password"}
                  placeholder="Confirm password"
                  fontSize={"sm"}
                  size="lg"
                  borderRadius="4px"
                  border="0.662px  solid  #EEE"
                  bg={"#fff"}
                  _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                  _hover={{ border: "0.662px solid  #EEE" }}
                />
                <InputRightElement>
                  <Button variant={"unstyled"} size="lg" onClick={handleShow}>
                    {show ? (
                      <AiFillEyeInvisible color="#4B4B4B" />
                    ) : (
                      <AiFillEye color="#4B4B4B" />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <Flex flexDir={"row"} alignItems={"right"} justifyContent={"right"}>
              <Heading
                fontSize={"16px"}
                fontWeight={"500"}
                color={"primary"}
                as={Link}
              >
                Reset Password
              </Heading>
            </Flex>

            <Button
              variant={"solid"}
              size={"xl"}
              color="#fff"
              type="submit"
              w="100%"
            >
              Sign Up
            </Button>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegisterationPage;
