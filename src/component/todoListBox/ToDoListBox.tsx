import style from '../../pages/todo/toDoList.module.css';
import { useContext } from 'react';
import { Button } from '../button/Button';
import { ToDoContext } from '../../pages/todo2/ToDoListHook';

export  const ToDoListBox = ()=>{

   const{state, dispatch}= useContext(ToDoContext)

const {todos} = state;

const removeTask = (id:string)=>{
   dispatch({
      type: 'REMOVE_TODO',
      payload: id
   })
}

const hendleTask =(id:string)=>{
   dispatch({
      type: 'COMPLITED_TODO',
      payload: id
   })
}

   
   return (

      <div className={style.taskBox}>
     <ul>
     { todos.length>0 ?
          todos.map(task => (
           <li key={task.id}  className={style.flex+ ' ' +  style.li} >
             <p onClick={()=>hendleTask(task.id)} className={task.complited ? style.complited +' ' +style.text  : style.text}> {task.task}</p> 
             <Button onClick={()=>removeTask(task.id)} text="X"/>
           </li> 
         ))
         : <p>Tasks not founded</p>
      }
     </ul>
   </div>
   )
}