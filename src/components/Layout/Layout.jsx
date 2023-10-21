import Navigate from "../../routes/Navigate"
import Footer from "../../views/Footer"
import { Outlet } from "react-router-dom"
import Loading from "../Loading"


const Layout = () => {
  return (
    <div>
      <Loading />
      <Navigate />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout