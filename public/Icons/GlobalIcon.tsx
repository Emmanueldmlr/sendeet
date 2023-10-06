import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const GlobalIcon = (props: IconProps) => {
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
        d="M17 8C11.48 8 7 12.48 7 18C7 23.52 11.48 28 17 28C22.52 28 27 23.52 27 18C27 12.48 22.52 8 17 8ZM16 25.93C12.05 25.44 9 22.08 9 18C9 17.38 9.08 16.79 9.21 16.21L14 21V22C14 23.1 14.9 24 16 24V25.93ZM22.9 23.39C22.64 22.58 21.9 22 21 22H20V19C20 18.45 19.55 18 19 18H13V16H15C15.55 16 16 15.55 16 15V13H18C19.1 13 20 12.1 20 11V10.59C22.93 11.78 25 14.65 25 18C25 20.08 24.2 21.97 22.9 23.39Z"
        fill="#C27123"
      />
    </Icon>
  );
};

export default GlobalIcon;
