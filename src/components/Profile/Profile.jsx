import HeaderImg from "../../assets/header-header.svg";
import Rectangle from "../../assets/rectangle.svg";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import Logo from "../../assets/logo-gray.svg";
import { useState } from "react";
import Profile_pic from "../Profile/Profile_pic";

const Profile = () => {
  const [isActive, setActive] = useState("false");
  const navigate = useNavigate();
  const navigateToNav = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
    ToggleClass();
  };

  function ToggleClass() {
    setActive(!isActive);
  }

  return (
    <>
      <section className="backgroundcard">
        <header className="profileheader">
          <div className="profilebagleft" onClick={() => navigateToNav()}>
            <img
              className="profileImgRectangle"
              src={Rectangle}
              alt="navicon"
            />
            <img
              className="profileImgRectangle"
              src={Rectangle}
              alt="navicon"
            />
            <img
              className="profileImgRectangle"
              src={Rectangle}
              alt="navicon"
            />
          </div>
        </header>
        <div>
          <section className={isActive ? "onlclick-hide" : "onclick-Show"}>
            <Profile_pic />
          </section>
          <img src={HeaderImg} alt="" className="headerImg" />
          <section className={isActive ? "onclick-Show" : "onlclick-hide"}>
            <main className="profile-cart-main ">
              <header className="logo-ellipse">
                <img src={Logo} alt="" />
              </header>
              <h1 className="profile-text">Välkommen till AirBean-familjen!</h1>
              <article className="cartitem">
                <p className="profile-para-text">
                  Genom att skapa ett konto nedan kan du spara och se din
                  orderhistorik.
                </p>
              </article>
              <article>
                <form action="">
                  <section className="forms">
                    <label htmlFor="name" className="profile-form-text">
                      Namn
                    </label>

                    <input
                      type="text"
                      id="name"
                      placeholder="Enter name"
                      className="form-section"
                    />
                    <br></br>
                  </section>
                  <section className="forms">
                    <label htmlFor="email" className="profile-form-text">
                      Epost
                    </label>

                    <input
                      type="text"
                      id="email"
                      placeholder="Enter email"
                      className="form-section"
                    />
                  </section>
                </form>
                <section className="profile-button-section">
                  <button className="profileSmallBtn"></button>
                  <h4 className="gdpr">GDPR OK!</h4>
                </section>
                <button
                  type="submit"
                  onClick={ToggleClass}
                  className="profileBtn"
                >
                  Brew me a cup!
                </button>
                <footer className="filler"></footer>
              </article>
            </main>
          </section>
        </div>
      </section>
    </>
  );
};

export default Profile;
