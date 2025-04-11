// import { useState} from "react"
import {useEffect, useReducer, createContext } from 'react';



import style from '../todo/toDoList.module.css';
import { AddToDo } from '../../component/addTodo/AddToDo';
import { ToDoListBox } from '../../component/todoListBox/ToDoListBox';


export type taskType ={
   id: string,
   task: string,
   complited: boolean
  }

  interface TodoState  {
   todos:  taskType[];
 }
 interface TodoContextProps {
   state: TodoState;
   dispatch: React.Dispatch<TodoAction>;
 }
 
 const loadFromLocalStorage = (): taskType[] => {
   const data = localStorage.getItem("todos");
   try{

      return data ? JSON.parse(data) : []   
   }catch{
      return []
   }
};

const initialState: TodoState = {
   todos: loadFromLocalStorage(),
};
// const initialState:TodoState = {
   // todos:[]
// }

type TodoAction =
  | { type: 'ADD_TODO'; payload: taskType }
  | { type: 'REMOVE_TODO'; payload: string }
  | { type: 'COMPLITED_TODO'; payload : string}
  
  export const ToDoContext = createContext<TodoContextProps | null>(null);  


export const ToDoListHook = ()=>{
  
function reducer(state:TodoState, action:TodoAction):TodoState {
   switch (action.type) {
      case 'ADD_TODO':
         return { todos: [...state.todos, action.payload] };
      case 'REMOVE_TODO':
         return { todos: state.todos.filter((todo) => todo.id !== action.payload) }
      case 'COMPLITED_TODO':
      const newState = state.todos.map(todo=> {
         if(todo.id === action.payload){  todo.complited = !todo.complited}
         return todo
      })
         return { todos : newState}
   
      default:
         return state;
   }
 }
   
 const [state, dispatch]= useReducer(reducer,initialState)


useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state.todos));
}, [state.todos]);
   
   
    return(
      <div className={style.container}>
      <h2 className={style.title}>Todo list with hook</h2>

      <ToDoContext.Provider value={{state, dispatch}}>

         <AddToDo/>

         <ToDoListBox/>
      </ToDoContext.Provider>


      


      </div>
   )
}