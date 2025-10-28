import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {
    const user={name:"Spoorthi"}
    const navigate =useNavigate()
    // useNavigate() → React Router hook that returns a 'navigate' function
    // It allows you to change pages using JavaScript (it navigates using words.when we click on logout word it navigate to home)

    const logoutUser=()=>{
        navigate('/')
    }
  return (
    <div className='shadow bg-white'>
        <nav className='flex items-center justify-between max-w-7xl mx-auto pz-4 py-3.5 text-slate-800 transition-all'>
            <Link to='/'>
            <img src="/logo.svg" alt="logo" className='h-11 w-auto'/>
            </Link>
            <div className='flex items-center gap-4 text-sm'>
                <p className='max-sm:hidden'>Hi,{user?.name}</p>
                <button onClick={logoutUser} className='bg-white border border-gray-300 hover:bg-slate-50 px-7 py-1.5 rounded-full active:scale-95 transition-all'>Logout</button>
            </div>
        </nav>
      
    </div>
  )
}

export default Navbar
