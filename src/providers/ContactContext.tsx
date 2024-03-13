import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";
import { ClientContext } from "./ClientContext";
import { IProps } from "../interfaces/propsInterface";
import { TCreateContactFormValues, TEditContactFormValues } from "../components/Form/CreateContactForm/createContactFormSchema";
import { IContacts, IContactsUpdate } from "../interfaces/contactInterface";
import { IContactContext } from "./@types";

export const ContactContext = createContext({} as IContactContext);

export const ContactProvider = ({ children }: IProps) => {
   const { client } = useContext(ClientContext);

   const [contactList, setContactList] = useState<IContacts[]>([]);
   const [editingContact, setEditingContact] = useState<IContactsUpdate | null>(null);

   const navigate = useNavigate();

   useEffect(() => {
      const getcontacts = async () => {
         try {
            const { data } = await api.get("/contacts");
            setContactList(data);
         } catch (error) {
            console.log(error);
         }
      };
      getcontacts();
   }, []);
   

   const createContact = async (formData:TCreateContactFormValues) => {
      try {
         const token = localStorage.getItem("@TOKEN");

         const newContact = {
            clientId: client!.id,
            ...formData,
         };

         const { data } = await api.post("/contacts", newContact, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         });

         setContactList([...contactList, data ]);

    

         navigate("/dashboard"); 
      } catch (error) {
         console.log(error);
      }
   };

   const deleteContact = async (deletingId: string) => {
      try {
         const token = localStorage.getItem("@TOKEN");

         await api.delete(`/contacts/${deletingId}`, {
            headers: {
               Authorization: `Bearer ${token}`
            }
         })

         const newContactList = contactList.filter(contact => contact.id !== deletingId);
         setContactList(newContactList);
        //  toast.success("contact excluido com sucesso!");
      } catch (error) {
         console.log(error);
      }
   }

   const editContact = async (formData: TEditContactFormValues) => {
      try {
         const token = localStorage.getItem("@TOKEN");
         
         const { data } = await api.patch(`/contacts/${editingContact!.id}`, formData, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const newContactList = contactList.map(contact => {
            if(contact.id === editingContact!.id){
               return data;
            } else {
               return contact;
            }
         })

         setContactList(newContactList);         
         setEditingContact(null);

        

         navigate("/dashboard");


      } catch (error) {
         console.log(error)
      }
   }

   return <ContactContext.Provider value={{ contactList, createContact, deleteContact, editContact, editingContact, setEditingContact }}>{children}</ContactContext.Provider>;
};