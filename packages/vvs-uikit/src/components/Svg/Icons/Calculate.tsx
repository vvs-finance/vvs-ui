import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="transparent" {...props}>
      <rect x="2.675" y="4.675" width="18.65" height="14.65" rx="3.325" stroke="#46A1C2" strokeWidth="1.35" />
      <path fillRule="evenodd" clipRule="evenodd" d="M15 17L15 12L16 12L16 17L15 17Z" fill="#46A1C2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M13 14L18 14L18 15L13 15L13 14Z" fill="#46A1C2" />
      <path fillRule="evenodd" clipRule="evenodd" d="M6 14L11 14L11 15L6 15L6 14Z" fill="#46A1C2" />
      <line x1="3" y1="10.325" x2="21" y2="10.325" stroke="#46A1C2" strokeWidth="1.35" />
    </Svg>
  );
};

export default Icon;
