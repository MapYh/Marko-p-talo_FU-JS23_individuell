import { useNavigate } from "react-router-dom";
import ClosingCross from "../assets/closingx.svg";
import Rectangle from "../assets/rectanglewhite.svg";
import "./Nav.scss";

const logos = {
  closingCross: ClosingCross,
};

const Nav = () => {
  const navigate = useNavigate();

  const navigateToMenu = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Menu");
  };

  const navigateToLandingPage = () => {
    navigate("/");
  };

  const navigateToOurCoffee = () => {
    navigate("/about");
  };

  const navigateToMyProfile = () => {
    navigate("/profile");
  };

  const navigateToOrderStatus = () => {
    navigate("/status");
  };
  return (
    <article className="navcard">
      <header className="navheader ">
        <div className="closingellipse">
          <img
            src={logos.closingCross}
            onClick={() => navigateToLandingPage()}
          ></img>
        </div>
        <div></div>
      </header>
      <main className="navmain">
        <div onClick={() => navigateToMenu()} className="navstyling navbox">
          Menu
        </div>
        <img src={Rectangle} alt="" />
        <div
          onClick={() => navigateToOurCoffee()}
          className="navstyling navbox"
        >
          Vårt kaffe
        </div>
        <img src={Rectangle} alt="" />
        <div
          onClick={() => navigateToMyProfile()}
          className="navstyling navbox"
        >
          Min profil
        </div>
        <img src={Rectangle} alt="" />
        <div
          onClick={() => navigateToOrderStatus()}
          className="navstyling navbox"
        >
          Orderstatus
        </div>
      </main>
      <footer className="navfooter"></footer>
    </article>
  );
};

export default Nav;
