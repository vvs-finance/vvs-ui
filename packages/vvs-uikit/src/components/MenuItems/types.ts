import { BoxProps } from "../Box";
import { DropdownMenuItems, DropdownMenuItemType } from "../DropdownMenu/types";

export type MenuItemsType = {
  label: string;
  href: string;
  icon?: string;
  items?: DropdownMenuItems[];
  showOnMobile?: boolean;
  showItemsOnMobile?: boolean;
  type?: DropdownMenuItemType;
  onClick?: () => void;
  hidden?: boolean;
};

export interface MenuItemsProps extends BoxProps {
  items: MenuItemsType[];
  activeItem?: string;
  activeSubItem?: string;
  type?: DropdownMenuItemType;
}
