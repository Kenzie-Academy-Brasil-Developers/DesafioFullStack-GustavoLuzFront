import { MdArrowBack } from "react-icons/md";
import { CreateContactForm } from "../../components/Form/CreateContactForm";
import { Link } from "react-router-dom";

export const CreateContactPage = () => {
    return (
       
          <main>
             <div className="container sm">
                <Link className="link" to="/dashboard">
                   <MdArrowBack /> voltar
                </Link>
                <h1>Crie um novo contato</h1>
                <CreateContactForm />
             </div>
          </main>
       
    );
 };