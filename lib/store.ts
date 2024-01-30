import { configureStore } from "@reduxjs/toolkit";

import TodosSliceReducer from "./features/todos/todosSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      todos: TodosSliceReducer,
    }
  })
}

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch']
