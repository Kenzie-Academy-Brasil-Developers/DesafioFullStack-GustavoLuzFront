import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";
import { ContactProvider } from "../../providers/ContactContext";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const { client } = useContext(ClientContext);
 
    return client ? <ContactProvider><Outlet /></ContactProvider> : <Navigate to="/" />;
 };