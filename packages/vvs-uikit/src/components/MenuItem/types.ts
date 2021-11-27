import { Colors } from "../../theme";
import { DropdownMenuItemType } from "../DropdownMenu/types";

export type MenuItemVariant = "default" | "subMenu";

export interface MenuItemProps {
  isActive?: boolean;
  href: string;
  variant?: MenuItemVariant;
  statusColor?: keyof Colors;
  type?: DropdownMenuItemType;
}

export type StyledMenuItemProps = {
  $isActive?: boolean;
  $variant?: MenuItemVariant;
  $statusColor?: keyof Colors;
};
