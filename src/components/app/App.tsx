import React from "react";
import "../../assets/scss/App.scss";
import FiltersSection from "../filters/filters-section ";
import { ShapesListWithFilters } from "../../hoc/ShapesListWithFilters";
import { AppWrapper, MainTitle } from "./AppStyles";

const App = () => {
  return (
    <AppWrapper>
      <MainTitle>Круги и квадраты, v.1.0</MainTitle>
      <FiltersSection />
      <ShapesListWithFilters />
    </AppWrapper>
  );
};

export default App;
