import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home";
import Menu from "../views/Menu";
import Quienessomos from "../views/Quienessomos";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/quienes_somos" element={<Quienessomos />} />
                    <Route path="/menu" element={<Menu />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes