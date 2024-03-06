import "./status.scss";
import DroneAndCup from "../assets/droneandcup.svg";
import { useNavigate } from "react-router-dom";

const Orderstatus = () => {
  const navigate = useNavigate();
  const navigateToNewPage = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
  };

  return (
    <>
      <article className="statuscard">
        <header className="statuscard__header">ordernummer</header>
        <img src={DroneAndCup} alt="Drone with coffe cup" />
        <main>
          <h1 className="textcontentstyling">Din beställning är på väg!</h1>
          <h3 className="main__eta">eta minuter</h3>
        </main>
        <footer>
          <button
            className="footerbtn btntextstyling"
            onClick={() => navigateToNewPage()}
          >
            Ok, cool!
          </button>
        </footer>
      </article>
    </>
  );
};
export default Orderstatus;
