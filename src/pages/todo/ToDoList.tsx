import { useState} from "react"
import { v4 as uuidv4 } from 'uuid';

import style from './toDoList.module.css';
import { Button } from "../../component/button/Button";
import { Input } from "../../component/input/Input";


export const ToDoList = ()=>{

   type tasksState = {
      id : string,
      task : string,
      complitly : boolean
   }

   const [value, setValue] = useState('');
   const hendleInput :React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(e.target.value)
   }
   const [tasks, setTasks]= useState<tasksState[]>([])

   const addTask = (value:string)=>{
      const newTask:tasksState = {
       id :uuidv4(),
       task:value,
       complitly:false
      }
      setTasks([...tasks,newTask]);
      setValue('')
   }

   const hendleTask= (id:string)=>{
     const newTasks =  tasks.map(item=>{
   
         if(id=== item.id){
            item.complitly= !item.complitly
         }
         return item
      })


      setTasks(newTasks)


   }

   
     function removeTask(id:string){
     
         const newTasks = tasks.filter(item=> id!==item.id)

         setTasks(newTasks);
      
      }
 
  
  
      // :React.ChangeEvent<HTMLInputElement>
   return(
      <div className={style.container}>
      <h2 className={style.title}>Todo list</h2>
      <div className={style.flex}>
         <Input type="text" placeholder="Add task" value={value} onChange={(e:React.ChangeEvent<HTMLInputElement>)=>hendleInput(e)}/>
         <Button onClick={()=>addTask(value)} text="Add"/>
      </div>
      <div className={style.taskBox}>
         <ul >
         { tasks.length>0 ?
          tasks.map(task => (
           <li key={task.id}  className={style.flex+ ' ' +  style.li} >
             <p onClick={()=>hendleTask(task.id)} className={task.complitly?style.complited + ' ' + style.text  : style.text}> {task.task}</p> 
             <Button onClick={()=>removeTask(task.id)} text="X"/>
           </li> 
         ))
         : <p>Tasks not founded</p>
      }
         </ul>
      </div>
      </div>
   )
}