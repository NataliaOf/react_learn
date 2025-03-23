import style from './input.module.css'

type inputProps = {
   type : string, 
   value : string, 
   onChange : React.ChangeEventHandler , 
   placeholder : string, 
   disabled ? : boolean, 
   className ? : string 
}

export const Input = ({type, value, onChange, placeholder, disabled }:inputProps)=>{

   return(
      <input type={type} 
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={style.input}

      />
   )
}