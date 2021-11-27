import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" fill="none" {...props}>
      <path
        d="M15.75 14.25L18.75 12.75L20.25 15.75"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6748 12.8252C18.2998 16.2002 15.5998 18.7502 11.9998 18.7502C8.7748 18.7502 6.0748 16.7252 5.2498 13.8752"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.25 9.75L5.25 11.25L3.75 8.25"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.325 11.175C5.7 7.8 8.4 5.25 12 5.25C15.225 5.25 17.925 7.275 18.75 10.125"
        stroke="#46A1C2"
        strokeWidth="1.35"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export default Icon;
