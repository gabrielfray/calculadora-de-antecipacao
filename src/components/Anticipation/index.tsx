import { ContentReceive } from "./styles";

const Anticipation = ({ receveidValues }: any) => {
  return (
    <ContentReceive>
      <ul>
        <div className="contentReceive">
          <span className="receive">VOCÊ RECEBERÁ:</span>
        </div>
        <li>
          Amanhã:{" "}
          <span>
            R${" "}
            {receveidValues ? (receveidValues["1"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 15 dias:{" "}
          <span>
            R${" "}
            {receveidValues ? (receveidValues["15"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 30 dias:{" "}
          <span>
            R${" "}
            {receveidValues ? (receveidValues["30"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 90 dias:{" "}
          <span>
            R${" "}
            {receveidValues ? (receveidValues["90"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
      </ul>
    </ContentReceive>
  );
};

export default Anticipation;
