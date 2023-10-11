import {
  Flex,
  HStack,
  Input,
  Button,
  Avatar,
  Heading,
  Box,
} from "@chakra-ui/react";
import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { usePathname } from "next/navigation";

const DashHeader = ({ pagename }: { pagename?: string }) => {
  const pathname = usePathname();
  const showComponent = pathname === "/dashboard";

  return (
    <Box display={{ base: "none", lg: "flex" }}>
      <Flex justifyContent="space-between" w="100%" alignItems={"center"}>
        {showComponent ? (
          <HStack w="700px">
            <Flex
              flexDir={"row"}
              alignItems={"center"}
              justifyContent={"center"}
              border="1px solid #eee"
              bg={"#EEE"}
              w={{ base: "100%", xl: "100%" }}
              h="50px"
              borderRadius={"5px"}
              p={{ base: "10px", xl: "25px" }}
            >
              <AiOutlineSearch size="20px" color="#CACACA" />
              <Input
                variant={"filled"}
                type="text"
                bg={"#EEE"}
                outline={"none"}
                borderColor="#EEE"
                placeholder="Please enter your tracking number"
                _placeholder={{
                  color: "#CACACA",
                  fontFamily: "Outfit",
                  fontWeight: "400",
                  fontSize: { base: "12px", xl: "13px" },
                }}
                _focus={{
                  bg: "#eee",
                  borderColor: "#eee",
                  outline: "none",
                }}
                _hover={{
                  bg: "#eee",
                }}
              />
            </Flex>
            <Button p="25px" variant={"solid"} fontSize={"sm"}>
              Track Now
            </Button>
          </HStack>
        ) : (
          <Heading fontSize={"32px"} fontWeight={"500"} lineHeight={"40px"}>
            {pagename}
          </Heading>
        )}

        <HStack gap="2rem">
          <MdOutlineNotificationsActive size="28px" />
          <Avatar
            size={"md"}
            name="Kent Dodds"
            src="https://bit.ly/kent-c-dodds"
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default DashHeader;
