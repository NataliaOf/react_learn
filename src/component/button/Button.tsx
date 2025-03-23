import style from "./buttom.module.css"

type ButtonProps = {
   text: string,
   onClick: ()=>void,
   disabled? : boolean
}

export const Button =({onClick, disabled, text}: ButtonProps) =>{

   return(
      <button className={style.button} onClick={onClick} disabled={disabled}>{text}</button>
   )
}