import React from "react";
import ColorsFilter from "./colors-filter/ColorsFilter";
import ToneFilter from "./tone-filter/ToneFilter";

const FiltersSection = () => {
  return (
    <section>
      <h2 className="visually-hidden">Список фильтров</h2>
      <ul>
        <li>
          <ColorsFilter />
        </li>
        <li>
          <ToneFilter />
        </li>
      </ul>
    </section>
  );
};

export default FiltersSection;
