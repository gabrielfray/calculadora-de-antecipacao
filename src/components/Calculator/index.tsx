import { useForm } from "react-hook-form";
import Anticipation from "../Anticipation";
import { ICalculatorData } from "../../interfaces";
import { formSimulateSchema } from "../../validators";
import { yupResolver } from "@hookform/resolvers/yup";
import { CalculatorContent, ErrorMessage } from "./styles";
import { useContext } from "react";
import { CalculatorContext } from "../../context/CalculatorContext";

const Calculator = () => {
  const { onSubmitSimulate, simulate } = useContext(CalculatorContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ICalculatorData>({
    resolver: yupResolver(formSimulateSchema),
    shouldFocusError: false,
  });

  return (
    <CalculatorContent>
      <div className="ContentForm">
        <h2>Simule sua Antecipação</h2>
        <form
          className="CalculatorForm"
          onChange={handleSubmit(onSubmitSimulate)}
        >
          <div>
            <label>Informe o valor da venda *</label>
            <input
              type="number"
              placeholder="Valor da venda"
              {...register("amount")}
            />
            <ErrorMessage>{errors.amount?.message}</ErrorMessage>
          </div>
          <div>
            <label>Em quantas parcelas *</label>
            <input
              type="number"
              placeholder="Quantas parcelas"
              {...register("installments")}
            />
            <ErrorMessage>{errors.installments?.message}</ErrorMessage>
          </div>
          <div>
            <label>Informe o percentual de MDR *</label>
            <input
              type="number"
              placeholder="Percentual MDR"
              {...register("mdr")}
            />
            <ErrorMessage>{errors.mdr?.message}</ErrorMessage>
          </div>
        </form>
      </div>
      <Anticipation simulate={simulate} />
    </CalculatorContent>
  );
};

export default Calculator;
