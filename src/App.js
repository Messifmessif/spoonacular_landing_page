// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "../src/styles/main_sass/main.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
