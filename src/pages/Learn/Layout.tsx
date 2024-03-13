import { Outlet } from "react-router-dom"
import Navbar from "../../comonents/Navbar"
import LearnAside from "../../comonents/LearnAside"

const Layout = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    <LearnAside /> 
    </>
  )
}

export default Layout