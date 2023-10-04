import { FormControl, Textarea, chakra } from "@chakra-ui/react";
import React from "react";

const ContactTextArea = ({
  name,
  placeholder,
}: {
  name: string;
  placeholder: string;
}) => {
  return (
    <FormControl>
      {" "}
      <Textarea />
    </FormControl>
  );
};

export default ContactTextArea;
