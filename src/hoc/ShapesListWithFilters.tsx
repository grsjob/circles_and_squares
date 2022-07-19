import React, { ComponentType } from "react";
import { IData } from "../types/data";
import ShapesListSection from "../components/shapes-list-section/ShapeListSection";
import { useStore } from "../state/storeHooks";
import { useFilters } from "../components/filters/filters-hooks";

interface ShapesListWithFiltersProps {
  data: IData[];
  columns: number;
}

const ContainerWithFilters = <T extends ShapesListWithFiltersProps>(
  Component: ComponentType<T>,
) => {
  const displayName = Component.displayName || Component.name || "Component";
  const ComponentWithFilters = (
    props: Omit<T, keyof ShapesListWithFiltersProps>,
  ) => {
    const { columns } = useStore(({ filter }) => filter);
    const dataArray = useFilters();

    return <Component data={dataArray} columns={columns} {...(props as T)} />;
  };
  ComponentWithFilters.displayName = `ContainerWithFilters(${displayName})`;
  return ComponentWithFilters;
};

export const ShapesListWithFilters = ContainerWithFilters(ShapesListSection);
