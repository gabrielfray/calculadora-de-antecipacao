import { ToastContainer } from "react-toastify";
import Calculator from "../../components/Calculator";
import { HomeContent } from "./styles";

const Home = () => {
  return (
    <HomeContent>
      <Calculator />
      <ToastContainer />
    </HomeContent>
  );
};

export default Home;
