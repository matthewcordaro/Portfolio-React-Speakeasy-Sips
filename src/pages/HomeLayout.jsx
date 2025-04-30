import React from "react"
import { Outlet } from "react-router-dom"

function HomeLayout() {
  return (
    <div>
      <nav>NAVBAR</nav>
      <Outlet />
      <footer>FOOTER</footer>
    </div>
  )
}

export default HomeLayout
