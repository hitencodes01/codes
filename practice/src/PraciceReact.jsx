import React, { useState,useContext,memo} from 'react'
import NoteContext from './context/NoteContext'

 function PraciceReact(prop) {
  // console.log("itspracticereact")
  //   const [arr,addarr] = useState([])
  //   const [data,inputData] = useState()
  //   const adddata = () => {
  //       addarr((e) => ([...e,data]))
  //   }
  //   const a  = useContext(NoteContext)
  //   console.log("a",a.name)
  // prop.updateCount1()
  console.log("props updated")
  return (
    <>
    {/* <div><textarea value={data} placeholder='create your todos' onChange={(e)=>inputData(e.target.value)}></textarea><button onClick={()=>adddata()}>Save</button>
    {prop.count}</div>
    {
        arr.map((item,index) => {
            return <ul type="none" id="index">
                        <li>{item}</li>
                   </ul>
        })
    } */}
    <br />
    At practice react ---
    {prop.count}
    </>
  )
}
export default memo(PraciceReact)