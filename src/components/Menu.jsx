import "./menu.scss";
import Bag from "../assets/bag.svg";
import Rectangle from "../assets/rectangle.svg";
import Plus from "../assets/plus.svg";

const menuPageInfo = {
  logo: Bag,
  navLogo: Rectangle,
  plusSign: Plus,
  main: "Menu",
  section: "Bryggkaffe",
  sectionTwo: "Brygd på månadens bönor",
  numberOfItems: 7,
  price: "4kr",
};

const Menu = () => {
  return (
    <>
      <article className="menucard">
        <header className="menuheader">
          <div className="bagleft">
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
          </div>
          <div className="bagright">
            <img src={Bag} alt="shopping bag" />
            <div className="littlebag">{menuPageInfo.numberOfItems}</div>
          </div>
        </header>
        <h1>{menuPageInfo.main}</h1>
        <main>
          <article className="menucontent">
            <section className="menuitemwrapper">
              <button className="plussign">
                <img src={menuPageInfo.plusSign}></img>
              </button>
              <section className="menuitem">
                <h2>{menuPageInfo.section}</h2>

                <p>{menuPageInfo.sectionTwo}</p>
              </section>
              <h3>{menuPageInfo.price} </h3>
            </section>
          </article>
        </main>
        <footer>Footer</footer>
      </article>
    </>
  );
};

export default Menu;
