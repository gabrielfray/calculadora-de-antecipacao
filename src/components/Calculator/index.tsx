import Anticipation from "../Anticipation";
import { CalculatorContent } from "./styles";

const Calculator = () => {
  return (
    <CalculatorContent>
      <div className="ContentForm">
        <h2>Simule sua Antecipação</h2>
        <form className="CalculatorForm">
          <div>
            <label>Informe o valor da venda *</label>
            <input type="text" placeholder="Valor da venda" />
          </div>
          <div>
            <label>Em quantas parcelas *</label>
            <input type="text" placeholder="Quantas parcelas" />
          </div>
          <div>
            <label>Informe o percentual de MDR *</label>
            <input type="text" placeholder="Percentual MDR" />
          </div>
        </form>
      </div>
      <Anticipation />
    </CalculatorContent>
  );
};

export default Calculator;
