import { SubmitHandler, useForm } from "react-hook-form"
import { Input } from "../Input"
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { TRegisterFormValues, registerFormSchema } from "./registerFormSchema";
import { InputPassword } from "../InputPassword";
import { Link, useNavigate } from "react-router-dom";
import { ClientContext } from "../../../providers/ClientContext";

export const RegisterForm = () => {
    const [loading, setLoading] = useState(false);

    const { userRegister } = useContext(ClientContext);

    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<TRegisterFormValues>({
        resolver: zodResolver(registerFormSchema),
    });



    const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
        userRegister(formData, setLoading);
        navigate("/");
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Seu nome"
                type="name"
                {...register("name")}
                error={errors.name}
                disabled={loading}
            />

            <Input
                label="Seu e-mail"
                type="email"
                {...register("email")}
                error={errors.email}
                disabled={loading}
            />

            <Input
                label="Seu telefone"
                type="telephone"
                {...register("telephone")}
                error={errors.telephone}
                disabled={loading}
            />

            <InputPassword
                label="Crie uma senha"
                type="password"
                {...register("password")}
                error={errors.password}
                disabled={loading}
            />

            <InputPassword
                label="Confirme sua senha"
                {...register("confirmPassword")}
                error={errors.confirmPassword}
                disabled={loading}
            />

            <Link to="/">
                voltar
            </Link>
            <button disabled={loading}>
                {loading ? "Cadastrando..." : "Cadastrar"}
            </button>

        </form>
    )
}