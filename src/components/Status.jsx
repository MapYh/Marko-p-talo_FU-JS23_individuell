import "./status.scss";
import DroneAndCup from "../assets/droneandcup.svg";

const Orderstatus = () => {
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
          <button className="footerbtn btntextstyling">Ok, cool!</button>
        </footer>
      </article>
    </>
  );
};
export default Orderstatus;
