import{ useState, useRef,useEffect} from 'react';
import { useContext } from 'react';
import { ToDoContext } from '../../pages/todo2/ToDoListHook'
import { v4 as uuidv4 } from 'uuid';
import { Input } from '../input/Input';
import { Button } from '../button/Button';
import style from '../../pages/todo/toDoList.module.css'

export const AddToDo = ()=>{
   
   const [value, setValue] = useState('');
   const hendleInput :React.ChangeEventHandler<HTMLInputElement> = (e:React.ChangeEvent<HTMLInputElement>)=>{
      setValue(e.target.value)
   }

   const context = useContext(ToDoContext);
if (!context) {
    return <p>Ошибка: Контекст не найден</p>;
}
const { dispatch } = context;
   
 
   
    const addTask = ()=>{
      setValue('');
      if(!value)return;
    dispatch({
      type: 'ADD_TODO',
      payload:{
         id :uuidv4(),
         task:value,
         complited:false
      }
    })
    }
    const inputRef = useRef<HTMLInputElement>(null)
    useEffect(()=>{
    inputRef.current?.focus()
   },[])

   
      function handleKeyDown(e:React.KeyboardEvent) {
         if (e.key === 'Enter') {
            addTask()
         }
       }
    
   return(

      <div className={style.flex}>
      <Input type="text" placeholder="Add task"
       value={value} 
       onChange={(e:React.ChangeEvent<HTMLInputElement>)=>hendleInput(e)}
       onKeyDown={e=>handleKeyDown(e)} 
       ref={inputRef} />
      <Button onClick={()=>addTask()} text="Add"/>
   </div>
   )
}