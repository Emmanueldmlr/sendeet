"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Stack,
  Text,
  chakra,
  Link,
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { usePathname } from "next/navigation";
import CustomInput from "@/app/components/ui/CustomInput";
import { Form, Formik } from "formik";
import { initialSignInFormValues } from "./data";
import { signInFormValidationSchema } from "./validations";
import { SignInFormValues } from "./types";
import apiRequest from "@/utils/api";
import { toast } from "react-toastify";

const SigninPage = () => {
  const pathname = usePathname();
  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (values: SignInFormValues) => {
    setLoading(true);
    const response = await apiRequest(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/login`,
      "POST",
      values
    );
    setLoading(false);

    if (response.data.status) {
      router.push("/dashboard");
    }

    toast.error(response.data.error_message);
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
          <Formik
            initialValues={initialSignInFormValues}
            validationSchema={signInFormValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form noValidate>
                <Box flexDir={"column"} display="flex" gap="1.5rem" w="100%">
                  <CustomInput
                    label="Email Address"
                    name="username"
                    type="text"
                    placeholder="Enter your email address"
                    isRequired
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    isRequired
                  />
                  <Flex
                    flexDir={"row"}
                    alignItems={"right"}
                    justifyContent={"right"}
                  >
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
                    isDisabled={!(isValid && dirty)}
                    isLoading={loading}
                    loadingText={"Submitting"}
                  >
                    Log In
                  </Button>
                </Box>
              </Form>
            )}
          </Formik>
        </Stack>
      </Container>
    </Box>
  );
};

export default SigninPage;
