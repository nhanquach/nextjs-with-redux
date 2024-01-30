'use client';
import { todoAdded } from '@/lib/features/todos/todosSlice';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { RootState } from '@/lib/store';
import React from 'react'


const Counter1 = () => {
  const state = useAppSelector((state: RootState) => state.todos);

  const dispatch = useAppDispatch();

  return (
    <div className='bg-blue-100 p-2 rounded'>
      <pre>
        {JSON.stringify(state)}
      </pre>
      <button className='button border-2 border-black p-2 mt-2 rounded' onClick={() => {
        dispatch(todoAdded({ id: "nhan" + state.todos.length, text: "nhan", completed: false }))
      }}>Add Todo</button>
    </div>
  )
}

export default Counter1;
