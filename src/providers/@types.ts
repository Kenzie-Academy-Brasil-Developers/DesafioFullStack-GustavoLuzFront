import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormValues } from "../components/Form/RegisterForm/registerFormSchema";


interface Iclient {
    email:string,
    id:string,
    name: string,
    registeredAt: Date,
    telephone: string,
}


export interface IClientContext{
    userLogin: 
    (formData: TLoginFormValues, 
     setLoading: React.Dispatch<React.SetStateAction<boolean>>, 
     reset: () => void) => Promise<void>,
    userRegister: 
     (formData: TRegisterFormValues,
      setLoading: React.Dispatch<React.SetStateAction<boolean>>) => Promise<void>,
    userLogout:
       () => void,
    client: null | Iclient,
    loading: boolean       
    }