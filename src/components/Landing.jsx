import Card from "./Card.jsx";
import Logo from "../assets/logo.svg";

const landingPageInfo = {
  logo: Logo,
  main: "AIR BEAN",
  section: "DRONEDELIVERED COFFEE",
};

const Landing = () => {
  return <Card props={landingPageInfo} />;
};

export default Landing;
