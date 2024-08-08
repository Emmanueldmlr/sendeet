import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const Track = (props: IconProps) => {
  return (
    <Icon
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="Track">
        <path
          id="Vector"
          d="M18 4.5H20V13.5H18V4.5ZM4 4.5H6V20.5H4V4.5ZM11 4.5H13V8.5H11V4.5ZM11 10.5H13V14.5H11V10.5ZM11 16.5H13V20.5H11V16.5Z"
          fill="currentColor"
        />
        <path
          id="Subtract"
          fillRule="evenodd"
          clip-rule="evenodd"
          d="M19.944 19.316C20.232 18.844 20.4 18.292 20.4 17.7C20.4 15.932 18.968 14.5 17.2 14.5C15.432 14.5 14 15.932 14 17.7C14 19.468 15.432 20.9 17.2 20.9C17.792 20.9 18.344 20.724 18.816 20.444L20.872 22.5L22 21.372L19.944 19.316ZM17.25 20C18.4926 20 19.5 18.9926 19.5 17.75C19.5 16.5074 18.4926 15.5 17.25 15.5C16.0074 15.5 15 16.5074 15 17.75C15 18.9926 16.0074 20 17.25 20Z"
          fill="currentColor"
        />
      </g>
    </Icon>
  );
};

export default Track;
