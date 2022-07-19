import React from "react";
import { store } from "../../../state/store";
import { setTone } from "../../../state/slices/filterSlice";
import { StyledTonesList } from "./toneFilterStyles";

const ToneFilter = () => {
  return (
    <StyledTonesList>
      <li>
        <input
          type="radio"
          value="all"
          name="tone"
          onChange={(e) => store.dispatch(setTone(e.target.value))}
        />
        <label htmlFor="all">все</label>
      </li>
      <li>
        <input
          type="radio"
          value="dark"
          name="tone"
          onChange={(e) => store.dispatch(setTone(e.target.value))}
        />
        <label htmlFor="dark">темные</label>
      </li>
      <li>
        <input
          type="radio"
          value="light"
          name="tone"
          onChange={(e) => store.dispatch(setTone(e.target.value))}
        />
        <label htmlFor="light">светлые</label>
      </li>
    </StyledTonesList>
  );
};

export default ToneFilter;
