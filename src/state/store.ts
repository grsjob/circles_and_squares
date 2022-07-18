import { configureStore } from "@reduxjs/toolkit";
import app from "./slices/appSlice";

export const store = configureStore({
  reducer: { app },
});
export type State = ReturnType<typeof store.getState>;
