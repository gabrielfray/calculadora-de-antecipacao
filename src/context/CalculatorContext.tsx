import api from "../services/api";
import { toast } from "react-toastify";
import { createContext, useState } from "react";
import { ICalculatorData, IDaysReceive, IProps } from "../interfaces";

export const CalculatorContext = createContext({} as ICalculatorContext);

interface ICalculatorContext {
  onSubmitCalculator: (data: ICalculatorData) => void;
  receveidValues?: IDaysReceive;
}

const CalculatorProvider = ({ children }: IProps) => {
  const [receveidValues, setReceveidValues] = useState<IDaysReceive>();

  const onSubmitCalculator = async (data: ICalculatorData) => {
    await api
      .post("", data)
      .then((res) => {
        setReceveidValues(res.data);
        toast.success("Sucesso!", {
          toastId: 1,
        });
      })
      .catch(() => {
        toast.error("Ops, algo deu errado!", {
          toastId: 1,
        });
      });
  };

  return (
    <CalculatorContext.Provider
      value={{
        onSubmitCalculator,
        receveidValues,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
