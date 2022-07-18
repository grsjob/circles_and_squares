import React from "react";
import ColorsFilter from "./colors-filter/ColorsFilter";

const FiltersSection = () => {
  return (
    <section>
      <h2 className="visually-hidden">Список фильтров</h2>
      <ul>
        <li>
          <ColorsFilter />
        </li>
      </ul>
    </section>
  );
};

export default FiltersSection;
