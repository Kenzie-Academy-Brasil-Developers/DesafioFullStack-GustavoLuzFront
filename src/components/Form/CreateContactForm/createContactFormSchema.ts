import { z } from "zod";

export const createContactFormSchema = z.object({
    name: z.string().min(3,"O nome é obrigatório"),
    email: z.string().min(1,"O e-mail é obrigatório").email("Forneça um e-mail válido"),
    telephone:z.string().min(11,"O numero de telefone é obrigatório"),
 });

 export type TCreateContactFormValues = z.infer<typeof createContactFormSchema>;

 export type TEditContactFormValues = Partial<TCreateContactFormValues>;