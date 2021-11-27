import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M19 12.875V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5H11.125"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path d="M15 5H19V9" stroke="#46A1C2" strokeWidth="1.35" strokeLinecap="round" />
      <line
        x1="18.125"
        y1="5.95459"
        x2="10.3296"
        y2="13.75"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </Svg>
  );
};

export default Icon;
