import {z} from "zod";
export const schemaZod = z.object({
  name: z.string().trim()
        .min(3,'nome deve ter no minimo 3 caracteres'),
  email: z.string().trim()
        .email("E-mail inválido")
        .refine((value)=> value.length !== 0,{message:'error:campo vazio'}),
  password:z.string().trim()
          .min(6, 'A senha deve ter ao menos 6 dígitos')
          .refine((value)=> value.length !== 0,{message:'error:campo vazio'}),
  passwordConfirm: z.string().trim()
          .refine((value)=> value.length !== 0,{message:'error:campo vazio'}),
}).refine((data) => data.password === data.passwordConfirm, {
  message: "Passwords não são iguais",
  path: ["passwordConfirm"], // path of error
});

export type IRegisterUser = z.infer<typeof schemaZod>; 