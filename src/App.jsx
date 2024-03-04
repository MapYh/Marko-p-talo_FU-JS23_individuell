import "./App.css";
/* import ReactDOM from "react-dom/client"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing.jsx";
import Menu from "./components/Menu.jsx";
import Nav from "./components/Nav.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nav" element={<Nav />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
