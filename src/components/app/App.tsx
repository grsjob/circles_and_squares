import React from "react";
import "../../assets/scss/App.scss";
import FormsListSection from "../forms-list-section/FormsListSection";
import FiltersSection from "../filters/filters-section ";

const App = () => {
  return (
    <>
      <h1>Круги и квадраты, v.1.0</h1>
      <FiltersSection />
      <FormsListSection />
    </>
  );
};

export default App;
