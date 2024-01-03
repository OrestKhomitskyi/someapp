import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>hello</div>} />
        <Route path="/go" element={<div>hi</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
