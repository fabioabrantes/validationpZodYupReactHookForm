import * as yup from "yup";

export const schemaYup = yup.object({
  name: yup.string().required("Informe seu nome"),
  email: yup.string().email("E-mail inválido").required("Informe o E-mail"),
  password:yup.string().min(6, 'A senha deve ter ao menos 6 dígitos').required('Informe a Senha'),
  passwordConfirm: yup.string().required("Informe seu o password novamente")
  .oneOf([yup.ref('password')],'A senha de confirmação não confere')
});

export type registerUser = yup.InferType<typeof schemaYup>;