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
  },
});

export const { setForm, deleteForm, setColor, deleteColor } = slice.actions;

export default slice.reducer;
