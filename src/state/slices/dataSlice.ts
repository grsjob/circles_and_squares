import { IData } from "../../types/data";
import testData from "../../assets/test.json";
import { createSlice } from "@reduxjs/toolkit";

interface DataState {
  data: IData[];
}

const initialState: DataState = {
  data: testData,
};

const slice = createSlice({
  name: "data",
  initialState,
  reducers: {},
});

export const {} = slice.actions;
export default slice.reducer;
