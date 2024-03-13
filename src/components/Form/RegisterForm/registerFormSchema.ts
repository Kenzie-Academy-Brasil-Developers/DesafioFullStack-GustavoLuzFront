import { z } from "zod";


export const registerFormSchema = z.object({
   name: z.string().min(3,"O nome é obrigatório"),
   email: z.string().min(1,"O e-mail é obrigatório").email("Forneça um e-mail válido"),
   telephone:z.string().min(11,"O numero de telefone é obrigatório"),
   password: z
      .string()
      .min(8, "São necessários pelo menos oito caracteres")
      .regex(/[A-Z]+/, "É necessário conter pelo menos uma letra maiúscula")
      .regex(/[a-z]+/, "É necessário conter pelo menos uma letra minúscula")
      .regex(/[0-9]+/, "É necessário pelo menos um número")
      .regex(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/]/, "É necessário pelo menos um caracter especial."),
    confirmPassword: z.string().min(1,"Confirmar a senha é obrigatória") 
}).refine(({password, confirmPassword}) => password === confirmPassword, {
    message: "As senhas não correspondem",
    path: ["confirmPassword"]
});

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
