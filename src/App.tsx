import Routes from "./routes";
import { ToastContainer } from "react-toastify";
import CalculatorProvider from "./context/CalculatorContext";

const App = () => {
  return (
    <div className="App">
      <CalculatorProvider>
        <Routes />
        <ToastContainer
          position={"top-right"}
          autoClose={1000}
          hideProgressBar={false}
          closeOnClick={true}
          pauseOnHover={true}
          draggable={true}
        />
      </CalculatorProvider>
    </div>
  );
};

export default App;
