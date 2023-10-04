import { chakra, Link, Stack, Button } from "@chakra-ui/react";
import React from "react";
import { NAV_DATA } from "@/app/Data/DestopNavData";

const MobileNav = () => {
  return (
    <Stack bg={"#fff"} p={5} py={5} display={{ xl: "none" }}>
      <chakra.ul
        display={"flex"}
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"1rem"}
        color={"#1F1F1F"}
      >
        {NAV_DATA.map((item, index) => (
          <Link key={index} href={item.href} _hover={{ textDecor: "none" }}>
            <chakra.li
              fontFamily={"Outfit"}
              textAlign={"center"}
              listStyleType={"none"}
              fontSize={"18px"}
              fontWeight={"400"}
              // borderBottom={"1px solid #eee"}
              p="1rem"
            >
              {item.label}
            </chakra.li>
          </Link>
        ))}
        <Stack display={{ base: "flex", xl: "none" }} gap="1rem">
          <Button size={"xl"} variant="outline" color={"primary"}>
            Sign In
          </Button>
          <Button size={"xl"} variant="solid">
            Register
          </Button>
        </Stack>
      </chakra.ul>
    </Stack>
  );
};

export default MobileNav;