import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Components/Navbar'

function Layout() {
  return (
    <div>
      <div className='min-h-screen bg-gray-50'>
        <Navbar/>
        <Outlet/>{/*“Render the child route component here.”*/}
      </div>
    </div>
  )
}

export default Layout
