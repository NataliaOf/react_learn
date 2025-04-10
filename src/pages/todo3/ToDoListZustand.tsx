

import { AddToDoZ } from '../../component/addTodo/AddToDoZ'
import { ToDoListBozZ } from '../../component/todoListBox/ToDoListBoxZ'
import style from '../todo/toDoList.module.css'

export const ToDoListZustand = ()=>{


   return(
     <>
     <div className={style.container}>

     <h2  className={style.title}>ToDo List + Zustand</h2>
     <AddToDoZ/>
     <ToDoListBozZ/>
     </div>
     </>
      
   )
}