import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.js";
function App() {
  const [mount, setMount] = useState(true);

  const mountCounter = () => {
    setMount(true);
  };

  const unmountCounter = () => {
    setMount(false);
  };

  return (
    <div className="App">
      <button onClick={mountCounter} disabled={mount}>
        mount
      </button>
      <button onClick={unmountCounter} disabled={!mount}>
        unmount
      </button>
      {mount ? <Counter /> : null}
    </div>
  );
}

export default App;
