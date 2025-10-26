import React from 'react'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <div>
      <h1>Layout page</h1>
      <div>
        <Outlet/>{/*“Render the child route component here.”*/}
      </div>
    </div>
  )
}

export default Layout
