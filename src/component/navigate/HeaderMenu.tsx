

import { Link } from "react-router-dom";

import style from './headerMenu.module.css';
export const HeaderMenu = ()=>{

   return(
      <nav className={style.menu}>
      <Link className={style.link} to = "/">Home</Link>
    
       <Link className={style.link} to = "/todolist">ToDoList</Link>
       <Link className={style.link} to = "/todolisthook">ToDoListHook</Link>
       <Link className={style.link} to = "/todolistzustand">ToDoListZustand</Link>
      </nav>
   )
}