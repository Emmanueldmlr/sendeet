import { Box, Flex } from "@chakra-ui/react";
import React from "react";

const PageWrapper = ({
  children,
  gap,
}: {
  children: React.ReactNode;
  gap: string;
}) => {
  return (
    <Box pl={{ base: 0, lg: "310px" }}>
      <Flex w="full" flexDir={"column"} gap={gap}>
        {children}
      </Flex>
    </Box>
  );
};

export default PageWrapper;
