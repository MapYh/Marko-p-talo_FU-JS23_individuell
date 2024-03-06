import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bag from "../assets/bag.svg";
import Rectangle from "../assets/rectangle.svg";
import Plus from "../assets/plus.svg";

const menuPageInfo = {
  logo: Bag,
  navLogo: Rectangle,
  plusSign: Plus,
  /*  main: "Menu",
  section: "Bryggkaffe",
  sectionTwo: "Brygd på månadens bönor", */
  numberOfItems: 7,
  price: "4kr",
};

const Api = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://airbean-api-xjlcn.ondigitalocean.app/api/beans")
      .then((response) => response.json())
      .then((json) => {
        let beanInfo = json;

        setData(json);
      })
      .catch((error) => console.error(error));
  }, []);

  const navigate = useNavigate();
  const navigateToCart = () => {
    // use the navigate function to navigate to /Menu
    navigate("/cart");
  };

  return (
    <>
      <article className="menucard">
        <header className="menuheader">
          <div className="bagleft">
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
          </div>
          <div className="bagright" onClick={() => navigateToCart()}>
            <img src={Bag} alt="shopping bag" />
            <div className="littlebag">{}</div>
          </div>
        </header>
        <h1>{menuPageInfo.main}</h1>
        <main>
          <article className="menucontent">
            <section className="menuitemwrapper">
              <section className="plussign  ellipseplus">
                <img src={menuPageInfo.plusSign}></img>
              </section>
              <section className="menuitem">
                <h2>{}</h2>

                <p>{}</p>
              </section>
              <h3>{} </h3>
            </section>
          </article>
        </main>
        <footer className="footer"></footer>
      </article>
    </>
  );
};

export default Api;
