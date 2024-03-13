import { TCreateContactFormValues, TEditContactFormValues } from "../components/Form/CreateContactForm/createContactFormSchema";
import { TLoginFormValues } from "../components/Form/LoginForm/loginFormSchema";
import { TRegisterFormValues } from "../components/Form/RegisterForm/registerFormSchema";
import { Iclient } from "../interfaces/clientInterface";
import { IContacts, IContactsUpdate } from "../interfaces/contactInterface";


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


export interface IContactContext{
    contactList: IContacts[],
    editingContact: IContactsUpdate | null,
    setEditingContact: React.Dispatch<React.SetStateAction<IContactsUpdate | null>>,
    createContact: 
    (formData: TCreateContactFormValues) => Promise<void>,
    deleteContact: 
    (deletingId: string) => Promise<void>,
    editContact: 
    (formData: TEditContactFormValues) => Promise<void>,

}