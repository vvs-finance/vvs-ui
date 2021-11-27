import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 12 6" fill="none" {...props}>
      <path d="M6 6L0 0H12L6 6Z" fill="#2C3851" />
    </Svg>
  );
};

export default Icon;
