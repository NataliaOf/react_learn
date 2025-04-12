import { Button } from '../button/Button';
import style from './dialog.module.css';

interface ModalProps {
   isOpen: boolean;
   onClose: () => void;
 }
 



export function Dialog({ isOpen, onClose }:ModalProps) {
  if (!isOpen) return null;

  return (
    <div className={style.overlay}>
      <div className={style.modal}>
         <h2>Title</h2>
        <p className={style.text}>Це модальне вікно у React!</p>
        <Button text="Close" onClick={onClose}/>
       
      </div>
    </div>
  );
}


