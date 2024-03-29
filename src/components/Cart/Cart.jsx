import "./cart.scss";
import Line from "../../assets/line.svg";
import Vector from "../../assets/vector.svg";
import upsideVector from "../../assets/upsideVector.svg";
import Menu from "../Menu/Menu.jsx";
import { useStore } from "../../store.js";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const navigateToStatusPage = () => {
    // Navigera till Status sidan.
    navigate("/Status");
  };
  const cart = useStore((state) => state.cart);
  const increaseQty = useStore((state) => state.increaseQty);
  const decreaseQty = useStore((state) => state.decreaseQty);
  const totalSum = useStore((state) => state.totalSum);

  const Display = () => {
    return cart.map((item) => {
      return (
        <li className="item-list " key={item.id}>
          <div className="item-textcontainer"></div>
          <div className="max-width">
            <h3 className="item_title">{item.title}</h3>
            <p className="item_price">{item.price} kr</p>
          </div>
          <img src={Line} alt="line" />
          <div className="pricearrows">
            <div>
              <div onClick={() => increaseQty(item.id)}>
                <img className="arrows" src={upsideVector} alt="Upp arrow" />
              </div>
            </div>
            <div>{item.qty}</div>

            <div onClick={() => decreaseQty(item.id)}>
              <img className="arrows" src={Vector} alt="Down arrow" />
            </div>
          </div>
        </li>
      );
    });
  };
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
            <section>{Display()}</section>
          </article>
        </main>

        <section className="cartmain">
          <article className="cartitem">
            <div>
              <h2>Total</h2>
              <h4>inkl moms + drönarleverans</h4>
            </div>
            <img src={Line} alt="line" />
            <div>{totalSum} Kr</div>
          </article>
        </section>

        <button
          className="cartbtn cartbtnfont"
          onClick={() => navigateToStatusPage()}
        >
          Take my money!
        </button>
      </div>
    </>
  );
};

export default Cart;
