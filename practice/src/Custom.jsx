import React, {useRef,useEffect,useState} from 'react'

export default function Custom() {
    let  [y,z] = useState(true)
    let abc = useRef()
    let f1 = ()=>{
        console.log(abc)
    }
    const f4 = () => {
        z(!y)
        console.log(y)
    }
  return (
    <div>
        <input ref={abc} />
        <button  onClick={()=>f1()}>add</button>
        <div>
            <input type="text" />
            <button className={y?`bg-amber-300`:`bg-red-300`} onClick={()=>f4()}>click</button>
        </div>
    </div>
  )
}
