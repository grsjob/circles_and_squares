import React from "react";
import { Colors, Forms } from "../../types/data";
import { StyledListItem } from "./listItemSlyles";

interface ListItemProps {
  form: Forms;
  color: Colors;
  tone: number;
}

const ListItem = ({ form, color, tone }: ListItemProps) => {
  return (
    <StyledListItem form={form} color={color} tone={tone}></StyledListItem>
  );
};

export default ListItem;
