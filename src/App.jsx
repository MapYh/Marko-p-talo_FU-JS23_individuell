import "./App.css";
/* import ReactDOM from "react-dom/client"; */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components//Landing/Landing.jsx";
import Menu from "./components/Menu/Menu.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Status from "./components/Status/Status.jsx";
import Profile from "./components/Profile/Profile";
import About from "./components/About/About.jsx";
import Cart from "./components/Cart/Cart.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/nav" element={<Nav />} />
          <Route path="/about" element={<About />} />
          {/*  <Route path="/profile" element={<Profile />} /> */}
          <Route path="/status" element={<Status />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
