"use client";
import DashHeader from "@/app/components/dashboard/DashHeader";
import PageWrapper from "@/app/components/dashboard/PageWrapper";
import {
  Stack,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Tfoot,
  VStack,
  Heading,
  Image,
  Text,
  Flex,
  Input,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdFilterList } from "react-icons/md";

const page = () => {
  const TransactionData: any[] = [];
  return (
    <PageWrapper gap="2.5rem">
      <DashHeader pagename="Profile" />
      <Flex
        mt={{ base: "3rem", lg: "0rem" }}
        flexDir={{ base: "column", xl: "row" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={{ base: "30px", xl: "0px" }}
        gap={{ base: "1rem", xl: "0rem" }}
      >
        <Text
          fontSize={{ base: "15px", xl: "18px" }}
          color="#8E8E8E"
          fontWeight={"500"}
        >
          Delivery History
        </Text>

        <Flex
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"center"}
          border="1px solid #eee"
          bg="#fff"
          w={{ base: "100%", xl: "325px" }}
          h="50px"
          borderRadius={"5px"}
          p={{ base: "10px", xl: "25px" }}
        >
          <AiOutlineSearch size="20px" color="#E1E1E1" />
          <Input
            placeholder="Search  using tracking number"
            border={"none"}
            _active={{ outline: "transparent" }}
            _placeholder={{
              color: "#E1E1E1",
              fontFamily: "Outfit",
              fontWeight: "400",
              fontSize: { base: "12px", xl: "13px" },
            }}
          />
          <MdFilterList size="24px" />
        </Flex>
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
                <Th>Tracking No. </Th>
                <Th>Pick Up Address</Th>
                <Th>Delivery Address</Th>
                <Th>Status</Th>
                <Th>Amount</Th>
                <Th>Date</Th>
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
              No Delivery History carried out yet
            </Heading>
          </VStack>
        )}
      </Stack>
    </PageWrapper>
  );
};

export default page;
