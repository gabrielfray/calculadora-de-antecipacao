import * as yup from "yup";

export const formSimulateSchema = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => {
      if (value) {
        return value * 100;
      }
      return 0;
    })
    .min(1000, "O valor mínimo de R$10")
    .required("Campo obrigatório"),

  installments: yup
    .number()
    .min(1, "Mínimo de 1 parcela")
    .max(12, "Máximo de 12 parcelas")
    .transform((value) => (value ? value : 0))
    .required("Campo obrigatório"),
  mdr: yup
    .number()
    .transform((value) => (value ? value : 0))
});
