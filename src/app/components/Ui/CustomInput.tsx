import React, { useState } from "react";
import { useField, FieldHookConfig } from "formik";
import {
  Input,
  FormControl,
  FormLabel,
  InputProps,
  FormErrorMessage,
  InputGroup,
  InputLeftAddon,
  Flex,
  InputRightElement,
  Button,
} from "@chakra-ui/react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";

interface CustomInputProps extends InputProps {
  label?: string;
  name: string;
  type: string;
  placeholder?: string;
  isRequired?: boolean;
  leftAddOnText?: string;
}

const CustomInput = (props: CustomInputProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(!show);
  };

  const {
    label,
    type,
    id,
    name,
    placeholder,
    isRequired,
    leftAddOnText,
    ...chakraProps
  } = props;

  return (
    <FormControl
      isInvalid={!!(meta.touched && meta.error)}
      isRequired={isRequired}
    >
      {label && (
        <FormLabel
          htmlFor={props.id || props.name}
          color="#1F1F1F"
          fontFamily={"Outfit"}
        >
          {label}
        </FormLabel>
      )}
      {type !== "password" ? (
        <>
          {!leftAddOnText ? (
            <Input
              {...field}
              id={id}
              name={name}
              type={type}
              placeholder={placeholder}
              required={isRequired}
              {...(chakraProps as InputProps)}
              fontSize={"sm"}
              size="lg"
              borderRadius="4px"
              border="0.662px  solid  #EEE"
              bg={"#fff"}
              _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
              _hover={{ border: "0.662px solid  #EEE" }}
            />
          ) : (
            <>
              <InputGroup size="lg">
                <InputLeftAddon>{leftAddOnText}</InputLeftAddon>
                <Input
                  {...field}
                  id={id}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  required={isRequired}
                  {...(chakraProps as InputProps)}
                  fontSize={"sm"}
                  size="lg"
                  borderRadius="4px"
                  border="0.662px  solid  #EEE"
                  bg={"#fff"}
                  _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
                  _hover={{ border: "0.662px solid  #EEE" }}
                />
              </InputGroup>
            </>
          )}
        </>
      ) : (
        <InputGroup as={Flex} alignItems={"center"} justifyContent={"center"}>
          <Input
            {...field}
            id={id}
            name={name}
            type={show ? "text" : "password"}
            placeholder={placeholder}
            required={isRequired}
            {...(chakraProps as InputProps)}
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
      )}
      {meta.touched && meta.error ? (
        <FormErrorMessage>{meta.error}</FormErrorMessage>
      ) : null}
    </FormControl>
  );
};

export default CustomInput;
