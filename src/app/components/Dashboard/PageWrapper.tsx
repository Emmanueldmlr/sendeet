import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box pl={{ base: 0, lg: "310px" }}>
      <Flex w="full" flexDir={"column"} gap="3.5rem">
        {children}
      </Flex>
    </Box>
  );
};

export default PageWrapper;
