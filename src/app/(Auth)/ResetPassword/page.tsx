"use client";
import {
  Container,
  Stack,
  Heading,
  chakra,
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  Flex,
  InputRightElement,
  Text,
  Box,
  Link,
  useToast,
} from "@chakra-ui/react";

import { usePathname } from "next/navigation";
import React, { useState, useRef } from "react";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { useRouter } from "next/navigation";

const RegisterationPage = () => {
  const toast = useToast();
  const pathname = usePathname();

  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";
  const [show, setShow] = useState(false);
  const [errMsg, setErrMsg] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const router = useRouter();

  const errRef = useRef<HTMLInputElement | null>(null);

  //functions
  const handleShow = () => {
    setShow(!show);
  };
  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://dev-app.dailys.market:37555/api/auth/reset-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            APIKey: "80109414-c38e-4bed-b251-190ee1f88190",
          },
          body: JSON.stringify({
            username: email,
            password,
            confirmPassword,
          }),
        }
      );
      toast({
        title: "Login Successful.",
        description:
          "Welcome back! You have successfully logged in to your account.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/dashboard");
    } catch (err) {
      const errorResponse = err as { response?: { status: boolean | number } };
      if (!errorResponse?.response) {
        setErrMsg("No Server Response");

        toast({
          title: "No Server Response",
          description: "No response",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (errorResponse.response.status === 400) {
        setErrMsg("Missing Username or Password");
        toast({
          title: "Field missing",
          description: "Missing Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else if (errorResponse.response.status === false) {
        setErrMsg("Unauthorized");
        toast({
          title: "Unauthorized",
          description: "Please you dont have an account yet",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        setErrMsg("Login Failed");
        toast({
          title: "Login Failed",
          description: "Missing Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      errRef.current?.focus();
    }
  };
  return (
    <Box my={{ base: "8rem", xl: "10rem" }}>
      <Container
        px={{ base: "2rem", xl: "0rem" }}
        maxW={"500px"}
        textAlign={{ base: "left", md: "center" }}
      >
        <Stack gap="1.5rem">
          {" "}
          <Text
            color="#1F1F1F"
            fontWeight={"500"}
            fontSize={{ base: "18px", md: "28px" }}
          >
            Reset Your Password
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
            onSubmit={handleSubmit}
            // ref={formRef}
          >
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Email
              </FormLabel>
              <Input
                name="email"
                type="email"
                placeholder="Enter your Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
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
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
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
            <Button
              variant={"solid"}
              size={"xl"}
              color="#fff"
              type="submit"
              w="100%"
            >
              Reset Password
            </Button>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  );
};

export default RegisterationPage;
