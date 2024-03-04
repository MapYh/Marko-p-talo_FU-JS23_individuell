import Card from "./Card.jsx";
import Logo from "../assets/logo.svg";

import { useNavigate } from "react-router-dom";

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
      <div onClick={() => navigateToNewPage()}>
        <Card props={landingPageInfo} />
      </div>
    </>
  );
};

export default Landing;
