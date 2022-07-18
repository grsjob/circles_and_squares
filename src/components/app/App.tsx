import React from "react";
import "../../assets/scss/App.scss";
import FormsListSection from "../forms-list-section/FormsListSection";
import FiltersSection from "../filters/filters-section ";

const App = () => {
  return (
    <>
      <FiltersSection />
      <FormsListSection />
    </>
  );
};

export default App;
