import { useState } from "react"

export const Counter:React.FC = ()=>{

   const[count, setCount] = useState<number>(0);
   
   const incriment = ()=>{
      setCount(count=> count+1)
   }
   const decriment = ()=>{
      setCount(count=> count-1)
   }

   return(
    <div>
      <h2>Counter</h2>
      <h3>{count}</h3>
      <button onClick={incriment}>+</button>
      <button onClick={decriment}>-</button>
    </div>

   )
}