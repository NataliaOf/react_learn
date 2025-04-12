import { Button } from "../../component/button/Button";
import { Dialog } from "../../component/dialog/Dialog";
import { useState } from "react";

export const Home = () =>{

   const [isModalOpen, setModalOpen] = useState(false);
return(
   <>
   <h1 className='flax'>Home Page <Button text="Open" onClick={() => setModalOpen(true)} /></h1>
   <Dialog isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
   
   
   </>
)   
};
