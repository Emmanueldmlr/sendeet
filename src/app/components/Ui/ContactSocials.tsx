import React from "react";
import { Box, Container, Flex, Icon, Link, Text } from "@chakra-ui/react";
import WhatsappIcon from "../../../../public/Icons/WhatsappIcon";
import Number from "../../../../public/Icons/Number";
import Gmail from "../../../../public/Icons/Gmail";
import LocationIcon from "../../../../public/Icons/LocationIcon";
const ContactSocials = () => {
  const Socials = [
    {
      href: "https://api.whatsapp.com/send?phone=2348102780566",
      socialName: "WhatsApp.me",
      Icon: WhatsappIcon,
    },
    { href: "", socialName: "Ourparcel.ib@gmail.com", Icon: Gmail },
    { href: "", socialName: "+(234)8167656453", Icon: Number },
    {
      href: "",
      socialName: "Obokun Street, Eleyele, Ibadan",
      Icon: LocationIcon,
    },
  ];
  return (
    <Container
      bg={"#fff"}
      maxW={{ base: "sm", xl: "7xl" }}
      mt={{ base: -20, xl: -20 }}
      alignContent="center"
      boxShadow={"1px 1px 10px 0px rgba(0, 0, 0, 0.10)"}
      p="3rem"
      borderRadius={"4px"}
    >
      <Flex
        flexDirection={{ base: "column", xl: "row" }}
        alignItems={{ base: "left", xl: "center" }}
        justifyContent={{ base: "center", xl: "center" }}
        gap={{ base: "2rem", xl: "5rem" }}
      >
        {Socials.map((item, index) => (
          <Link key={index} href={item.href}>
            <Flex
              flexDirection={"row"}
              alignContent={{ base: "left", xl: "center" }}
              justifyContent={{ base: "left", xl: "center" }}
              textAlign={"center"}
              gap="0.5rem"
            >
              <Icon as={item.Icon} fontSize={"1.5rem"} />
              <Text color="#333" fontSize={"sm"}>
                {item.socialName}
              </Text>{" "}
            </Flex>
          </Link>
        ))}
      </Flex>
    </Container>
  );
};

export default ContactSocials;
