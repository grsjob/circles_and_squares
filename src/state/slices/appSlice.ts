import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
}
const initialState: AppState = {
  loading: true,
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    initializeApp: () => initialState,
    startLoading: (state) => {
      state.loading = true;
    },
    endLoading: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoading, endLoading, initializeApp } = slice.actions;

export default slice.reducer;
