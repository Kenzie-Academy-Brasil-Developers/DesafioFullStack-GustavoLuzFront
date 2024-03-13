import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { ErrorPage } from "../pages/ErrorPage"
import { HomePage } from "../pages/HomePage"
import { DashBoard } from "../pages/DashBoard"

export const RoutesMain = () =>{
    return(
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/register" element={<RegisterPage />}/>
            <Route path="/dashboard" element={<DashBoard />}/>
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}