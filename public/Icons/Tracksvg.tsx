import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Tracksvg = (props: IconProps) => {
  return (
    <Icon
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Track">
        <rect width="40" height="40" rx="4" fill="#FFD9B4" />
        <path
          id="Vector"
          d="M30.0003 6.66663H33.3337V21.6666H30.0003V6.66663ZM6.66699 6.66663H10.0003V33.3333H6.66699V6.66663ZM18.3337 6.66663H21.667V13.3333H18.3337V6.66663ZM18.3337 16.6666H21.667V23.3333H18.3337V16.6666ZM18.3337 26.6666H21.667V33.3333H18.3337V26.6666Z"
          fill="#C27123"
        />
        <path
          id="Subtract"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M33.2397 31.36C33.7197 30.5734 33.9997 29.6534 33.9997 28.6667C33.9997 25.72 31.613 23.3334 28.6663 23.3334C25.7197 23.3334 23.333 25.72 23.333 28.6667C23.333 31.6134 25.7197 34 28.6663 34C29.653 34 30.573 33.7067 31.3597 33.24L34.7863 36.6667L36.6663 34.7867L33.2397 31.36ZM28.7497 32.5C30.8207 32.5 32.4997 30.8211 32.4997 28.75C32.4997 26.679 30.8207 25 28.7497 25C26.6786 25 24.9997 26.679 24.9997 28.75C24.9997 30.8211 26.6786 32.5 28.7497 32.5Z"
          fill="#C27123"
        />
      </g>
    </Icon>
  );
};

export default Tracksvg;
