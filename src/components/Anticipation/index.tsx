import { ContentReceive } from "./styles";

const Anticipation = () => {
  return (
    <ContentReceive>
      <span className="YouReceive">VOCÊ RECEBERÁ:</span>
      <ul>
        <li>
          Amanhã: <span>R$ 0,00</span>
        </li>
        <li>
          Em 15 dias: <span>R$ 0,00</span>
        </li>
        <li>
          Em 30 dias: <span>R$ 0,00</span>
        </li>
        <li>
          Em 90 dias: <span>R$ 0,00</span>
        </li>
      </ul>
    </ContentReceive>
  );
};

export default Anticipation;
