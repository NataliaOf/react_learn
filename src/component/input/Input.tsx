import style from './input.module.css'

type inputProps = {
   type : string, 
   value : string, 
   onChange : React.ChangeEventHandler , 
   onKeyDown ?:  React.KeyboardEventHandler ,
   placeholder : string, 
   disabled ? : boolean, 
   className ? : string 
}

export const Input = ({type, value, onChange, onKeyDown, placeholder, disabled }:inputProps)=>{

   return(
      <input type={type} 
        value={value}
        onChange={onChange}
        onKeyDown={ onKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        className={style.input}

      />
   )
}