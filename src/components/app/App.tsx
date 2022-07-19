import React from "react";
import "../../assets/scss/App.scss";
import FiltersSection from "../filters/filters-section ";
import { FormsListWithFilters } from "../../hoc/FormsListWithFilters";
import { AppWrapper } from "./AppStyles";

const App = () => {
  return (
    <AppWrapper>
      <h1>Круги и квадраты, v.1.0</h1>
      <FiltersSection />
      <FormsListWithFilters />
    </AppWrapper>
  );
};

export default App;
