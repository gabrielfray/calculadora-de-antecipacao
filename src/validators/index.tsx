import * as yup from "yup";

export const formSimulateSchema = yup.object().shape({
  amount: yup.string().required("Campo obrigatório"),
  installments: yup.string().required("Campo obrigatório"),
  mdr: yup.string().required("Campo obrigatório"),
});