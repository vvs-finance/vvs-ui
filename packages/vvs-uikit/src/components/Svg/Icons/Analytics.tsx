import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 25 24" fill="none" {...props}>
      <rect x="3" y="12.3635" width="5" height="8.63636" rx="1" fill="#60605F" />
      <rect x="10" y="7.18188" width="5" height="13.8182" rx="1" fill="#60605F" />
      <rect x="17" y="2" width="5" height="19" rx="1" fill="#60605F" />
    </Svg>
  );
};

export default Icon;
