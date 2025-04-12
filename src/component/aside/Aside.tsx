import { Counter } from '../../pages/counter/Counter';
import style from './aside.module.css';

export const Aside = ()=>{

   return(
      <aside className={style.aside}>
      <h3>Aside</h3>
      <Counter/>
   </aside>
   )
}