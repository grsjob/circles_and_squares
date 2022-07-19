import React from "react";
import "../../assets/scss/App.scss";
import FiltersSection from "../filters/filters-section ";
import { FormsListWithFilters } from "../../hoc/FormsListWithFilters";

const App = () => {
  return (
    <>
      <h1>Круги и квадраты, v.1.0</h1>
      <FiltersSection />
      <FormsListWithFilters />
    </>
  );
};

export default App;
