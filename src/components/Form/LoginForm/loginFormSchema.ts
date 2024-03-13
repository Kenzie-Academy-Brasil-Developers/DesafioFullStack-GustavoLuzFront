import { z } from "zod";

export const loginFormSchema = z.object({
    email: z.string().email().min(1, "O e-mail é obrigatório"),
    password: z.string().min(1, "A senha é obrigatória"),
})

export type TLoginFormValues = z.infer<typeof loginFormSchema>;