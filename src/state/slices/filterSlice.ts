import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  forms: string[];
  colors: string[];
  tone: string;
  columns: number;
}

const initialState: FilterState = {
  forms: [],
  colors: [],
  tone: "",
  columns: 4,
};

const slice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setForm: (state, { payload: form }: PayloadAction<string>) => {
      state.forms.push(form);
    },
    deleteForm: (state, { payload: form }: PayloadAction<string>) => {
      state.forms = state.forms.filter((formItem) => formItem !== form);
    },
    setColor: (state, { payload: color }: PayloadAction<string>) => {
      state.colors.push(color);
    },
    deleteColor: (state, { payload: color }: PayloadAction<string>) => {
      state.colors = state.colors.filter((colorItem) => colorItem !== color);
    },
    setTone: (state, { payload: tone }: PayloadAction<string>) => {
      state.tone = tone;
    },
    setColumnsNumber: (
      state,
      { payload: columnsNumber }: PayloadAction<number>,
    ) => {
      if (columnsNumber > 4) {
        state.columns = 4;
      } else {
        state.columns = columnsNumber;
      }
    },
  },
});

export const {
  setForm,
  deleteForm,
  setColor,
  deleteColor,
  setTone,
  setColumnsNumber,
} = slice.actions;

export default slice.reducer;
