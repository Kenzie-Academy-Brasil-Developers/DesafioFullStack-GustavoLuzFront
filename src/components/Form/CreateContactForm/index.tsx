import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { ClientContext } from "../../../providers/ClientContext";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { TLoginFormValues } from "../LoginForm/loginFormSchema";
import { TCreateContactFormValues, createContactFormSchema } from "./createContactFormSchema";

export const CreateContactForm = () => {

    const { userLogin } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);
    const {register,
        handleSubmit,
        formState: { errors },
        } = useForm({
        resolver: zodResolver(createContactFormSchema),
     });
  



    const submit: SubmitHandler<TCreateContactFormValues> = (formData) => {
             
     };
  

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Digite o nome do contato a ser adicionado"
                type="name"
                {...register("name")}
                error={errors.name}
                disabled={loading}
            />

            <Input
                label="Digite o e-mail do contato a ser adicionado"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <Link to="/register">
                Crie uma conta
            </Link>
            <button type="submit" disabled={loading}>
                {loading ? "Logando..." : "Logar"}
            </button>

        </form>

    )
}