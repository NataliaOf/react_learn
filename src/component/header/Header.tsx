import {useState} from 'react'
import { Button } from '../button/Button'
import { HeaderMenu } from '../navigate/HeaderMenu'
import style from './header.module.css'
import { Dialog } from '../dialog/Dialog'


export const Header = ()=>{
   const [isModalOpen, setModalOpen] = useState(false);
   return(
      <>
      <Dialog isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
      <h2>Це модальне вікно!</h2>
      </Dialog>
      <header className={style.header}>
      <div className={style.container}>
         <div className={style.flax}>
            <div>LOGO</div>

    <HeaderMenu/>
    <Button text="Open" onClick={() => setModalOpen(true)}/>
     <div>USER</div>
     </div>
   </div>
   </header>
   </>
   )
}