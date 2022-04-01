import logo from "./logo.svg";
import "./App.css";
import Base from "./Layout/Base/Base";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// .............Pages ..........
import SteakStake from "./Pages/SteakStake/SteakStake";
// .............Pages ..........End
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Base>
          <Routes>
            <Route path="/" element={<SteakStake />} />
          </Routes>
        </Base>
      </div>
    </BrowserRouter>
  );
}

export default App;
