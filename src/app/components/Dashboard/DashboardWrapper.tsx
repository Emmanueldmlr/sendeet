import { Box, Flex } from "@chakra-ui/react";
import React from "react";
import Sidebar from "./Sidebar";
import FixedLink from "../ui/FixedLink";
import MobileDrawer from "./MobileDrawer";

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Flex>
      <Sidebar display={{ base: "none", lg: "flex" }} />
      <Box
        flexGrow="1"
        w="full"
        p={{ base: "0rem", xl: "2.5rem" }}
        py="12"
        // pr={{ base: 5, lg: "8" }}
      >
        {children}
      </Box>
    </Flex>
  );
};

export default DashboardWrapper;
