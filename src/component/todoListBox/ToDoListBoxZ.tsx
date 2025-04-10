
import style from '../../pages/todo/toDoList.module.css';
import { useTodos } from '../../store/store';
import { taskType } from '../../store/store';
import { Button } from '../button/Button';
export const ToDoListBozZ = ()=>{

   const todos = useTodos((state) => state.todos)
   const toggleTodo = useTodos((state) => state.toggleTodo)
   const removeTodo = useTodos((state)=> state.removeTodo)
   const hendlerToggleTodo = (id:string)=>{
      toggleTodo(id)
   }

   return (

      <div className={style.taskBox}>
         <ul>

            {todos.map((todo:taskType)=>(
               <li key={todo.id} className={style.flex+ ' ' +  style.li} >
               
               <p onClick={()=>hendlerToggleTodo(todo.id)} className={todo.complited ? style.complited +' ' +style.text  : style.text}> {todo.task}</p> 
             <Button  onClick={()=>removeTodo(todo.id)}text="X"/>
                </li>
            ))}
            
         </ul>
      </div>
   )
}