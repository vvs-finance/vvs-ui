import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 28" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9874 0.596191L0.000244141 7.44686V21.149L11.9874 27.9997L23.9745 21.149V7.44686L11.9874 0.596191ZM11.9874 0.596191L0.000244141 7.44686V21.149L11.9874 27.9997L23.9745 21.149V7.44686L11.9874 0.596191Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9455 1.36536L0.439697 7.94028V21.0918L11.9455 27.6684L23.4512 21.0918V7.94028L11.9455 1.36536Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7094 22.6378H15.0097L12.974 20.7821V19.8386L15.0851 17.8336V14.6696L17.8477 12.8904L20.9994 15.2381L16.7094 22.6378ZM9.65853 17.6402L9.9731 14.6586L8.94367 11.9995H15.0525L14.0462 14.6586L14.3377 17.6292L11.9874 17.6402H9.65853ZM11.0454 20.7821L9.00882 22.659H7.28682L2.97624 15.2381L6.13824 12.9116L8.93339 14.6696V17.8336L11.0454 19.8386V20.7821ZM7.2551 6.51995H16.6888L17.8262 11.2808H6.15967L7.2551 6.51995ZM11.9874 0.595825L0.000244141 7.44649V21.1487L11.9874 28.0002L23.9754 21.1487V7.44649L11.9874 0.595825Z"
        fill="#002D74"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.7091 22.6378H15.0093L12.9736 20.7821V19.8386L15.0856 17.8336V14.6696L17.8473 12.8904L20.9999 15.2381L16.7091 22.6378ZM11.9871 0.595825V6.51995H16.6885L17.8259 11.2808H11.9871V11.9995H15.0531L14.0459 14.6586L14.3382 17.6292L11.9871 17.6402V28.0002L23.9751 21.1487V7.44649L11.9871 0.595825Z"
        fill="url(#paint0_linear)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.0451 20.7821L9.00857 22.659H7.28657L2.976 15.2381L6.138 12.9116L8.93314 14.6696V17.8336L11.0451 19.8386V20.7821ZM9.65914 17.6402L9.97286 14.6586L8.94429 11.9995H11.9871V11.2808H6.16029L7.25486 6.51995H11.9871V0.595825L0 7.44649V21.1487L11.9871 28.0002V17.6402H9.65914Z"
        fill="url(#paint1_linear)"
      />
      <defs>
        <linearGradient
          id="paint0_linear"
          x1="17.9812"
          y1="25.0439"
          x2="17.9812"
          y2="3.48478"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D74" />
          <stop offset="1" stopColor="#002D74" stopOpacity="0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear"
          x1="5.99376"
          y1="25.0439"
          x2="5.99376"
          y2="3.48478"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#002D74" stopOpacity="0" />
          <stop offset="1" stopColor="#002D74" />
        </linearGradient>
      </defs>
    </Svg>
  );
};

export default Icon;
