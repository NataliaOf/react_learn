
import style from '../../pages/todo/toDoList.module.css';
import { useTodos } from '../../store/store';
import { taskType } from '../../store/store';

import { Button } from '../button/Button';


 
type PropsType ={
   title: string,
   
}


export const ToDoListBozZ = ({title}:PropsType)=>{

   const todos = useTodos((state) => state.todos)
   
   let todos2 = []
    if(title==='Complited'){
    todos2= todos.filter(todo =>todo.complited===true)
    }else{
    todos2= todos.filter(todo =>todo.complited===false)
    }

    const toggleTodo = useTodos((state) => state.toggleTodo)
   const removeTodo = useTodos((state)=> state.removeTodo)
   const hendlerToggleTodo = (id:string)=>{
      toggleTodo(id)
   }

   return (

      <div className={ style.taskBox}>
         <h2>{title} - {todos2.length}</h2>
         <ul>

            {todos2.map((todo:taskType)=>(
               <li key={todo.id} className={style.flex+ ' ' +  style.li} >
               
               <p onClick={()=>hendlerToggleTodo(todo.id)} className={todo.complited ? style.complited +' ' +style.text  : style.text}> {todo.task}</p> 
             <Button  onClick={()=>removeTodo(todo.id)}text="X"/>
                </li>
            ))}
            
         </ul>
      </div>
   )
}