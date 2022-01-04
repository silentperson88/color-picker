import "./App.css";
import Palatte from "./Palatte";
import SeedColors from "./SeedColors";

function App() {
  return (
    <div className="App">
      <Palatte {...SeedColors[4]} />
    </div>
  );
}

export default App;
