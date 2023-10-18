import {
  Flex,
  Text,
  Icon,
  Link,
  useDisclosure,
  Stack,
  Collapse,
} from "@chakra-ui/react";
import React from "react";
import { usePathname } from "next/navigation";
import { MdOutlinePowerSettingsNew } from "react-icons/md";
import { RxChevronDown } from "react-icons/rx";
const SidebarItem = ({ items, theindex }: { items: any; theindex: number }) => {
  const { isOpen, onToggle } = useDisclosure();
  const pathname = usePathname();
  const {
    route,
    icon,
    label,
    children,
  }: {
    route: string;
    icon: any;
    label: string;
    children: any;
  } = items;
  const Active = pathname === route;
  const ProfileActive = pathname.includes("/dashboard/profile/");

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        key={theindex}
        as={Link}
        _hover={{ textDecor: "none", bg: "rgb(71, 71, 71)", w: "100%" }}
        href={route}
        flexDir={"row"}
        alignItems="center"
        justifyContent="left"
        color={
          theindex === 4 && ProfileActive
            ? "#ff8c1a"
            : Active
            ? " #FF8C1A"
            : "#fff"
        }
        gap="1rem"
        mr="2rem"
        h="40px"
        borderLeft={
          theindex === 4 && ProfileActive
            ? "5px solid #FF8C1A"
            : Active
            ? "5px solid #FF8C1A"
            : ""
        }
      >
        <Icon
          as={icon}
          ml="40px"
          fontSize={{ base: "18px", lg: "24px" }}
          color={
            theindex === 4 && ProfileActive
              ? "#ff8c1a"
              : Active
              ? " #FF8C1A"
              : "#fff"
          }
        />
        <Text fontSize={{ base: "16px", lg: "" }} fontFamily={"Outfit"}>
          {label}
        </Text>
        {children && (
          <Icon
            color={"#fff"}
            as={RxChevronDown}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={0} align={"start"} bg="#fff" w="100%">
          {children &&
            children.map((i: any) => (
              <Flex
                key={i.label}
                as={Link}
                _hover={{
                  textDecor: "none",
                  bg: "rgb(240, 233, 233)",
                  w: "100%",
                }}
                href={i.href}
                flexDir={"row"}
                alignItems="center"
                justifyContent="left"
                color={pathname === i.href ? " #FF8C1A" : "#8E8E8E"}
                gap="1rem"
                h="40px"
              >
                <Icon
                  as={i.icon}
                  ml="40px"
                  fontSize={{ base: "18px", lg: "24px" }}
                  color={pathname === i.href ? " #FF8C1A" : "#8E8E8E"}
                />
                <Text
                  w="100%"
                  fontSize={{ base: "16px", lg: "sm" }}
                  fontFamily={"Outfit"}
                >
                  {i.label}
                </Text>
              </Flex>
            ))}
          <Flex
            display={{ base: "none", lg: "flex" }}
            as={Link}
            _hover={{ textDecor: "none" }}
            href="/SignIn"
            flexDir={"row"}
            alignItems="center"
            justifyContent="left"
            gap="1rem"
            color="#EC2D30"
            h="40px"
          >
            <MdOutlinePowerSettingsNew
              size="18px"
              style={{ marginLeft: "40px" }}
            />
            <Text fontSize={{ base: "16px", lg: "sm" }} fontFamily={"Outfit"}>
              Sign Out
            </Text>
          </Flex>
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default SidebarItem;
