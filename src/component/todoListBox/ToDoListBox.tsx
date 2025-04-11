import style from '../../pages/todo/toDoList.module.css';
import { useContext } from 'react';
import { Button } from '../button/Button';
import { ToDoContext } from '../../pages/todo2/ToDoListHook';
import { taskType } from '../../pages/todo2/ToDoListHook';
export  const ToDoListBox = ()=>{

   const context = useContext(ToDoContext);
if (!context) {
    return <p>Ошибка: Контекст не найден</p>;
}
const { state, dispatch } = context;

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
          todos.map((task:taskType) => (
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