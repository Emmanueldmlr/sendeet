import {
  Stack,
  Heading,
  FormControl,
  FormLabel,
  HStack,
  Input,
  chakra,
  Text,
  SimpleGrid,
  Image,
  Box,
  Flex,
  Checkbox,
  Button,
} from "@chakra-ui/react";
import React from "react";
import DashHeader from "../Dashboard/DashHeader";
import PageWrapper from "../Dashboard/PageWrapper";
import Stepper from "../Ui/Stepper";
import { MdAdd, MdAddCircle, MdHelp, MdRemove } from "react-icons/md";
const DefaultPackage = [
  { boxsize: "Small Box", maxSize: "32x21 x1 cm", maxWeight: "3kg" },
  { boxsize: "Small Box", maxSize: "32x21 x1 cm", maxWeight: "3kg" },
  { boxsize: "Small Box", maxSize: "32x21 x1 cm", maxWeight: "3kg" },
  { boxsize: "Small Box", maxSize: "32x21 x1 cm", maxWeight: "3kg" },
];

const DescribePackage = ({ form, setForm }: { form: any; setForm: any }) => {
  return (
    <PageWrapper gap="2.5rem">
      <Stack
        gap="1rem"
        mt={{ base: "2rem", xl: "0rem" }}
        px={{ base: "30px", xl: "0px" }}
      >
        <DashHeader pagename="Describe Your Package" />
        <Heading
          fontSize={"18px"}
          fontWeight={"500"}
          lineHeight={"40px"}
          display={{ base: "flex", xl: "none" }}
        >
          Describe Your Package
        </Heading>
      </Stack>
      <Stepper form={form} />
      <Stack px={{ base: "30px", xl: "0px" }} maxW={"1000px"} gap="1.5rem">
        <HStack flexDir={{ base: "column", xl: "row" }} gap="1rem">
          <FormControl>
            <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
              What is your item weight in kg?{" "}
              <chakra.span color={"primary"}>*</chakra.span>
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
              What category does your package fall?{" "}
              <chakra.span color={"primary"}>*</chakra.span>
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
        <Stack>
          <Text fontSize={"12px"} color="#563AFF">
            {" "}
            How heavy is your item?
          </Text>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Item dimensions
          </FormLabel>
          <HStack>
            <Input
              name="email"
              type="email"
              placeholder="Length (cm)"
              fontSize={"sm"}
              size="lg"
              borderRadius="4px"
              border="0.662px  solid  #EEE"
              bg={"#fff"}
              _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
              _hover={{ border: "0.662px solid  #EEE" }}
            />
            <Input
              name="email"
              type="email"
              placeholder="Width (cm)"
              fontSize={"sm"}
              size="lg"
              borderRadius="4px"
              border="0.662px  solid  #EEE"
              bg={"#fff"}
              _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
              _hover={{ border: "0.662px solid  #EEE" }}
            />
            <Input
              name="email"
              type="email"
              placeholder="Height (cm)"
              fontSize={"sm"}
              size="lg"
              borderRadius="4px"
              border="0.662px  solid  #EEE"
              bg={"#fff"}
              _placeholder={{ color: "#C6C5C5", fontSize: "sm" }}
              _hover={{ border: "0.662px solid  #EEE" }}
            />
          </HStack>
        </Stack>
        <Stack>
          <FormLabel color="#1F1F1F" fontFamily={"Outfit"}>
            Not sure about the sizes?
          </FormLabel>
          <Text fontSize={"14px"} color="#4B4B4B">
            Select our default measurement that best suits your package
          </Text>

          <SimpleGrid
            columns={{ base: 2, xl: 4 }}
            spacing={{ base: "0.5rem", xl: "2rem" }}
          >
            {DefaultPackage.map((item, index) => (
              <Stack
                key={index}
                border={"1px solid  #eee"}
                borderRadius={"8px"}
                p="24px 12px"
              >
                <Text
                  fontWeight={"600"}
                  fontFamily={"Outfit"}
                  fontSize={{ base: "xs", xl: "16px" }}
                  color="#1F1F1F"
                >
                  {item.boxsize}
                </Text>
                <Image src="/dashicon/package.svg" alt="" />
                <HStack
                  justifyContent={"space-between"}
                  flexDir={{ base: "column", xl: "row" }}
                >
                  <Stack>
                    <Text
                      fontFamily={"Outfit"}
                      fontSize={{ base: "xs", xl: "14px" }}
                      color="#1F1F1F"
                      fontWeight={"600"}
                    >
                      Max Size
                    </Text>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"center"}
                      w={{ base: "", xl: "84px" }}
                      h={{ base: "", xl: "38px" }}
                      bg="#fff"
                      border={"1px solid #eee "}
                      color={"#CACACA"}
                    >
                      <Text fontSize={{ base: "xs", xl: "14px" }}>
                        {item.maxSize}
                      </Text>
                    </Flex>
                  </Stack>
                  <Stack>
                    <Text
                      fontFamily={"Outfit"}
                      fontSize={{ base: "xs", xl: "14px" }}
                      color="#1F1F1F"
                      fontWeight={"600"}
                    >
                      Max Weight
                    </Text>
                    <Flex
                      alignItems={"center"}
                      justifyContent={"center"}
                      w={{ base: "", xl: "84px" }}
                      h={{ base: "", xl: "38px" }}
                      bg="#fff"
                      border={"1px solid #eee "}
                      color={"#CACACA"}
                    >
                      <Text fontSize={{ base: "xs", xl: "14px" }}>
                        {item.maxWeight}
                      </Text>
                    </Flex>
                  </Stack>
                </HStack>
              </Stack>
            ))}
          </SimpleGrid>
        </Stack>
        <HStack
          flexDir={{ base: "column", xl: "row" }}
          alignItems={{ base: "left", xl: "center" }}
          justifyContent={"space-between"}
        >
          <Stack gap="1rem">
            <HStack
              alignItems={{ base: "left", xl: "center" }}
              justifyContent={{ base: "left", xl: "center" }}
            >
              <Text
                fontWeight={{ base: "500", xl: "600" }}
                color="#1F1F1F"
                fontFamily={"Outfit"}
              >
                Item Quantity
              </Text>
              <MdHelp color="#3B82F6" size="24px" />
            </HStack>
            <HStack
              border={"1px solid #eee "}
              w="133px"
              h="30px"
              alignItems={"center"}
              justifyContent={"center"}
              gap="1.5rem"
            >
              <MdRemove size="20px" />
              <Text color="#1F1F1F" fontSize={"14px"}>
                1
              </Text>
              <MdAdd size="20px" />
            </HStack>
          </Stack>
          <Stack gap="0.5rem">
            <Text
              fontWeight={{ base: "500", xl: "600" }}
              color="#1F1F1F"
              fontFamily={"Outfit"}
            >
              My package ...
            </Text>

            <HStack alignItems={"center"} justifyContent={"left"} gap="0.5rem">
              <Checkbox />
              <Text color="#1F1F1F" fontSize={"14px"}>
                is non-stackable
              </Text>
              <MdHelp color="#3B82F6" size="24px" />
            </HStack>
            <HStack alignItems={"center"} justifyContent={"left"} gap="0.5rem">
              <Checkbox />
              <Text color="#1F1F1F" fontSize={"14px"}>
                Contains exclusive documents
              </Text>
              <MdHelp color="#3B82F6" size="24px" />
            </HStack>
          </Stack>
        </HStack>
        <Button
          w="250px"
          as={Flex}
          alignItems={"center"}
          variant="outline"
          color="#FF8C1A"
          gap="1rem"
        >
          <MdAddCircle size="24px" color="#FF8C1A" /> Add More Items
        </Button>
        <Button
          onClick={() => {
            setForm(4);
          }}
          p="18px 80px"
          h="60px"
          w={{ base: "100%", xl: "300px" }}
        >
          Get Delivery Prices
        </Button>
      </Stack>
    </PageWrapper>
  );
};
export default DescribePackage;
