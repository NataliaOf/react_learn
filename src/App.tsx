
import './css/App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from './pages/home/Home';

import { ToDoList } from './pages/todo/ToDoList';
import { ToDoListHook } from './pages/todo2/ToDoListHook';
import { ToDoListZustand } from './pages/todo3/ToDoListZustand'
import Layout from './layout/Layout';




function App() {
 

  return (

   <Router>
    
      <Routes>
         <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            
            <Route path='/todolist' element={<ToDoList/>}/>
            <Route path='/todolisthook' element={<ToDoListHook/>}/>
            <Route path='/todolistzustand' element={<ToDoListZustand/> }/>
         </Route>
      </Routes>
   </Router>


   
  )
}

export default App
