import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import ButtomAnimation from "../Animation/ButtomAnimation";

const PageBanner = ({ bgImage, title }: { bgImage: string; title: string }) => {
  return (
    <Flex
      px="0.2rem"
      backgroundImage={`url('/Asset/${bgImage}')`}
      backgroundPosition={"center"}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      h={{ base: "200px", xl: "350px" }}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      gap="2.3rem"
    >
      <ButtomAnimation>
        <Heading
          fontSize={{ base: "25px", xl: "40px" }}
          color="#fff"
          fontWeight={"500"}
        >
          {title}
        </Heading>
      </ButtomAnimation>
    </Flex>
  );
};

export default PageBanner;
