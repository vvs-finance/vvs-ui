import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 34 34" {...props}>
      <rect width="33.9364" height="34.0003" rx="16.9682" fill="#46A1C2" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0909 19.5457L10 22.6002V23.5548C10 23.8093 10.1909 24.0002 10.4455 24.0002H23.4909C23.7455 24.0002 23.9364 23.8093 23.9364 23.5548V22.6002L18.8455 19.5457"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.909 19.5455C20.8181 18.0818 20.8181 15.4727 20.8181 15.4727V12.7364C20.5636 11.2091 18.6545 10 17 10C15.3454 10 13.4363 11.2091 13.1818 12.7364V15.4727C13.1818 15.4727 13.1818 18.0818 15.0909 19.5455"
        fill="white"
      />
    </Svg>
  );
};

export default Icon;
