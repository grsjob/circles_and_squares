import React from "react";
import ColorsFilter from "./colors-filter/ColorsFilter";
import ToneFilter from "./tone-filter/ToneFilter";
import {
  StyledElementFiltersList,
  StyledFilterSection,
  StyledFiltersList,
} from "./filtersSectionStyles";
import { useStore } from "../../state/storeHooks";

const FiltersSection = () => {
  const { sidePanelVisible } = useStore(({ app }) => app);

  return (
    <>
      {sidePanelVisible && (
        <StyledFilterSection>
          <h2 className="visually-hidden">Список фильтров</h2>
          <StyledFiltersList>
            <StyledElementFiltersList>
              <ColorsFilter />
            </StyledElementFiltersList>
            <StyledElementFiltersList>
              <ToneFilter />
            </StyledElementFiltersList>
          </StyledFiltersList>
        </StyledFilterSection>
      )}
    </>
  );
};

export default FiltersSection;
