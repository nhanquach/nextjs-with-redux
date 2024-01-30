import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

interface ITodosState {
  todos: ITodo[]
}

const todosSlice = createSlice({
  name: 'todos',
  initialState: { todos: [] } as ITodosState,
  reducers: {
    todoAdded(state: ITodosState, action: PayloadAction<ITodo>) {
      state.todos.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    },
    todoToggled(state: ITodosState, action: PayloadAction<{ id: string }>) {
      const todo = state.todos.find(todo => todo.id === action.payload.id)
      if (todo) {
        todo.completed = !todo.completed
      }
    }
  }
});

export const { todoAdded, todoToggled } = todosSlice.actions;
export default todosSlice.reducer;

