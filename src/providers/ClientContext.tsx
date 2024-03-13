import { createContext, useEffect, useState } from "react";
import { IClientContext } from "./@types";
import { useNavigate } from "react-router-dom";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { api } from "../services/api";
import { TRegisterFormValues } from "../components/Form/RegisterForm/registerFormSchema";
import { IProps } from "../interfaces/propsInterface";

export const ClientContext = createContext({} as IClientContext);

export const ClientProvider = ({children}: IProps) =>{
    
    const [client, setClient] = useState(null);
    const [loading, setLoading] = useState(false);


    const pathname = window.location.pathname;
   

    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem("@TOKEN");
        const userId = localStorage.getItem("@USERID");      
  
        const getUser = async () => {
           try{
              setLoading(true);
              const { data } = await api.get(`/clients/${userId}`, {
                 headers: {
                    Authorization: `Bearer ${token}`
                 }
              });
              setClient(data);
              navigate(pathname);
           } catch (error) {
              console.log(error);
           } finally {
              setLoading(false);
           }
        }
  
        if(token && userId){
           getUser();
        }
     }, [])

    const userLogin = async (formData: TLoginFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>> , reset: () => void) => {
        try {
            setLoading(true);
            const { data } = await api.post("/login", formData)
            setClient(data.client);
            localStorage.setItem("@TOKEN", data.accessToken);
            localStorage.setItem("@USERID", data.client.id);
            console.log(data)
            reset();
            navigate("/dashboard")
        } catch (error) {
            console.log(error)
        }
        finally {
            setLoading(false)
            reset()
            
        }
    }

 
    const userRegister = async (formData: TRegisterFormValues, setLoading:React.Dispatch<React.SetStateAction<boolean>>) => {
        try {
            setLoading(true)
            await api.post("/clients", formData);

        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
            console.log("cadastro realizado com sucesso!")
        }
    }

    const userLogout = () => {
        setClient(null);
        navigate("/");
        localStorage.removeItem("@TOKEN");
        localStorage.removeItem("@USERID");
     };
  


   
    return (
      <ClientContext.Provider value={{ userLogin, userRegister, userLogout, client, loading }}>
          {children}
      </ClientContext.Provider>
    )
}
