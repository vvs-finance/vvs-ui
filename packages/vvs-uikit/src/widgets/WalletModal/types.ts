import { FC } from "react";
import { SvgProps } from "../../components/Svg/types";

export enum ConnectorNames {
  Injected = "Injected",
  Metamask = "Metamask",
  TrustWallet = "Trust Wallet",
  WalletConnect = "walletconnect",
  BSC = "bsc",
  CDCDefiWallet = "Crypto.com DeFi Wallet",
}

export type Login = (connectorId: ConnectorNames) => void;

export interface Config {
  title: string;
  icon: FC<SvgProps>;
  connectorId: ConnectorNames;
  priority: number;
}
