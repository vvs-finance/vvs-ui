import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M9.75 3.75C9.33579 3.75 9 4.08579 9 4.5V7.5C9 7.91421 9.33579 8.25 9.75 8.25H20.25C20.6642 8.25 21 7.91421 21 7.5V4.5C21 4.08579 20.6642 3.75 20.25 3.75H9.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 3.75C3.33579 3.75 3 4.08579 3 4.5V7.5C3 7.91421 3.33579 8.25 3.75 8.25H6.75C7.16421 8.25 7.5 7.91421 7.5 7.5V4.5C7.5 4.08579 7.16421 3.75 6.75 3.75H3.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 9.75C9.33579 9.75 9 10.0858 9 10.5V13.5C9 13.9142 9.33579 14.25 9.75 14.25H20.25C20.6642 14.25 21 13.9142 21 13.5V10.5C21 10.0858 20.6642 9.75 20.25 9.75H9.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 9.75C3.33579 9.75 3 10.0858 3 10.5V13.5C3 13.9142 3.33579 14.25 3.75 14.25H6.75C7.16421 14.25 7.5 13.9142 7.5 13.5V10.5C7.5 10.0858 7.16421 9.75 6.75 9.75H3.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.75 15.75C9.33579 15.75 9 16.0858 9 16.5V19.5C9 19.9142 9.33579 20.25 9.75 20.25H20.25C20.6642 20.25 21 19.9142 21 19.5V16.5C21 16.0858 20.6642 15.75 20.25 15.75H9.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 15.75C3.33579 15.75 3 16.0858 3 16.5V19.5C3 19.9142 3.33579 20.25 3.75 20.25H6.75C7.16421 20.25 7.5 19.9142 7.5 19.5V16.5C7.5 16.0858 7.16421 15.75 6.75 15.75H3.75Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
