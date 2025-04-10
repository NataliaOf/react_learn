
import './App.css'
import { Counter } from './pages/counter/Counter'
import { ToDoList } from './pages/todo/ToDoList'
import { ToDoListHook } from './pages/todo2/ToDoListHook'
import { ToDoListZustand } from './pages/todo3/ToDoListZustand'

function App() {
 

  return (
    <>
      
      {/* <Counter/> */}
      {/* <ToDoList/> */}
      {/* <ToDoListHook/> */}
      <ToDoListZustand/>
    </>
  )
}

export default App
