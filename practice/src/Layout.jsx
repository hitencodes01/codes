import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <header className='bg-blue-800 h-[200px] '></header>
        <div className="navbar w-[50%]">{children}</div>
        <div className='bg-green-300 h-[200px]'></div>
    </div>
  )
}
