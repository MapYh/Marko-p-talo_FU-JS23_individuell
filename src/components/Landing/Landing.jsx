import Card from "../Card/Card";
import Logo from "../../assets/logo.svg";
import header from "../../assets/header.svg";
import { useNavigate } from "react-router-dom";
import "./landing.scss";

const landingPageInfo = {
  logo: Logo,
  main: "AIR BEAN",
  section: "DRONEDELIVERED COFFEE",
};

const Landing = () => {
  const navigate = useNavigate();

  const navigateToNewPage = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
  };

  return (
    <>
      <div onClick={() => navigateToNewPage()} className="main">
        <img src={header} alt="" className="header" />
        <img src={header} alt="" className="header-reverse" />
        <Card props={landingPageInfo} />
      </div>
    </>
  );
};

export default Landing;
