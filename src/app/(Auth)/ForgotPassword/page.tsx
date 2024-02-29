"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/features/auth/auth-slice";
import { useLoginMutation } from "@/redux/features/auth/authApiSlice";
import {
  Box,
  Button,
  Container,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  Stack,
  Text,
  chakra,
  Link,
  InputGroup,
  InputRightElement,
  Spinner,
  useToast,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { usePathname } from "next/navigation";

export type LoginAuthResponse = {
  data: {
    data: string;
  };
};
const SigninPage = () => {
  const toast = useToast();
  const pathname = usePathname();
  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const router = useRouter();
  const userRef = useRef<HTMLInputElement | null>(null);
  const errRef = useRef<HTMLInputElement | null>(null);
  const handleShow = () => {
    setShow(!show);
  };

  const [login, { isLoading }] = useLoginMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    userRef?.current?.focus();
  }, []);
  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch(
        "http://dev-app.dailys.market:37555/api/auth/forgot-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            APIKey: "80109414-c38e-4bed-b251-190ee1f88190",
          },
          body: JSON.stringify({
            username: email,
          }),
        }
      );
      setEmail("");
      setPassword("");
      toast({
        title: "Login Successful.",
        description:
          "Welcome back! You have successfully logged in to your account.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      router.push("/ResetPassword");
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
    <Box mt={{ base: "8rem", xl: "10rem" }}>
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
            Forgot Password
          </Text>
          <Heading
            display={{ base: "flex", md: "none" }}
            fontSize={{ base: "sm", xl: "md" }}
            fontWeight={"500"}
            color="#1F1F1F"
            lineHeight={"26px"}
          >
            Do Not Have an Account?{" "}
            <chakra.span pl="10px" color={"primary"} as={Link} href={Route}>
              {" "}
              {pathname === "/SignIn" ? "Create One" : "Login here"}
            </chakra.span>
          </Heading>
          <chakra.form
            onSubmit={handleSubmit}
            flexDir={"column"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            gap="1.5rem"
            w="100%"
            bg={"#fff"}
            // ref={formRef}
          >
            <FormControl>
              <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
                Email
              </FormLabel>
              <Input
                required
                ref={userRef}
                value={email}
                id="username"
                onChange={(e) => setEmail(e.target.value)}
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
            <Button
              variant={"solid"}
              size={"xl"}
              color="#fff"
              type="submit"
              w="100%"
              _hover={{ textDecor: "none" }}
            >
              {isLoading ? <Spinner /> : "Submit"}
            </Button>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  );
};

export default SigninPage;
