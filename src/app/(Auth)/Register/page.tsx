"use client";
import { Formik, Form } from "formik";
import {
  Container,
  Stack,
  Heading,
  chakra,
  Button,
  Flex,
  Text,
  Box,
  Link,
} from "@chakra-ui/react";

import { usePathname } from "next/navigation";
import React, { useState } from "react";
import CustomInput from "@/app/components/ui/CustomInput";
import { RegistrationFormValues } from "./types";
import { initialRegistrationFormValues } from "./data";
import { registrationFormValidationSchema } from "./validations";
import apiRequest from "@/utils/api";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const RegistrationPage = () => {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";

  const handleSubmit = async (values: RegistrationFormValues) => {
    setLoading(true);
    const response = await apiRequest(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/auth/user/sign-up`,
      "POST",
      values
    );
    setLoading(false);

    if (response.data.status) {
      router.push("/SignIn");
      toast.success("Registration successful. Proceed to Log in");
    }

    toast.error(response.data.error_message);
  };

  return (
    <Box my={{ base: "8rem", xl: "10rem" }}>
      <Container
        px={{ base: "2rem", xl: "0rem" }}
        maxW={"500px"}
        textAlign={{ base: "left", md: "center" }}
      >
        <Stack gap="1.5rem">
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
              {pathname === "/SignIn" ? "Create One" : "Login here"}
            </chakra.span>
          </Heading>

          <Formik
            initialValues={initialRegistrationFormValues}
            validationSchema={registrationFormValidationSchema}
            onSubmit={handleSubmit}
          >
            {({ isValid, dirty }) => (
              <Form noValidate>
                <Box flexDir="column" display="flex" gap="1.5rem">
                  <Flex
                    flexDir={{ base: "column", md: "row" }}
                    gap="1.5rem"
                    w="100%"
                  >
                    <CustomInput
                      label="First Name"
                      name="firstName"
                      type="text"
                      placeholder="First Name"
                      isRequired
                    />
                    <CustomInput
                      label="Last Name"
                      name="lastName"
                      type="text"
                      placeholder="Last Name"
                      isRequired
                    />
                  </Flex>
                  <CustomInput
                    label="Phone Number"
                    name="phoneNumber"
                    type="text"
                    placeholder="Phone Number"
                    leftAddOnText="+234"
                    isRequired
                  />
                  <CustomInput
                    label="Email Address"
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    isRequired
                  />
                  <CustomInput
                    label="Password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    isRequired
                  />
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
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
                    isDisabled={!(isValid && dirty)}
                    isLoading={loading}
                    loadingText={"Submitting"}
                  >
                    Sign Up
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

export default RegistrationPage;
