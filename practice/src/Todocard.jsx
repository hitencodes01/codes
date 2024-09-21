import React from 'react'

export default function Todocard({item},{index}) {
  // const x = {name:"hiten",laname:"gupta"}
  // // console.log(name)
  // f1(x)
  return (
    <ul type="none">
    <li className='m-[20px]'>
      {item.title}
      <div className='flex flex-row gap-[100px]'>
      <button className='h-[30px] bg-white my-auto w-[70px]  font-extrabold text-1xl border-4 border-black rounded-lg shadow-2xl hover:bg-black hover:border-white hover:text-white ' onClick={() => Delete(item._id)}>Delete
      </button>
      <button className='h-[30px] bg-white my-auto w-[50px] font-extrabold text-1xl border-4 border-black rounded-lg shadow-2xl hover:bg-black hover:border-white hover:text-white ' onClick={()=>edit(item.title,index,item._id)}>Edit
      </button>  
      <button className='h-[30px] bg-white my-auto w-[80px] font-extrabold text-1xl border-4 border-black rounded-lg shadow-2xl hover:bg-black hover:border-white hover:text-white ' onClick={()=>f3(index)}>Update
      </button>
      </div>
    </li>
  </ul>
  )
}
