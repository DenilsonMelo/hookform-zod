import { z } from "zod";
import { UFs } from "../../utils/uf";

export const FormSchema = z.object({
  name: z.string().min(3, "Nome deve conter no mínimo 3 caracteres"),
  mail: z.string().email("E-mail inválido"),
  password: z.string().min(8, "A senha deve conter no mínimo 8 caracteres"),
  age: z.coerce.number().min(18, "Idade minima 18 anos"),
  address: z.object({
    street: z.string().min(3, "Rua deve conter no mínimo 3 caracteres"),
    number: z.string().min(1, "Número deve conter no mínimo 1 caractere"),
    city: z.string().min(3, "Cidade deve conter no mínimo 3 caracteres"),
    complement: z.string().optional(),
    state: z.enum([...(UFs.map((uf) => uf.value) as [string, ...string[]])], {
      errorMap: () => ({
        message: "Escolha uma UF válida.",
      }),
    }),
  }),
  terms: z.boolean().refine((value) => value, "Aceite os termos de uso"),
});

export type FormData = z.infer<typeof FormSchema>;
