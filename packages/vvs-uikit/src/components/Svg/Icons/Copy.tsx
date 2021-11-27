import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path d="M16 17.4643V20H4V8H6.53571" stroke="#46A1C2" strokeWidth="1.35" strokeLinecap="square" />
      <path d="M9 15H21V3H14.25H9V15Z" stroke="#46A1C2" strokeWidth="1.35" strokeLinecap="round" />
    </Svg>
  );
};

export default Icon;
