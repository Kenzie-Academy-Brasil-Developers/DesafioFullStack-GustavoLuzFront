import { SubmitHandler, useForm } from "react-hook-form";
import { ContactContext } from "../../../providers/ContactContext";
import { TEditContactFormValues } from "../CreateContactForm/createContactFormSchema";
import { Input } from "../Input";
import { useContext } from "react";


export const EditContactForm = () => {
    const { editingContact, editContact } = useContext(ContactContext);

    const { register, handleSubmit, formState: { errors }, } = useForm({
        values: {
            name: editingContact!.name,
            email: editingContact!.email,
            telephone: editingContact!.telephone,
        },
    });   
    
    const submit: SubmitHandler<TEditContactFormValues> = (formData) => {
        editContact(formData);
    }

    return(
        <form onSubmit={handleSubmit(submit)}>
            <Input
                label="Digite o nome do contato a ser editado"
                type="name"
                {...register("name")}
                error={errors.name}
            />

            <Input
                label="Digite o e-mail do contato a ser editado"
                type="email"
                {...register("email")}
                error={errors.email}
            />

            <Input
                label="Digite o telefone do contato a ser editado"
                type="telephone"
                {...register("telephone")}
                error={errors.telephone}

            />

            <button type="submit">Editar scrap</button>
        </form>
    )
}
