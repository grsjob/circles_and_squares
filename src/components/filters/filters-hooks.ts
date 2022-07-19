import { useStore } from "../../state/storeHooks";
import { colorsFilter, formsFilter, toneFilter } from "./filter-functions";
import { IData } from "../../types/data";
import { useEffect, useState } from "react";
interface Filter {
  value: string | string[];
  filterFunc: (arg: string | string[], arg2: IData[]) => IData[];
}

export function useFilters() {
  const { data } = useStore(({ data }) => data);
  const { tone, colors, forms } = useStore(({ filter }) => filter);
  const [dataArray, setDataArray] = useState([]);

  const filters: Array<Filter> = [
    { value: forms, filterFunc: formsFilter },
    { value: tone, filterFunc: toneFilter },
    { value: colors, filterFunc: colorsFilter },
  ];
  useEffect(() => {
    setDataArray(applyFilters(filters, data));
  }, [tone, colors, forms]);

  return dataArray;
}

export function applyFilters(filters: Array<Filter>, data: IData[]) {
  const currentFilters = filters.filter((filter) => filter.value.length > 0);
  const res: IData[] = [];
  if (currentFilters.length === 0) {
    return data;
  } else if (currentFilters.length > 1) {
    let result = currentFilters[0].filterFunc(currentFilters[0].value, data);
    for (let i = 1; i < currentFilters.length; i++) {
      result = currentFilters[i].filterFunc(currentFilters[i].value, result);
    }
    return result;
  } else {
    currentFilters.map((filter) => {
      res.push(...filter.filterFunc(filter.value, data));
    });
  }
  return res;
}
