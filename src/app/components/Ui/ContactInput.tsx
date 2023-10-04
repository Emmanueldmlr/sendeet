import { FormControl, Input, chakra } from "@chakra-ui/react";
import React from "react";

const ContactInput = ({
  name,
  type,
  placeholder,
}: {
  name: string;
  type: string;
  placeholder: string;
}) => {
  return (
    <FormControl>
      <Input />
    </FormControl>
  );
};

export default ContactInput;
