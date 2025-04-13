

import { NavLink } from "react-router-dom";

import style from './headerMenu.module.css';
export const HeaderMenu = ()=>{

   return(
      <nav className={style.menu}>
      <NavLink style={({isActive})=>({color: isActive? 'var(--color-error)': 'var(--color-title)'})} className={style.link} to = "/">Home</NavLink>
    
       <NavLink style={({isActive})=>({color: isActive? 'var(--color-error)': 'var(--color-title)'})} className={style.link} to = "/todo">ToDo</NavLink>
       {/* <NavLink style={({isActive})=>({color: isActive? 'var(--color-error)': 'var(--color-title)'})} className={style.link} to = "/todolisthook">ToDoListHook</NavLink> */}
       {/* <NavLink style={({isActive})=>({color: isActive? 'var(--color-error)': 'var(--color-title)'})} className={style.link} to = "/todolistzustand">ToDoListZustand</NavLink> */}
      </nav>
   )
}