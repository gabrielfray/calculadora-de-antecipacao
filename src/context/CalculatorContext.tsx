import { createContext, Dispatch, SetStateAction, useState } from "react";
import { ICalculatorData, IDaysReceive, IProps } from "../interfaces";
import { toast } from "react-toastify";
import api from "../services/api";

export const CalculatorContext = createContext({} as ICalculatorContext);

interface ICalculatorContext {
  onSubmitSimulate: (data: ICalculatorData) => void;
  simulate?: IDaysReceive;
}

const CalculatorProvider = ({ children }: IProps) => {
  const [simulate, setSimulate] = useState<IDaysReceive>();

  const onSubmitSimulate = async (data: ICalculatorData) => {
    await api
      .post("", data)
      .then((res) => {
        setSimulate(res.data);
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
        onSubmitSimulate,
        simulate,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

export default CalculatorProvider;
