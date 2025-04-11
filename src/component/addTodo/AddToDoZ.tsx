import { Button } from "../button/Button"
import { Input } from "../input/Input"
import { useTodos } from "../../store/store";
import style from '../../pages/todo/toDoList.module.css';
import { useState } from "react";

export const AddToDoZ = ()=>{
const [value, setValue]= useState('')
const addTask = useTodos(state=> state.addTodo)
const hendleInput = (e:React.ChangeEvent<HTMLInputElement>)=>{
   setValue(e.target.value)
}

const hendelAddTack = ()=>{
   if(!value)return
   addTask(value)
   setValue('')
}
function handleKeyDown(e:React.KeyboardEvent) {
   if (e.key === 'Enter') {
      hendelAddTack()
   }
 }
   return(
      <div className={style.flex}>
   
      <Input type="text" placeholder="Add task"
       value={value} 
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=>hendleInput(e)}
       onKeyDown={e=>handleKeyDown(e)} 
       />
      <Button onClick={()=>hendelAddTack()} text="Add"/>
   </div>
   )
}