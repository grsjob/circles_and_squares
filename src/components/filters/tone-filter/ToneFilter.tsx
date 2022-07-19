import React, { ChangeEvent } from "react";
import { StyledTonesList } from "./toneFilterStyles";

interface ToneFilterProps {
  tone: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ToneFilter = ({ tone, handleChange }: ToneFilterProps) => {
  return (
    <StyledTonesList>
      <li>
        <input
          type="radio"
          value="all"
          checked={tone === "all"}
          name="tone"
          onChange={handleChange}
        />
        <label htmlFor="all">все</label>
      </li>
      <li>
        <input
          type="radio"
          value="dark"
          checked={tone === "dark"}
          name="tone"
          onChange={handleChange}
        />
        <label htmlFor="dark">темные</label>
      </li>
      <li>
        <input
          type="radio"
          value="light"
          checked={tone === "light"}
          name="tone"
          onChange={handleChange}
        />
        <label htmlFor="light">светлые</label>
      </li>
    </StyledTonesList>
  );
};

export default ToneFilter;
