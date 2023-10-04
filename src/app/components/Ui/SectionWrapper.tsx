import { Box, Container, Heading } from "@chakra-ui/react";
import React from "react";

const SectionWrapper = ({
  sectionTitle,
  children,
  maxWidth,
  bg,
  mx,
  my,
  p,
}: {
  sectionTitle: string;
  children: React.ReactNode;
  maxWidth: string;
  bg: string;
  mx?: string;
  my?: string;
  p?: string;
}) => {
  return (
    <Box bg={bg} mx={{ base: "none", lg: mx }}>
      <Container my={my} maxWidth={maxWidth}>
        <Heading
          textAlign={"center"}
          fontSize={{ base: "25px", lg: "30px" }}
          lineHeight={"150%"}
          fontWeight={"500"}
          color="#333"
        >
          {sectionTitle}
        </Heading>
        {children}
      </Container>
    </Box>
  );
};

export default SectionWrapper;
