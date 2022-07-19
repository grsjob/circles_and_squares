import React, { ComponentType } from "react";
import { IData } from "../types/data";
import { useStore } from "../state/storeHooks";
import FormsListSection from "../components/forms-list-section/FormsListSection";
import {
  ColorsFilter,
  Filter,
  FormsFilter,
} from "../components/filters/filter-classes";

interface FormsListWithFiltersProps {
  forms: IData[];
}

const ContainerWithFilters = <T extends FormsListWithFiltersProps>(
  Component: ComponentType<T>,
) => {
  const displayName = Component.displayName || Component.name || "Component";
  const ComponentWithFilters = (
    props: Omit<T, keyof FormsListWithFiltersProps>,
  ) => {
    const { data } = useStore(({ data }) => data);
    const { forms, tone, colors, columns } = useStore(({ filter }) => filter);
    const filtersArray = [
      new FormsFilter(data, forms),
      new ColorsFilter(data, forms),
    ];

    return <Component formsArray={data} {...(props as T)} />;
  };
  ComponentWithFilters.displayName = `ContainerWithFilters(${displayName})`;
  return ComponentWithFilters;
};

export const FlightsListContainer = ContainerWithFilters(FormsListSection);

function applyFilters(data: IData[], filtersArray: Array<Filter>) {
  const currentFilters = filtersArray.filter((item) => item.filter.length > 0);
  if (currentFilters.length === 0) {
    return data;
  } else if (currentFilters.length === 1) {
    return currentFilters[0].applyFilter();
  } else {
    let result = [];
    result.push(currentFilters[0].applyFilter());
    for (let i = 1; i < currentFilters.length; i++) {
      result = currentFilters[i].applyFilter();
    }
  }
}
