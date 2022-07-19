import React, { ChangeEvent } from "react";
import ColorsFilter from "./colors-filter/ColorsFilter";
import ToneFilter from "./tone-filter/ToneFilter";
import {
  StyledElementFiltersList,
  StyledFilterSection,
  StyledFiltersList,
  StyledInputNumber,
} from "./filtersSectionStyles";
import { useStore } from "../../state/storeHooks";
import { store } from "../../state/store";
import {
  deleteColor,
  setColor,
  setColumnsNumber,
  setTone,
} from "../../state/slices/filterSlice";

const FiltersSection = () => {
  const { sidePanelVisible } = useStore(({ app }) => app);
  const { columns, tone, colors } = useStore(({ filter }) => filter);

  function handleChangeForColors(e: ChangeEvent<HTMLInputElement>) {
    if (e.target.checked) {
      store.dispatch(setColor(e.target.name));
    } else {
      store.dispatch(deleteColor(e.target.name));
    }
  }

  function handleChangeForTone(e: ChangeEvent<HTMLInputElement>) {
    store.dispatch(setTone(e.target.value));
  }
  return (
    <>
      {sidePanelVisible && (
        <StyledFilterSection>
          <h2 className="visually-hidden">Список фильтров</h2>
          <StyledFiltersList>
            <StyledElementFiltersList>
              <ColorsFilter
                colors={colors}
                handleChange={handleChangeForColors}
              />
            </StyledElementFiltersList>
            <StyledElementFiltersList>
              <ToneFilter tone={tone} handleChange={handleChangeForTone} />
            </StyledElementFiltersList>
            <StyledElementFiltersList>
              <label htmlFor="columns">колонок</label>
              <StyledInputNumber
                name="columns"
                type="number"
                placeholder="from 1 to 4"
                value={columns}
                onChange={(e) =>
                  store.dispatch(setColumnsNumber(parseInt(e.target.value, 10)))
                }
              />
            </StyledElementFiltersList>
          </StyledFiltersList>
        </StyledFilterSection>
      )}
    </>
  );
};

export default FiltersSection;
