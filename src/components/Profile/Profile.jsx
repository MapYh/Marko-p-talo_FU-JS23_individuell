import HeaderImg from "../../assets/header-header.svg";
import Rectangle from "../../assets/rectangle.svg";
import { useNavigate } from "react-router-dom";
import "./Profile.scss";
import Logo from "../../assets/logo-gray.svg";

const Profile = () => {
  const navigate = useNavigate();
  const navigateToNav = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
  };
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
          <img src={HeaderImg} alt="" className="headerImg" />

          <main className="profile-cart-main">
            <header className="logo-ellipse">
              <img src={Logo} alt="" />
            </header>
            <h1 className="cart-text">Välkommen till AirBean-familjen!</h1>
            <article className="cartitem">
              <p>
                Genom att skapa ett konto nedan kan du spara och se din
                orderhistorik.
              </p>
            </article>
            <article>
              <form action="">
                <section className="forms">
                  <label htmlFor="name">Namn</label>

                  <input
                    type="text"
                    id="name"
                    placeholder="Enter name"
                    className="form-section"
                  />
                  <br></br>
                </section>
                <section className="forms">
                  <label htmlFor="email">Epost</label>

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
                <h4>GDPR OK!</h4>
              </section>
              <button className="profileBtn">Brew me a cup!</button>
            </article>
          </main>
        </div>
      </section>
    </>
  );
};

export default Profile;
