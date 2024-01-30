'use client';
import { todoToggled } from '@/lib/features/todos/todosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import React from 'react'


const Counter2 = () => {
  const state = useAppSelector((state: RootState) => state.todos);
  const dispatch = useAppDispatch();

  return (
    <div className='bg-green-100 p-2 rounded'>
      <h1 className='text-2xl'>Todo 2</h1>
      <ul>
        {state.todos.map((todo) => {
          return <li key={todo.id}
            className='p-2 hover:bg-gray-200 cursor-pointer'
            onClick={() => {
              dispatch(todoToggled({ id: todo.id }))
            }}>
            {todo.completed ? <del>{todo.text}</del> : todo.text}</li>
        })}
      </ul>
    </div>
  )
}

export default Counter2;
