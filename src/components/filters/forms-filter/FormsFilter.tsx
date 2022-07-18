import React, { ChangeEvent } from "react";
import { store } from "../../../state/store";
import { deleteForm, setForm } from "../../../state/slices/filterSlice";

const FormsFilter = () => {
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      store.dispatch(setForm(e.target.name));
    } else {
      store.dispatch(deleteForm(e.target.name));
    }
  }
  return (
    <ul>
      <li>
        <input type="checkbox" name="circle" onChange={handleChange} />
        <label htmlFor="circle">красные</label>
      </li>
      <li>
        <input type="checkbox" name="square" onChange={handleChange} />
        <label htmlFor="square">зеленые</label>
      </li>
      <li>
        <input type="checkbox" name="triangle" onChange={handleChange} />
        <label htmlFor="triangle">зеленые</label>
      </li>
    </ul>
  );
};

export default FormsFilter;
