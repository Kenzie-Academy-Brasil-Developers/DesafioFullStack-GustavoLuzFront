import { LoginForm } from "../../components/Form/LoginForm";


export const HomePage = () => {
   return (
      <main>
         <div className="container">
            <div>
               <h1 className="">Entre na sua conta</h1>
               <LoginForm />
            </div>
         </div>
      </main>
   );
};