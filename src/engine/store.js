// CORE 
import { configureStore } from "@reduxjs/toolkit";
// ENGINE
import todo from "./slice";

export const store = configureStore({
  reducer: {
    todo,
  }
});

