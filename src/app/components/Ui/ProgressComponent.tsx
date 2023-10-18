import { Box, Progress } from "@chakra-ui/react";
import React from "react";

const ProgressComponent = ({ value }: { value: number }) => {
  return (
    <>
      <Progress
        w="100%"
        colorScheme="orange"
        size="sm"
        borderRadius={"20px"}
        value={value}
        h="3.401px"
        bg="#D9D9D9"
      />
    </>
  );
};

export default ProgressComponent;
