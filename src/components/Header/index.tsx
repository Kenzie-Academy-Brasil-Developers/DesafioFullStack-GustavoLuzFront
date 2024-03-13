import { useContext } from "react";
import { ClientContext } from "../../providers/ClientContext";

export const Header = () => {
    const { client, userLogout } = useContext(ClientContext);
 
    return (
       <header>
          <div className="container">
             <div>
                <h1>Full Stack App</h1>
                <div>
                   <div>
                      <p>{client?.name}</p>
                      <p>{client?.email}</p>
                   </div>
 
                   <button onClick={() => userLogout()}>
                      Sair
                   </button>
                </div>
             </div>
          </div>
       </header>
    );
 };