import React from "react";
import ContactInput from "./ContactInput";
import ContactTextArea from "./ContactTextArea";
import { Button, Flex, chakra } from "@chakra-ui/react";

const ContactForm = () => {
  return (
    <chakra.form
      as={Flex}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap="1.5rem"
    >
      <ContactInput type="text" name="Full_name" placeholder="Full Name" />
      <ContactInput
        type="text"
        name="email"
        placeholder="Your Email-optional"
      />
      <ContactTextArea name="message" placeholder="Talk to us" />
      <Button
        variant={"solid"}
        padding={"2rem"}
        w="208px"
        color="#fff"
        bgColor={"#CD6809"}
        _hover={{
          bg: "#CD6809",
        }}
      >
        Submit Form
      </Button>
    </chakra.form>
  );
};

export default ContactForm;
