import { IData } from "../../types/data";

export function formsFilter(forms: string[], data: IData[]) {
  return data.filter((item) => forms.includes(item.form));
}

export function colorsFilter(colors: string[], data: IData[]) {
  return data.filter((item) => colors.includes(item.color));
}

export function toneFilter(tone: string, data: IData[]) {
  switch (tone) {
    case "all":
      return data;
    case "dark":
      return data.filter((item) => item.dark === true);
    case "light":
      return data.filter((item) => item.dark === false);
  }
}
