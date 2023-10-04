import { Image, Box } from "@chakra-ui/react";
import React from "react";

const Logo = () => {
  return (
    <Image
      src="/Asset/SendeetLogo.png"
      alt="Logo"
      width={{ base: "130px", xl: "100%" }}
    />
  );
};

export default Logo;

export const WhiteLogo = () => {
  return (
    <Image
      src="/Asset/whitelogo.png"
      alt="Logo"
      width={{ base: "130px", xl: "170px" }}
    />
  );
};
