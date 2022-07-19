import React, { ChangeEvent } from "react";
import { StyledColorsList } from "./colorsFilterStyles";
import { setCheckboxNamesMap } from "../filter-functions";

interface ColorsFilterProps {
  colors: string[];
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ColorsFilter = ({ colors, handleChange }: ColorsFilterProps) => {
  const namesArray = setCheckboxNamesMap(colors);

  return (
    <StyledColorsList>
      <li>
        <input
          type="checkbox"
          name="red"
          checked={!!namesArray.get(`red`)}
          onChange={handleChange}
        />
        <label htmlFor="red">красные</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="green"
          checked={!!namesArray.get(`green`)}
          onChange={handleChange}
        />
        <label htmlFor="green">зеленые</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="blue"
          checked={!!namesArray.get(`blue`)}
          onChange={handleChange}
        />
        <label htmlFor="blue">синие</label>
      </li>
      <li>
        <input
          type="checkbox"
          name="yellow"
          checked={!!namesArray.get(`yellow`)}
          onChange={handleChange}
        />
        <label htmlFor="yellow">желтые</label>
      </li>
    </StyledColorsList>
  );
};

export default ColorsFilter;
