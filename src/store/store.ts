import { v4 as uuidv4 } from 'uuid';
import { create } from 'zustand';
import {persist} from 'zustand/middleware';


export type taskType ={
   id: string,
   task: string,
   complited: boolean
  }

  export type stateType ={
   todos: taskType[],
   addTodo: (title:string)=>void,
   toggleTodo: (todoId:string)=> void,
   removeTodo: (todoId:string)=> void
  }

export const useTodos = create( persist<stateType>((set, get)=>({
 todos: [],
 addTodo: (title)=> set((state: stateType)=>{
  const newTodo = {id :uuidv4(),task:title,complited:false} 

  return{ todos: [...state.todos, newTodo]}
  }),

  toggleTodo : (todoId) => set({
   todos:get().todos.map((todo)=> todoId === todo.id ? {...todo, complited : !todo.complited} : todo)
  }),
  removeTodo: (todoId)=> set({
   todos: get().todos.filter((todo)=> todoId !== todo.id)
  })

}),
{
   name: "todo-storage"
}
)
) 