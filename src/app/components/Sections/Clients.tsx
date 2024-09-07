import { Container, Image, Box } from "@chakra-ui/react";
import React from "react";

const Clients = () => {
  return (
    <Container p="48px 24px" bg="#573312" maxWidth="100%">
      <Box
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexWrap={"wrap"}
        gap={"48px"}
      >
        <Image src={"/Asset/clients/client1.png"} />
        <Image src={"/Asset/clients/client2.png"} />
        <Image src={"/Asset/clients/client3.png"} />
        <Image src={"/Asset/clients/client4.png"} />
        <Image src={"/Asset/clients/client5.png"} />
      </Box>
    </Container>
  );
};

export default Clients;
