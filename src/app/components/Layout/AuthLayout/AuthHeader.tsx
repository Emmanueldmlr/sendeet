import {
  Flex,
  chakra,
  IconButton,
  HStack,
  Button,
  Heading,
  Link,
} from "@chakra-ui/react";
import { Box } from "framer-motion";

import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import HamBurger from "../../../../../public/Icons/Hamburger";
import Logo from "../../ui/Logo";
import DesktopNav from "../DesktopNav";
import { usePathname } from "next/navigation";

const AuthHeader = () => {
  const pathname = usePathname();

  const Route = pathname === "/SignIn" ? "/Register" : "/SignIn";
  return (
    <Flex
      pos={"fixed"}
      bg={"#FEFEFE"}
      flexDir={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      w="100%"
      padding={{ base: "20px 30px", xl: "20px 120px" }}
      borderBottom={"1px solid #FFF3E8"}
      zIndex={100}
    >
      <Flex>
        <Link href="/">
          <Logo />
        </Link>
      </Flex>
      <Heading
        display={{ base: "none", md: "flex" }}
        fontSize={"md"}
        fontWeight={"500"}
        color="#1F1F1F"
        lineHeight={"26px"}
      >
        {pathname === "/SignIn"
          ? " Do Not Have an Account?"
          : "Have an Account?"}{" "}
        <chakra.span pl="10px" color={"primary"} as={Link} href={Route}>
          {pathname === "/SignIn" ? "Create One" : "Login here"}
        </chakra.span>
      </Heading>
    </Flex>
  );
};

export default AuthHeader;
