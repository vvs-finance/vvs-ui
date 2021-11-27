import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M17 5.71563C15.6264 4.64392 13.8645 4 11.9434 4C7.55639 4 4 7.35786 4 11.5C4 15.6421 7.55639 19 11.9434 19C13.8645 19 15.6264 18.3561 17 17.2844"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <line x1="20.325" y1="11.675" x2="11.675" y2="11.675" stroke="#46A1C2" strokeWidth="1.35" strokeLinecap="round" />
      <path
        d="M18.8286 9.48535L21.1716 11.8283L18.8286 14.1713"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon;
