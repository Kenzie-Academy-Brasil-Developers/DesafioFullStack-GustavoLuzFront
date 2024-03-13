import { Input } from "../Input"
import { InputPassword } from "../InputPassword";
import { Link } from "react-router-dom";
import { TLoginFormValues, loginFormSchema } from "./loginFormSchema";
import { SubmitHandler, useForm } from "react-hook-form";
import { ClientContext } from "../../../providers/ClientContext";
import { useContext, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

export const LoginForm = () => {

    const { userLogin } = useContext(ClientContext);

    const [loading, setLoading] = useState(false);
    const {register,
        handleSubmit,
        formState: { errors },
        reset} = useForm({
        resolver: zodResolver(loginFormSchema),
     });
  



    const submit: SubmitHandler<TLoginFormValues> = (formData) => {
        userLogin(formData, setLoading, reset);      
     };
  

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Digite seu e-mail"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <InputPassword
                label="Digite sua senha"
                type="password"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />

            <Link to="/register">
                Crie uma conta
            </Link>
            <button disabled={loading}>
                {loading ? "Logando..." : "Logar"}
            </button>

        </form>

    )
}