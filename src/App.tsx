import { useState } from "react";
import Home from "./pages/Home";
import Routes from "./routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
