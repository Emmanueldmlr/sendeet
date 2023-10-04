import { Icon, IconProps } from "@chakra-ui/react";
import React from "react";

const SuccessIcon = (props: IconProps) => {
  return (
    <Icon
      width="81"
      height="81"
      viewBox="0 0 81 81"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="81" height="81" fill="#F5F5F5" />
      <g id="Frame 330" filter="url(#filter0_d_0_1)">
        <rect
          x="-315"
          y="-54"
          width="711"
          height="269"
          rx="10"
          fill="white"
          shapeRendering="crispEdges"
        />
        <g id="Group 333">
          <circle id="Ellipse 8" cx="40.5" cy="40.5" r="40" fill="#C2FFD3" />
          <g id="Mask group">
            <mask
              id="mask0_0_1"
              maskUnits="userSpaceOnUse"
              x="16"
              y="16"
              width="49"
              height="49"
            >
              <g id="Group">
                <g id="Group_2">
                  <path
                    id="Vector"
                    d="M40.5961 62.163C43.4983 62.1667 46.3727 61.6037 49.054 60.5064C51.7353 59.409 54.1707 57.7989 56.2202 55.7686C58.2751 53.7436 59.9047 51.3374 61.0154 48.6882C62.1261 46.039 62.6959 43.199 62.6922 40.3315C62.6959 37.464 62.126 34.6241 61.0153 31.9749C59.9047 29.3257 58.2751 26.9195 56.2202 24.8945C54.1707 22.8642 51.7353 21.2541 49.054 20.1567C46.3727 19.0593 43.4983 18.4963 40.5961 18.5C37.6939 18.4964 34.8195 19.0594 32.1382 20.1568C29.4569 21.2541 27.0215 22.8642 24.972 24.8945C22.9171 26.9195 21.2875 29.3257 20.1768 31.9749C19.0662 34.6241 18.4963 37.464 18.5 40.3315C18.4963 43.199 19.0661 46.039 20.1768 48.6882C21.2874 51.3374 22.9171 53.7436 24.972 55.7686C27.0215 57.7988 29.4569 59.4089 32.1382 60.5063C34.8195 61.6036 37.6939 62.1667 40.5961 62.163Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M31.7578 40.3315L38.3866 46.8809L51.6443 33.782"
                    stroke="black"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </g>
            </mask>
            <g mask="url(#mask0_0_1)">
              <path
                id="Vector_3"
                d="M14.0801 14.1337H67.1106V66.5293H14.0801V14.1337Z"
                fill="#34A853"
              />
            </g>
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_d_0_1"
          x="-324"
          y="-63"
          width="731"
          height="289"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dx="1" dy="1" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_0_1"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_0_1"
            result="shape"
          />
        </filter>
      </defs>
    </Icon>
  );
};

export default SuccessIcon;
