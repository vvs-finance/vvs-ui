import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path
        d="M3.75 3C3.33579 3 3 3.33579 3 3.75V10.5C3 10.9142 3.33579 11.25 3.75 11.25H10.5C10.9142 11.25 11.25 10.9142 11.25 10.5V3.75C11.25 3.33579 10.9142 3 10.5 3H3.75Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.5 3C13.0858 3 12.75 3.33579 12.75 3.75V10.5C12.75 10.9142 13.0858 11.25 13.5 11.25H20.25C20.6642 11.25 21 10.9142 21 10.5V3.75C21 3.33579 20.6642 3 20.25 3H13.5Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.75 12.75C3.33579 12.75 3 13.0858 3 13.5V20.25C3 20.6642 3.33579 21 3.75 21H10.5C10.9142 21 11.25 20.6642 11.25 20.25V13.5C11.25 13.0858 10.9142 12.75 10.5 12.75H3.75Z"
        fill="white"
      />
      <path
        d="M13.5 12.75C13.0858 12.75 12.75 13.0858 12.75 13.5V20.25C12.75 20.6642 13.0858 21 13.5 21H20.25C20.6642 21 21 20.6642 21 20.25V13.5C21 13.0858 20.6642 12.75 20.25 12.75H13.5Z"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
