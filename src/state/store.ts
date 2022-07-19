import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";
import filter from "./slices/filterSlice";
import data from "./slices/dataSlice";

export const store = configureStore({
  reducer: { app, filter, data },
});
export type State = ReturnType<typeof store.getState>;
