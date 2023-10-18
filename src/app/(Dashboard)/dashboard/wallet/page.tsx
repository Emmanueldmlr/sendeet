"use client";
import DashHeader from "@/app/components/Dashboard/DashHeader";

import PageWrapper from "@/app/components/Dashboard/PageWrapper";
import {
  Flex,
  Stack,
  Heading,
  Box,
  Button,
  HStack,
  TableContainer,
  Table,
  TableCaption,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  Image,
  VStack,
  Text,
  useDisclosure,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Input,
} from "@chakra-ui/react";
import { BsPlus } from "react-icons/bs";
import React, { useState } from "react";
import { MdCalendarToday, MdFilter, MdFilterList } from "react-icons/md";
import { AiOutlineCloseCircle } from "react-icons/ai";
const TransactionData: any[] = [
  // {
  //   transaction: "Box Type",
  //   withdrawal: "Box Type",
  //   deposit: "Box Type",
  //   status: "Box Type",
  //   date: "Box Type",
  // },
  // {
  //   transaction: "Box Type",
  //   withdrawal: "Box Type",
  //   deposit: "Box Type",
  //   status: "Box Type",
  //   date: "Box Type",
  // },
  // {
  //   transaction: "Box Type",
  //   withdrawal: "Box Type",
  //   deposit: "Box Type",
  //   status: "Box Type",
  //   date: "Box Type",
  // },
  // {
  //   transaction: "Box Type",
  //   withdrawal: "Box Type",
  //   deposit: "Box Type",
  //   status: "Box Type",
  //   date: "Box Type",
  // },
  // {
  //   transaction: "Box Type",
  //   withdrawal: "Box Type",
  //   deposit: "Box Type",
  //   status: "Box Type",
  //   date: "Box Type",
  // },
];
const Walletpage = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hideBalance, setHideBalance] = useState(true);

  const HandleBalanceSwitch = () => {
    setHideBalance(!hideBalance);
  };
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Wallet" />
      <Box w="100%" h="142px">
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay />
          <ModalContent p="2rem" mx={{ base: "10px", lg: "" }}>
            <ModalCloseButton
              as={AiOutlineCloseCircle}
              fontSize={{ base: "10px", xl: "50px" }}
              color="#4B4B4B"
              cursor={"pointer"}
            />
            <ModalBody>
              <Stack
                gap="1rem"
                alignItems={"center"}
                textAlign={"center"}
                justifyContent={"center"}
              >
                <Image src="/Asset/Addmoney.svg" w=" 98.75px" />
                <Heading
                  fontSize={{ base: "xs", lg: "14px" }}
                  fontWeight={"500"}
                >
                  Add Money to your Wallet
                </Heading>
                <Input
                  border={"1px solid #E1E1E1"}
                  variant={"filled"}
                  type="text"
                  bg={"#fff"}
                  outline={"none"}
                  placeholder="Enter amout you want to add to your wallet"
                  _placeholder={{
                    color: "#CACACA",
                    fontFamily: "Outfit",
                    fontWeight: "400",
                    fontSize: { base: "12px", xl: "13px" },
                  }}
                  _focus={{
                    bg: "#fff",
                    borderColor: "#E1E1E1",
                    outline: "none",
                  }}
                  _hover={{
                    bg: "#fff",
                  }}
                />
              </Stack>
            </ModalBody>

            <ModalFooter w="100%">
              <Button w="100%" onClick={onClose}>
                Continue
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
        <Flex
          h="100%"
          alignItems={"center"}
          justifyContent={"space-between"}
          w="100%"
          p="24px 20px"
          bg="#FFF3E8"
          borderRadius={"4px"}
          mt={{ base: "1.5rem", lg: "0rem" }}
        >
          <Stack fontWeight={"500"}>
            <HStack gap={{ base: "0.4rem", lg: "2rem" }}>
              <Heading
                fontWeight={"500"}
                fontSize={{ base: "12px", lg: "16px" }}
                color={"primary"}
              >
                Available Balance
              </Heading>
              <Box
                cursor={"pointer"}
                onClick={HandleBalanceSwitch}
                fontSize={{ base: "8px", lg: "12px" }}
                fontFamily={"Outfit"}
                bg={"#fff"}
                p="4px 8px"
                fontWeight={"500"}
              >
                {hideBalance ? "Hide" : "Show"} balance
              </Box>
            </HStack>
            <Heading
              color={"#FF8C1A"}
              fontWeight={"500"}
              fontSize={{ base: "19px", lg: "32px" }}
              filter={!hideBalance ? "blur(6.7px)" : ""}
            >
              $10O,0OO.00
            </Heading>
          </Stack>
          <Button
            variant={"solid"}
            w={{ base: "100px", lg: "145px" }}
            fontSize={{ base: "12px", lg: " md" }}
            size={{ base: " ", lg: "md" }}
            h={{ base: "20px" }}
            onClick={onOpen}
          >
            <Flex alignItems={"center"} gap={{ base: "0px", lg: "5px" }}>
              <BsPlus color="#fff" size="24px" /> Fund Wallet
            </Flex>
          </Button>
        </Flex>
      </Box>
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        w="100%"
        px="1rem"
      >
        <Heading fontSize={{ base: "sm", lg: "20px" }} fontWeight={"500"}>
          Transaction History
        </Heading>
        <HStack>
          <HStack
            w={{ base: "90px", lg: "110px" }}
            p="8px"
            bg="#FFF3E8"
            alignItems={"center"}
            justifyContent={"space-between"}
          >
            <Heading fontWeight={"500"} fontSize={{ base: "xs", lg: "15px" }}>
              Filter by
            </Heading>
            <MdFilterList />
          </HStack>
          <MdCalendarToday />
        </HStack>
      </Flex>
      <Stack
        gap={"3rem"}
        border={{ base: "", lg: "1px solid #eee" }}
        borderRadius={"4px"}
        pb="3rem"
      >
        <TableContainer maxW="full" display={{ base: "none", lg: "flex" }}>
          <Table variant="simple" w="full" overflowX="scroll">
            <Thead
              color={"#4B4B4B"}
              padding={"16px"}
              bg="#E1E1E1"
              borderRadius={"4px"}
              h="70px"
            >
              <Tr>
                <Th>Transaction Title </Th>
                <Th>Withdrawal</Th>
                <Th>Deposit</Th>
                <Th>Status</Th>
                <Th>Date and Time</Th>
              </Tr>
            </Thead>

            <Tbody>
              {TransactionData.map((i, index) => (
                <Tr key={index}>
                  <Td>{i.transaction}</Td>
                  <Td>{i.withdrawal}</Td>
                  <Td>{i.deposit}</Td>
                  <Td>{i.status}</Td>
                  <Td>{i.date}</Td>
                </Tr>
              ))}
            </Tbody>

            <Tfoot></Tfoot>
          </Table>
        </TableContainer>
        {TransactionData.length === 0 && (
          <VStack
            w="100%"
            alignItems={"center"}
            flexDir={"column"}
            justifyContent={"center"}
            gap="1rem"
          >
            <Image src="/Asset/no transac.svg" />
            <Heading
              fontSize={{ base: "xs", lg: "20px" }}
              fontWeight={"500"}
              color={"#4B4B4B"}
            >
              No transactions carried out yet
            </Heading>
          </VStack>
        )}
      </Stack>
    </PageWrapper>
  );
};

export default Walletpage;
