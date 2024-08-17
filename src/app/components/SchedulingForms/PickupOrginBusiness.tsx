import React from "react";
import PageWrapper from "../Dashboard/PageWrapper";
import {
  Stack,
  Heading,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Select,
  Container,
  Button,
} from "@chakra-ui/react";
import DashHeader from "../Dashboard/DashHeader";
import Stepper from "../Ui/Stepper";

const PickupOrginBusiness = ({
  form,
  setForm,
}: {
  form: any;
  setForm: any;
}) => {
  return (
    <PageWrapper gap="2.5rem">
      <Stack
        gap="1rem"
        mt={{ base: "2rem", xl: "0rem" }}
        px={{ base: "30px", xl: "0px" }}
      >
        <DashHeader pagename="Pickup Origin and Destination" />
        <Heading
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"40px"}
          display={{ base: "flex", xl: "none" }}
        >
          Pickup Origin and Destination
        </Heading>
        <Heading fontSize={{ base: "sm", xl: "18px" }} fontWeight={"500"}>
          Complete the shipment details, and we'll customize our services to
          your needs.
          <br /> Choose the best option and proceed with booking.
        </Heading>
      </Stack>
      <Stepper form={form} />

      <Stack px={{ base: "30px", xl: "0px" }} maxW={"1000px"} gap="1.5rem">
        <Text color="#8E8E8E" fontSize={{ base: "15px", xl: "18px" }}>
          From (Sender)
        </Text>
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel w="30%" color="#1F1F1F" fontFamily={"Outfit"}>
              Business Name
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
          </FormControl>{" "}
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Business Email(Optional)
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
          </FormControl>{" "}
        </HStack>
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Business Phone Number
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
          </FormControl>{" "}
          <FormControl>
            <FormLabel w="30%" color="#1F1F1F" fontFamily={"Outfit"}>
              Business Address
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
          </FormControl>{" "}
        </HStack>
        <FormControl>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            How do you want your parcel delivered?
          </FormLabel>
          <Select
            name="email"
            placeholder=""
            fontSize={"sm"}
            size="lg"
            w={{ base: "100%", xl: "49%" }}
            borderRadius="4px"
            bg={"#fff"}
            _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
            _hover={{ border: "0.662px solid  #EEE" }}
          >
            <option>Car</option>
          </Select>
        </FormControl>
      </Stack>
      <Stack px={{ base: "30px", xl: "0px" }} maxW={"1000px"} gap="1.5rem">
        <Text color="#8E8E8E" fontSize={{ base: "15px", xl: "18px" }}>
          To (Receiver)
        </Text>
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel w="30%" color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s Name
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
          </FormControl>{" "}
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s Email(Optional)
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
          </FormControl>{" "}
        </HStack>
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s Phone Number
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
          </FormControl>{" "}
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s additional Phone Number
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
          </FormControl>{" "}
        </HStack>
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s Address
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
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              Receiver’s Address (Landmark)
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
        </HStack>
        <Button
          onClick={() => {
            setForm(3);
          }}
          p="18px 80px"
          h="60px"
          w={{ base: "100%", xl: "300px" }}
        >
          Describe Your Package
        </Button>
      </Stack>
    </PageWrapper>
  );
};

export default PickupOrginBusiness;
