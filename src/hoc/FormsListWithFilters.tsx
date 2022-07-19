import React, { ComponentType } from "react";
import { IData } from "../types/data";
import FormsListSection from "../components/forms-list-section/FormsListSection";
import { useStore } from "../state/storeHooks";
import { useFilters } from "../components/filters/filters-hooks";

interface FormsListWithFiltersProps {
  data: IData[];
  columns: number;
}

const ContainerWithFilters = <T extends FormsListWithFiltersProps>(
  Component: ComponentType<T>,
) => {
  const displayName = Component.displayName || Component.name || "Component";
  const ComponentWithFilters = (
    props: Omit<T, keyof FormsListWithFiltersProps>,
  ) => {
    const { columns } = useStore(({ filter }) => filter);
    const dataArray = useFilters();

    return <Component data={dataArray} columns={columns} {...(props as T)} />;
  };
  ComponentWithFilters.displayName = `ContainerWithFilters(${displayName})`;
  return ComponentWithFilters;
};

export const FormsListWithFilters = ContainerWithFilters(FormsListSection);
