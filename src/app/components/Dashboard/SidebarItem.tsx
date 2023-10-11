import { Flex, Text, Icon, Link } from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
const SidebarItem = ({ items }: { items: any }) => {
  const pathname = usePathname();
  const { route, icon, label } = items;
  const Active = pathname === route;

  return (
    <Flex
      as={Link}
      _hover={{ textDecor: "none" }}
      href={route}
      flexDir={"row"}
      alignItems="center"
      justifyContent="left"
      color={Active ? " #FF8C1A" : "#fff"}
      gap="1rem"
      mr="2rem"
      h="40px"
      borderLeft={Active ? "5px solid #FF8C1A" : ""}
    >
      <Icon
        as={icon}
        ml="40px"
        fontSize={{ base: "18px", lg: "24px" }}
        color={Active ? " #FF8C1A" : "#fff"}
      />
      <Text fontSize={{ base: "16px", lg: "" }} fontFamily={"Outfit"}>
        {label}
      </Text>
    </Flex>
  );
};

export default SidebarItem;
