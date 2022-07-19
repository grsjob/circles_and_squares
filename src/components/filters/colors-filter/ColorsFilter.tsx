import React, { ChangeEvent } from "react";
import { store } from "../../../state/store";
import { deleteColor, setColor } from "../../../state/slices/filterSlice";
import { StyledColorsList } from "./colorsFilterStyles";

const ColorsFilter = () => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      store.dispatch(setColor(e.target.name));
    } else {
      store.dispatch(deleteColor(e.target.name));
    }
  }
  return (
    <StyledColorsList>
      <li>
        <input type="checkbox" name="red" onChange={handleChange} />
        <label htmlFor="red">красные</label>
      </li>
      <li>
        <input type="checkbox" name="green" onChange={handleChange} />
        <label htmlFor="green">зеленые</label>
      </li>
      <li>
        <input type="checkbox" name="blue" onChange={handleChange} />
        <label htmlFor="blue">синие</label>
      </li>
      <li>
        <input type="checkbox" name="yellow" onChange={handleChange} />
        <label htmlFor="yellow">желтые</label>
      </li>
    </StyledColorsList>
  );
};

export default ColorsFilter;
