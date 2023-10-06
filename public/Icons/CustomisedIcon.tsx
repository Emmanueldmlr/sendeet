import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const CustomisedIcon = (props: IconProps) => {
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
        d="M17 27C19.2091 27 21 25.2091 21 23C21 20.7909 19.2091 19 17 19C14.7909 19 13 20.7909 13 23C13 25.2091 14.7909 27 17 27Z"
        fill="#C27123"
      />
      <path
        d="M17 16.07C18.95 16.07 20.72 16.86 22 18.14L27 13.14C24.44 10.59 20.9 9 17 9C13.1 9 9.56 10.59 7 13.15L12 18.15C12.6555 17.4913 13.4346 16.9685 14.2926 16.6115C15.1507 16.2546 16.0707 16.0706 17 16.07Z"
        fill="#C27123"
      />
    </Icon>
  );
};

export default CustomisedIcon;
