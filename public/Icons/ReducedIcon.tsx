import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const ReducedIcon = (props: IconProps) => {
  return (
    <Icon
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="17.5" cy="17.5" r="17.5" fill="#FFD9B4" />
      <path
        d="M17 7L8 11V17C8 22.55 11.84 27.74 17 29C22.16 27.74 26 22.55 26 17V11L17 7ZM17 17.99H24C23.47 22.11 20.72 25.78 17 26.93V18H10V12.3L17 9.19V17.99Z"
        fill="#C27123"
      />
    </Icon>
  );
};

export default ReducedIcon;
