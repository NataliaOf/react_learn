
import { useTodos } from '../../store/store';
import { AddToDoZ } from '../../component/addTodo/AddToDoZ'
import { ToDoListBozZ } from '../../component/todoListBox/ToDoListBoxZ'
import style from '../todo/toDoList.module.css'

export const ToDoListZustand = ()=>{
   const todos = useTodos((state) => state.todos)
   const uncomplitedTodo = todos.filter(todo=> !todo.complited)
   const complitedTodo= todos.filter(todo=> todo.complited)
  

   return(
     <>
     <div className={style.container}>

     <h2  className={style.title}>ToDo List + Zustand</h2>
     <div className={`${style.flex}  ${style.title}`}>

     <h3>All tasks - {todos.length }</h3>
     <h3 className={ uncomplitedTodo.length ?style.textRed : style.notVisibel }>Uncompleted tasks -{uncomplitedTodo.length} </h3>
     </div>
     <AddToDoZ/>
     </div>
     <div className={uncomplitedTodo.length===0 ? style.notVisibel:  style.container}>

     <ToDoListBozZ title="Uncomplited"/>
     </div>

     
     <div className={complitedTodo.length===0 ? style.notVisibel:  style.container}>
     <ToDoListBozZ title="Complited"/>
    
     </div>
     </>
      
   )
}