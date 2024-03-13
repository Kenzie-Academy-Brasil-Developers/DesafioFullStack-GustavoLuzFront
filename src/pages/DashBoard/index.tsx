import { Link } from "react-router-dom";
import { DefaultTemplate } from "../../components/DefaultTemplate";
import { ContactList } from "../../components/ContactList";

export const DashBoard = () => {
   return (
      <DefaultTemplate>
         <main>
            <div className="container">
               <Link to={"/dashboard/createContact"}>Crie um novo contato</Link>
            </div>
            <div className="container">
            <ContactList />
            </div>
         </main>
      </DefaultTemplate>

   );
};