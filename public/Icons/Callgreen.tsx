import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Callgreen = (props: IconProps) => {
  return (
    <Icon
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="react-icons/md/MdWifiCalling">
        <path
          id="Vector"
          d="M22 4.95C21.79 4.78 19.67 3 16.5 3C13.32 3 11.21 4.78 11 4.95L16.5 12L22 4.95Z"
          fill="#47B881"
        />
        <path
          id="Vector_2"
          d="M20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.2545 14.881 16.066 14.8723 15.8858 14.9147C15.7056 14.9571 15.5408 15.049 15.41 15.18L13.21 17.38C10.3754 15.9304 8.06961 13.6246 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.69065 6.41806 8.49821 5.2128 8.5 4C8.5 3.45 8.05 3 7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51Z"
          fill="#47B881"
        />
      </g>
    </Icon>
  );
};

export default Callgreen;
