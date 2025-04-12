import { HeaderMenu } from '../navigate/HeaderMenu'
import style from './header.module.css'


export const Header = ()=>{

   return(
      <header className={style.header}>
      <div className={style.container}>
         <div className={style.flax}>
            <div>LOGO</div>

    <HeaderMenu/>
     <div>USER</div>
     </div>
   </div>
   </header>

   )
}