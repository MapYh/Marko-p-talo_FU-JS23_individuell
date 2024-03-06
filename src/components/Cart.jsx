import "./cart.scss";
import Line from "../assets/line.svg";
import Vector from "../assets/vector.svg";
import upsideVector from "../assets/upsideVector.svg";
import Menu from "./Menu.jsx";
/* import useCounterStore from "./useCounterStore.jsx"; */
import { create } from "zustand";

const useCounterStore = create((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

const Cart = () => {
  const increment = useCounterStore((state) => state.increment);
  const decrement = useCounterStore((state) => state.decrement);
  const count = useCounterStore((state) => state.count);

  let pris = 10;
  let total = count * pris;

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
                <div onClick={increment}>
                  <img className="arrows" src={upsideVector} alt="Upp arrow" />
                </div>
                <div>{count}</div>
                <div onClick={decrement}>
                  <img className="arrows" src={Vector} alt="Down arrow" />
                </div>
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
            <div>{total} Kr</div>
          </article>
        </section>

        <button className="cartbtn cartbtnfont" onClick={increment}>
          Take my money!
        </button>
      </div>
    </>
  );
};

export default Cart;
