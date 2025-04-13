import {  Outlet, Link } from "react-router-dom";
import style from './toDoPage.module.css';

export const ToDoPage = ()=>{
console.log(style)
   return(
      <section>
         <nav className={style.menu}>
            <ul className="flax">
               <li className={style.link}>
               <Link to='/todo/todolist'>ToDoList</Link>
               </li>
               <li className={style.link}>
               <Link to='/todo/todolisthook'>ToDoListHook</Link>
               </li>
               <li className={style.link}>
               <Link to='/todo/todolistzustand'>ToDoListZustand</Link>
               </li>
            </ul>
            
            
            
         </nav>
      
      <Outlet/>
      </section>
   )
}


