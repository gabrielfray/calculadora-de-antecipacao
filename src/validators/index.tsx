import * as yup from "yup";

export const formCalculatorSchema = yup.object().shape({
  amount: yup
    .number()
    .transform((value) => {
      if (value) {
        return value * 100;
      }
      return 0;
    })
    .min(1000, "O valor mínimo de R$10"),

  installments: yup
    .number()
    .min(1, "Mínimo de 1 parcela")
    .max(12, "Máximo de 12 parcelas")
    .typeError("Mínimo de 1 parcela"),
  mdr: yup.number().typeError("O campo mdr deve ser preenchido"),
});
