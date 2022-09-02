// CORE
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: []
}

const todo = createSlice({
  name: 'Todo',
  initialState,
  reducers: {
    setTodo: (state, action) => {
      state.todos = action.payload;
    }
  }
});

export const { setTodo } = todo.actions;
export default todo.reducer;