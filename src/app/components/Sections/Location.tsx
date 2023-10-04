import { Box, Container, Heading, Image, Stack } from "@chakra-ui/react";
import React from "react";

const Location = () => {
  return (
    <Box py={{ base: "1rem", xl: "5rem" }}>
      <Container maxW={"700px"}>
        <Stack gap="2rem">
          <Heading
            color="#1f1f1f"
            textAlign={"center"}
            fontSize={{ base: "24px", xl: "32px" }}
            fontWeight="500"
          >
            Where We Operate
          </Heading>
          <Image src="/Asset/themap.png" w="100%" />
        </Stack>
      </Container>
    </Box>
  );
};

export default Location;
