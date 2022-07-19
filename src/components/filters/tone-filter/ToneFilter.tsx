import React from "react";
import { store } from "../../../state/store";
import { setTone } from "../../../state/slices/filterSlice";

const ToneFilter = () => {
  return (
    <ul>
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
    </ul>
  );
};

export default ToneFilter;
