import { IDaysReceive } from "../../interfaces";
import { ContentReceive } from "./styles";

const Anticipation = ({ simulate }: any) => {
  return (
    <ContentReceive>
      <ul>
        <div className="contentReceive">
          <span className="receive">VOCÊ RECEBERÁ:</span>
        </div>
        <li>
          Amanhã:{" "}
          <span>
            R$ {simulate ? (simulate["1"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 15 dias:{" "}
          <span>
            R$ {simulate ? (simulate["15"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 30 dias:{" "}
          <span>
            R$ {simulate ? (simulate["30"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
        <li>
          Em 90 dias:{" "}
          <span>
            R$ {simulate ? (simulate["90"] / 100).toFixed(2) : "00,00"}
          </span>
        </li>
      </ul>
    </ContentReceive>
  );
};

export default Anticipation;
