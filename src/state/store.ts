import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";
import filter from "./slices/filterSlice";

export const store = configureStore({
  reducer: { app, filter },
});
export type State = ReturnType<typeof store.getState>;
