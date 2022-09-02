// CORE 
import { configureStore } from "@reduxjs/toolkit";
import thunk from 'redux-thunk';
// ENGINE
import todo from "./slice";

export const store = configureStore({
  reducer: {
    todo,
  }, 
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), thunk]
});

