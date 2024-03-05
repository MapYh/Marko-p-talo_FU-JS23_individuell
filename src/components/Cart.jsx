import "./cart.scss";
import Line from "../assets/line.svg";
import Vector from "../assets/vector.svg";
import upsideVector from "../assets/upsideVector.svg";
import Menu from "./Menu.jsx";

const Cart = () => {
  return (
    <>
      <div className="background"></div>
      <div className="backgroundMenu">
        <Menu />
      </div>

      <div className="cartcard ">
        <div className="polygon"></div>
        <h1 className="cart-text">Din beställning</h1>
        <main className="cartmain">
          <article className="cartitem">
            <div>
              <h2>Title</h2>
              <h4>56kr</h4>
            </div>
            <img src={Line} alt="line" />
            <div className="pricearrows">
              <div>
                <img className="arrows" src={upsideVector} alt="Upp arrow" />
                4
                <img className="arrows" src={Vector} alt="Down arrow" />
              </div>
            </div>
          </article>
        </main>

        <section className="cartmain">
          <article className="cartitem">
            <div>
              <h2>Title</h2>
              <h4>text</h4>
            </div>
            <img src={Line} alt="line" />
            <div>price</div>
          </article>
        </section>

        <button className="cartbtn cartbtnfont">Take my money!</button>
      </div>
    </>
  );
};

export default Cart;
