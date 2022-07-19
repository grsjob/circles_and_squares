import { createSlice } from "@reduxjs/toolkit";

interface AppState {
  loading: boolean;
  sidePanelVisible: boolean;
}
const initialState: AppState = {
  loading: true,
  sidePanelVisible: false,
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
    sidePanelVisibleToggle: (state) => {
      state.sidePanelVisible = !state.sidePanelVisible;
    },
  },
});

export const { startLoading, endLoading, sidePanelVisibleToggle } =
  slice.actions;

export default slice.reducer;
