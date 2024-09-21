
import './App.css';
import { useState, useEffect, useMemo, useCallback } from "react"
// import Todolist from './Todolist';
import PraciceReact from './PraciceReact';
import Custom from './Custom';
import Layout from './Layout';
import NoteState from './context/Notestate';



function App() {

  const [count1, setCount1] = useState(1)
  const [count2, setCount2] = useState(1)
  const updateCount1 = useCallback(() => {
    setCount1(e => (e + 1))
  },[]) 
  return (
    <>
      <button onClick={() => updateCount1()} > Update count1 </button> <br></br>
      <button onClick={() => setCount2(e => (e + 1))} > Update count2 </button> <br></br>
      {count1} {count2}
      <PraciceReact count={count1} updateCount1={updateCount1}  />
    </>
  )
}
export default App;