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
  const [user, setUser] = useState("");
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
  }, [user, password]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const userData = await login({
        user,
        password,
      }).unwrap();
      dispatch(setCredentials({ ...userData, user }));
      setUser("");
      setPassword("");

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
          title: "Lofin Failed",
          description: "Missing Username or Password",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      }
      errRef.current?.focus();
    }
  };
  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setUser(e.target.value);

  const handlePasswordInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(e.target.value);

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
            Log in to your Sendeet account
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
          <Button
            borderRadius={"50px"}
            border={"1px solid #CACACA "}
            color={"#1F1F1F"}
            variant={"outline"}
            fontSize={"sm"}
            size={"xl"}
            leftIcon={<FcGoogle size="20px" />}
          >
            Continue with Google
          </Button>
          <HStack>
            <Box h="1px" bg="#CACACA" w="100%" />
            <Heading fontSize={"16px"} fontWeight={"500"} color="#8E8E8E">
              OR
            </Heading>
            <Box h="1px" bg="#CACACA" w="100%" />
          </HStack>
          <chakra.form
            onSubmit={handleSubmit}
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
                Email
              </FormLabel>
              <Input
                required
                ref={userRef}
                value={user}
                id="username"
                onChange={handleUserInput}
                // name="email"
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
                  required
                  value={password}
                  id="password"
                  type={show ? "text" : "password"}
                  placeholder="Enter your password"
                  fontSize={"sm"}
                  size="lg"
                  borderRadius="4px"
                  border="0.662px  solid  #EEE"
                  bg={"#fff"}
                  _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                  _hover={{ border: "0.662px solid  #EEE" }}
                  onChange={handlePasswordInput}
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
              _hover={{ textDecor: "none" }}
            >
              {isLoading ? <Spinner /> : "Log In"}
            </Button>
          </chakra.form>
        </Stack>
      </Container>
    </Box>
  );
};

export default SigninPage;
