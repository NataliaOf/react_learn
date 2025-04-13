import { createPortal } from "react-dom";
import { ReactNode } from "react";
// import ReactDOM from "react-dom";
import styles from "./dialog.module.css"; 
import { Button } from "../button/Button";

type dialogProps = {
   isOpen: boolean, 
   onClose:()=>void,
    children:ReactNode
}

export const Dialog = ({ isOpen, onClose, children }:dialogProps) => {
  if (!isOpen) return null;
  const modalRoot = document.getElementById("modal-root");

  if (!modalRoot) {
    console.error("Елемент #modal-root не знайдено!");
    return null;
  }
//   const openPortal = isOpen?  `${styles.open} ${styles.overlay}` : styles.overlay
const openPortal = isOpen && styles.open ? `${styles.open} ${styles.overlay}` : styles.overlay;  
return createPortal(
    <div className={openPortal} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
        <Button text="Close" onClick={onClose} />
      
      </div>
    </div>,
     modalRoot
  );
};

