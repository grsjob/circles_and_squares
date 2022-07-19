import React, { ChangeEvent } from "react";
import { store } from "../../../state/store";
import { deleteForm, setForm } from "../../../state/slices/filterSlice";
import { StyledFormsFilter } from "./formsFilterStyles";

const FormsFilter = () => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      store.dispatch(setForm(e.target.name));
    } else {
      store.dispatch(deleteForm(e.target.name));
    }
  }
  return (
    <StyledFormsFilter>
      <li>
        <input type="checkbox" name="circle" onChange={handleChange} />
        <label htmlFor="circle">круги</label>
      </li>
      <li>
        <input type="checkbox" name="square" onChange={handleChange} />
        <label htmlFor="square">квадраты</label>
      </li>
      <li>
        <input type="checkbox" name="triangle" onChange={handleChange} />
        <label htmlFor="triangle">треугольники</label>
      </li>
    </StyledFormsFilter>
  );
};

export default FormsFilter;
