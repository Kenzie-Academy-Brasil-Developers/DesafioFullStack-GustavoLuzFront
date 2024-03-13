import { RegisterForm } from "../../components/Form/RegisterForm";

export const RegisterPage = () => {
   return (
      <main>
         <div className="container">
            <div>
               <h1 className="">Cadastre-se</h1>
               <RegisterForm />
            </div>
         </div>
      </main>
   );
};