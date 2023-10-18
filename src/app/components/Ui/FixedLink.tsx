"use client";
import {
  Box,
  Flex,
  Heading,
  Icon,
  Image,
  Link,
  Text,
  Tooltip,
  VStack,
  chakra,
} from "@chakra-ui/react";
import React from "react";

const FixedLink = () => {
  return (
    <Box
      mb={{ base: "0rem", xl: "0rem" }}
      as={Link}
      target="blank"
      href=""
      _hover={{ textDecor: "none" }}
      position="fixed"
      bottom="0"
      right="0"
      zIndex="10"
      p={{ base: "1px", xl: "20px" }}
    >
      <Tooltip
        textAlign={"center"}
        hasArrow
        // label={
        //   <>
        //     <chakra.span
        //       color="primary"
        //       fontFamily={"Outfit"}
        //       fontSize={{ base: "sm", xl: "24px" }}
        //     >
        //       having trouble?
        //     </chakra.span>
        //     <br />
        //     <Text fontSize={{ base: "xs", xl: "14px" }} fontWeight={"500"}>
        //       Let us help you.
        //       <br /> Click to chat with us in private.
        //     </Text>
        //   </>
        // }
        size={"xl"}
        p="2rem"
        color={"#4B4B4B"}
        bg="#FEFEFE"
      >
        <Flex
          flexDir={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
          background={"transparent"}
          color="primary"
          p={{ base: "10px", xl: "15px" }}
          borderRadius={"12px"}
          // boxShadow={"2xl"}
          gap={"40px"}
          cursor={"pointer"}
          transition="transform 0.2s ease-in-out"
          border={"2px solid #FFA64D"}
          _hover={{
            background: "transparent",
            color: "primary",
            textDecor: "none",
            transform: "scale(1.05)",
          }}
        >
          <Flex
            flexDir={"row"}
            alignItems={"center"}
            justifyContent={"right"}
            gap={"10px"}
            // border={"1px solid primary"}
          >
            <Image src="/Asset/Chat.png" />
            <VStack
              alignItems={"left"}
              spacing={"0"}
              fontSize={{ base: "sm", xl: "md" }}
            >
              <Text
                fontWeight={"500"}
                fontSize={{ base: "xs", xl: "sm" }}
                borderLeft={"1px solid #E1E1E1"}
                pl="1rem"
              >
                Need help? Chat with us
                <br /> Now!
              </Text>
            </VStack>
          </Flex>
          {/* <motion.div
            animate={{ x: [-10, 10, -10], y: 0 }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          >
            <IoIosArrowForward size={"1.5rem"} />
          </motion.div> */}
        </Flex>
      </Tooltip>
    </Box>
  );
};

export default FixedLink;
