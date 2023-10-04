import { Box, chakra, Heading, Link, Flex } from "@chakra-ui/react";
import React from "react";
import { NAV_DATA } from "@/app/Data/DestopNavData";
import { usePathname } from "next/navigation";
const DesktopNav = () => {
  const pathname = usePathname();
  return (
    <Box display={{ base: "none", xl: "flex" }}>
      <Flex
        flexDir={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"2rem"}
      >
        {NAV_DATA.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            color="neutral"
            data-active={item.href === pathname ? "true" : undefined}
            _active={{
              borderBottom: item.href === pathname ? "2px solid primary" : "",
            }}
            _hover={{ textDecoration: "none" }}
            transition="all .2s ease"
          >
            <Heading fontSize={"md"} fontWeight={"500"}>
              {item.label}
            </Heading>
          </Link>
        ))}
      </Flex>
    </Box>
  );
};

export default DesktopNav;
