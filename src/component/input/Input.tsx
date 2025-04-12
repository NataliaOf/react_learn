import style from './input.module.css'
import { forwardRef } from 'react'




type inputProps = {
   type : string, 
   value : string, 
   onChange : React.ChangeEventHandler<HTMLInputElement> , 
   onKeyDown ?:  React.KeyboardEventHandler<HTMLInputElement> ,
   placeholder : string, 
   disabled ? : boolean, 
   className ? : string,

}

export const Input = forwardRef<HTMLInputElement,inputProps>(({type, value, onChange, onKeyDown, placeholder, disabled,className }, ref)=>{

   return(
      <input type={type} 
        value={value}
        onChange={onChange}
        onKeyDown={ onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={className ||style.input}
         ref={ref}
      />
   )
})