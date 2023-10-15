import { Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../views/Home";

const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home />} />
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes