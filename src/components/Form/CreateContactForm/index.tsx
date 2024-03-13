import { zodResolver } from "@hookform/resolvers/zod";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { Input } from "../Input";
import { TCreateContactFormValues, createContactFormSchema } from "./createContactFormSchema";
import { ContactContext } from "../../../providers/ContactContext";

export const CreateContactForm = () => {

    const { createContact } = useContext(ContactContext);

    const { register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(createContactFormSchema),
    });




    const submit: SubmitHandler<TCreateContactFormValues> = (formData) => {
        createContact(formData)
    };


    return (
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Digite o nome do contato a ser adicionado"
                type="name"
                {...register("name")}
                error={errors.name}
            />

            <Input
                label="Digite o e-mail do contato a ser adicionado"
                type="email"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Digite o telefone do contato a ser adicionado"
                type="telephone"
                {...register("telephone")}
                error={errors.telephone}

            />

            <Link to="/dashboard">
                Voltar para sua página
            </Link>
            <button type="submit">
                Adicione um novo contato
            </button>

        </form>

    )
}