
import { Outlet } from "react-router-dom"

import Footer from "./Components/Footer/Footer"
import Header2 from "./Components/Headers/Header2"

const Layout = () => {
  return (
    <div>
        <Header2 />

        <Outlet />
        <Footer />
    </div>
  )
}

export default Layout