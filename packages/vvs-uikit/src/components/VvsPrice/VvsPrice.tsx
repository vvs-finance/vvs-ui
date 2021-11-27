import React from "react";
import styled from "styled-components";
import { VvsDiamond } from "../Svg";
import Text from "../Text/Text";
import Skeleton from "../Skeleton/Skeleton";
import { Colors } from "../../theme";

export interface Props {
  color?: keyof Colors;
  vvsPriceUsd?: number;
  iconCallback?: () => void;
  vvsAddress?: string;
}

const PriceDiv = styled.div`
  display: flex;
  align-items: center;
`

const IconLink = styled.a`
  display: flex;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const VvsPrice: React.FC<Props> = ({ vvsPriceUsd, color = "textDisabled", iconCallback, vvsAddress }) => {
  return vvsPriceUsd ? (
    <PriceDiv>
      <Text mr={2} color="textDisabled">1MM</Text>
      <IconLink
        href="#"
        onClick={(e) => {
          e.preventDefault();
          iconCallback && iconCallback();
        }}
      >
        <VvsDiamond width="18px" height="16px" mr="8px" />
      </IconLink>
      <a
        href={`/info/token/${vvsAddress}`}
        target="_blank"
      >
        <Text mr={2} color={color} bold>{`$${(vvsPriceUsd * 1000000).toFixed(4)}`}</Text>
      </a>
    </PriceDiv>
  ) : (
    <Skeleton width={80} height={24} />
  );
};

export default React.memo(VvsPrice);
