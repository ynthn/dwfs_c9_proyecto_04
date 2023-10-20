import Navigate from "../../routes/Navigate"
import Footer from "../../views/Footer"
import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
    <div>
      <Navigate />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout