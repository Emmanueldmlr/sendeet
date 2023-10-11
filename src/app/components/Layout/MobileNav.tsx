import { chakra, Link, Stack, Button, Flex } from "@chakra-ui/react";
import React from "react";
import { NAV_DATA } from "@/app/Data/DestopNavData";
import { usePathname } from "next/navigation";
const MobileNav = () => {
  const pathname = usePathname();
  return (
    <Stack
      bg={"#fff"}
      p={5}
      py={5}
      display={{ xl: "none" }}
      w="100%"
      pos={"fixed"}
      zIndex={50}
    >
      <Flex
        flexDir={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        gap={"1rem"}
        color={"#1F1F1F"}
        mt="5rem"
      >
        {NAV_DATA.map((item, index) => (
          <Link key={index} href={item.href} _hover={{ textDecor: "none" }}>
            <chakra.li
              fontFamily={"Outfit"}
              textAlign={"center"}
              listStyleType={"none"}
              fontSize={"16px"}
              fontWeight={"500"}
              data-active={item.href === pathname ? "true" : undefined}
              _active={{
                color: item.href === pathname ? "primary" : "",
              }}
              // borderBottom={"1px solid #eee"}
              p="1rem"
            >
              {item.label}
            </chakra.li>
          </Link>
        ))}
        <Stack display={{ base: "flex", xl: "none" }} gap="1rem">
          <Button
            as={Link}
            _hover={{ textDecor: "none" }}
            href="/SignIn"
            size={"xl"}
            variant="outline"
            color={"primary"}
          >
            Sign In
          </Button>

          <Button
            _hover={{ textDecor: "none" }}
            as={Link}
            href="/Register"
            size={"xl"}
            variant="solid"
          >
            Register
          </Button>
        </Stack>
      </Flex>
    </Stack>
  );
};

export default MobileNav;
