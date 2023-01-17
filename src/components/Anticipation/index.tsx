import { IDaysReceive } from "../../interfaces";
import { ContentReceive } from "./styles";

const Anticipation = ({ simulate }: any) => {
  console.log(simulate);
  return (
    <ContentReceive>
      <span className="YouReceive">VOCÊ RECEBERÁ:</span>
      <ul>
        <li>
          Amanhã: <span>R$ {}</span>
        </li>
        <li>
          Em 15 dias: <span>R$ {}</span>
        </li>
        <li>
          Em 30 dias: <span>R$ {}</span>
        </li>
        <li>
          Em 90 dias: <span>R$ {}</span>
        </li>
      </ul>
    </ContentReceive>
  );
};

export default Anticipation;
