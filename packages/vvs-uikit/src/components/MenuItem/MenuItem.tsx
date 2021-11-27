import React from "react";
import { Link } from "react-router-dom";
import { DropdownMenuItemType } from "../DropdownMenu/types";
import StyledMenuItem, { StyledMenuItemContainer } from "./styles";
import { MenuItemProps } from "./types";
import StarIcon from "./StarIcon";

const MenuItem: React.FC<MenuItemProps> = ({
  children,
  href,
  isActive = false,
  variant = "default",
  statusColor,
  type,
  ...props
}) => {
  if (type === DropdownMenuItemType.EXTERNAL_LINK) {
    return (
      <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
        <StyledMenuItem
          as="a"
          href={href}
          target="_blank"
          $isActive={isActive}
          $variant={variant}
          $statusColor={statusColor}
          {...props}
        >
          {children}
          <StarIcon />
        </StyledMenuItem>
      </StyledMenuItemContainer>
    );
  }
  return (
    <StyledMenuItemContainer $isActive={isActive} $variant={variant}>
      <StyledMenuItem as={Link} to={href} $isActive={isActive} $variant={variant} $statusColor={statusColor} {...props}>
        {children}
        <StarIcon />
      </StyledMenuItem>
    </StyledMenuItemContainer>
  );
};

export default MenuItem;
