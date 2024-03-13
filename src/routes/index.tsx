import { Route, Routes } from "react-router-dom"
import { RegisterPage } from "../pages/RegisterPage"
import { ErrorPage } from "../pages/ErrorPage"
import { HomePage } from "../pages/HomePage"
import { DashBoard } from "../pages/DashBoard"
import { PublicRoutes } from "./PublicRoutes"
import { PrivateRoutes } from "./PrivateRoutes"
import { CreateContactPage } from "../pages/CreateContactPage"
import { EditContactPage } from "../pages/EditContactPage"


export const RoutesMain = () => {
    return (
       <Routes>
          <Route element={<PublicRoutes />}>
             <Route path="/" element={<HomePage />} />
             <Route path="/register" element={<RegisterPage />} />
          </Route>
 
          <Route element={<PrivateRoutes />}>
             <Route path="/dashboard" element={<DashBoard />} />
             <Route path="/dashboard/createContact" element={<CreateContactPage />} /> 
             <Route path="/dashboard/editContact" element={<EditContactPage />} />
          </Route>
 
          <Route path="*" element={<ErrorPage />} />
       </Routes>
    );
 };