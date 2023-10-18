import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { MdChevronRight } from "react-icons/md";

const AccordionComponent = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => {
  return (
    <Accordion
      allowToggle
      border={"1px solid #E1E1E1"}
      borderRadius={"4px"}
      // boxShadow={" 1px 1px 10px 0px rgba(0, 0, 0, 0.10)"}
      w={{ base: "100%", xl: "100%" }}
    >
      <AccordionItem w="100%">
        <h2>
          <AccordionButton p={"5px"} color="#333">
            <Box
              as={Flex}
              flex="1"
              fontSize={{ base: "sm", lg: "md" }}
              textAlign="left"
              alignItems={"center"}
              gap="1rem"
              color="#333"
            >
              <Text fontSize={"13px"} fontFamily={"Outfit"}>
                {title}
              </Text>
            </Box>
            <Box transform={"rotate(90deg)"}>
              <MdChevronRight />
            </Box>
          </AccordionButton>
        </h2>
        <AccordionPanel color="#333" fontSize={{ base: "sm", lg: "md" }} pb={4}>
          {children}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};
export default AccordionComponent;
