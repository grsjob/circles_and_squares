import React, { ChangeEvent } from "react";
import { store } from "../../../state/store";
import { deleteForm, setForm } from "../../../state/slices/filterSlice";

const ColorsFilter = () => {
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
    </ul>
  );
};

export default ColorsFilter;
