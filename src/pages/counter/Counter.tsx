import { useState } from "react"
import { Button } from "../../component/button/Button";
import '../../css/App.css';
import style from './counter.module.css';
export const Counter:React.FC = ()=>{

   const[count, setCount] = useState<number>(0);
   
   const incriment = ()=>{
      setCount(count=> count+1)
   }
   const decriment = ()=>{
      setCount(count=> count-1)
   }

   return(
    <div className={style.counter}>
      <h2>Counter</h2>
      <div className='flax'>
      <Button text="+" onClick={incriment}/>
      <h3>{count}</h3>
      <Button text="-" onClick={decriment}/>
     </div>
    </div>

   )
}