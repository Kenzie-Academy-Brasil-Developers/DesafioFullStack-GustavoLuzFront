import { useContext } from "react";
import { ClientContext } from "../../../providers/ClientContext";
import { useNavigate } from "react-router-dom";
import { MdOutlineEdit, MdOutlineDelete } from "react-icons/md";
import { ContactContext } from "../../../providers/ContactContext";
import { IContacts } from "../../../interfaces/contactInterface";

interface IContactProps{
contact: IContacts;
}

export const ContactCard = ({ contact }: IContactProps) => {
    const { client } = useContext(ClientContext);
 
    const navigate = useNavigate();
 
    const { deleteContact, setEditingContact } = useContext(ContactContext);
 
    return (
       <li>
          <div>
             <span>
                {contact.name}
             </span>
             <span>
                {contact.telephone}
             </span>
             <span>
                {contact.email}
             </span>
          </div>
          <div>
             {client!.id === contact.clientId ? (
                <>
                   <button
                      onClick={() => {
                         setEditingContact(contact);
                         navigate("/dashboard/editContact");
                      }}
                      title="Editar"
                      aria-label="edit"
                   >
                      <MdOutlineEdit size={30} />
                   </button>
                   <button
                      onClick={() => deleteContact(contact.id)}
                      title="Remover"
                      aria-label="remove"
                   >
                      <MdOutlineDelete size={30} />
                   </button>
                </>
             ) : null}
          </div>
       </li>
    );
 };