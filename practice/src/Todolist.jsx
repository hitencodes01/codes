import React, { useState,useEffect,useRef } from 'react'
import axios from 'axios'
import Todocard from './Todocard'

export default function Todolist() {
    const [list,uplist] = useState([])
    const [txt , updateTex] = useState("harami")
    const [ishide,hidingit] = useState(true)
    const abc = useRef()
    const f8 = ()=>{
      console.log(abc.current)
    }
    f8()
    let get = async () => {
      let data = await axios('http://localhost:3001/todos')
      uplist(data.data)
    }
    useEffect(()=>{
      get()
        })
    let f1 = () => {
        uplist((e) =>( [...e,txt]))
    }
    let Delete = async (val) => {
      const deleteditem = await axios.delete(`http://localhost:3001/todos/${val}`)
      let m = list.filter((i,x) => x != val)
      // let m = list.filter(item => item != val)
      uplist([...m])
      // uplist([...m])
      console.log(list)
    }
    const f3 = (index) => {
      let m = [...list]
      m[index] = txt
      console.log(m)
      uplist([...m])
    }
    const f4 = () => {
      hidingit(!ishide)
    }
    let edit = async (item,index,id) => {
      
    }
  return (
    <>
    <div className="main flex flex-row justify-center h-[200px] w-[100%] gap-[100px] bg-slate-400">
      <textarea type="text" value={txt} placeholder='enter your text' onChange={(e) => updateTex(e.target.value)} id='ipt'> </textarea>
      <button className='h-[50px] bg-white my-auto w-[100px] font-extrabold text-3xl border-4 border-black rounded-lg shadow-2xl hover:bg-black hover:border-white hover:text-white ' onClick={() => f1()} >Save</button>
    </div>

    <button onClick={()=>f4()} >Hide List</button>
    <input ref={abc}></input>
    {
      ishide && (list.length == 0  ? <div className='bg-slate-500'>your list is empty</div>: 
      list.map((item,index)=>{
           return (
              <h1 key={index}>
                <div>
                 <Todocard item={item} index={index}/>
                </div>
              </h1>
           )     
      }))
    }
    </>
  )
}