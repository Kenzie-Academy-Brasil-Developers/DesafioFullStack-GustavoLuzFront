import { Navigate, useNavigate } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { useContext } from "react";
import { MdArrowBack } from "react-icons/md";
import { EditContactForm } from "../../components/Form/EditContactForm";
import { ContactContext } from "../../providers/ContactContext";

export const EditContactPage = () => {
    const { editingContact, setEditingContact } = useContext(ContactContext);
 
    const navigate = useNavigate();
 
    return editingContact ? (
          <main>
             <div className="container">
                <button
                   onClick={() => {
                      setEditingContact(null);
                      navigate("/dashboard");
                   }}
                >
                   <MdArrowBack /> voltar
                </button>
                <h1 >Altere um contato</h1>
                <EditContactForm />
             </div>
          </main>
    ) : (
       <Navigate to="/dashboard" />
    );
 };