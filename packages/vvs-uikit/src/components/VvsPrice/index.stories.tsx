import React from "react";
import { VvsPrice, VvsPriceProps } from ".";
import { Flex } from "../Box";

export default {
  title: "Components/VvsPrice",
  component: VvsPrice,
};

const Template: React.FC<VvsPriceProps> = ({ ...args }) => {
  return (
    <Flex p="10px">
      <VvsPrice {...args} />
    </Flex>
  );
};

export const Default = Template.bind({});
Default.args = {
  vvsPriceUsd: 20.0,
};
