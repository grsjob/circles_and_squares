import React from "react";
import { Colors, Forms } from "../../types/data";
import { StyledListItem } from "./listItemSlyles";

interface ListItemProps {
  form: Forms;
  color: Colors;
  tone: boolean;
  ariaLabel: Forms;
}

const ListItem = ({ form, color, tone, ariaLabel }: ListItemProps) => {
  return (
    <StyledListItem
      form={form}
      color={color}
      tone={tone}
      aria-label={ariaLabel}
    ></StyledListItem>
  );
};

export default ListItem;
