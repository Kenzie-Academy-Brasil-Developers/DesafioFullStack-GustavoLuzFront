import { useContext } from "react";
import { ContactContext } from "../../providers/ContactContext";
import { ContactCard } from "./ContactCard";

export const ContactList = () => {
    const { contactList } = useContext(ContactContext);


    return(
        <section>
            <div>
                <h1>Lista de contatos</h1>
            </div>
            <ul>
                {contactList.map(contact => (
                    <ContactCard key={contact.id} contact={contact} />
                ))}
            </ul>
        </section>
    )
}