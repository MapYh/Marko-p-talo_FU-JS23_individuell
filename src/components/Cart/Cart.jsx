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
    // use the navigate function to navigate to /Menu
    navigate("/Status");
  };

  const increment = useStore((state) => state.increment);
  const coffeeList = useStore((state) => state.coffeeList);
  const decrement = useStore((state) => state.decrement);
  const setCoffeeList = useStore((state) => state.setCoffeeList);
  const deleteItem = useStore((state) => state.deleteItem);

  let totalarray = [0];

  totalarray = coffeeList.slice(1, coffeeList.length).map((coffee) => {
    return coffee.coffePrice;
  });

  const total = totalarray.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
  });

  console.log("coffeeList", coffeeList.slice(1, coffeeList.length));

  const Display = () => {
    return coffeeList.slice(1, coffeeList.length).map((item) => {
      return (
        <li className="item-list " key={item.coffeeId}>
          <div className="item-textcontainer"></div>
          <div className="max-width">
            <h3 className="item_title">{item.coffeTitle}</h3>
            <p className="item_price">{item.coffePrice} kr</p>
          </div>
          <img src={Line} alt="line" />
          <div className="pricearrows">
            <div>
              <div
                onClick={() => {
                  setCoffeeList(
                    item.coffeTitle,
                    item.coffePrice,
                    item.coffeeId,
                    item.coffeCount
                  );

                  /*  console.log("test");
                  console.log(
                    "coffeeList",
                    coffeeList.slice(1, coffeeList.length)
                  ); */
                }}
              >
                <div onClick={increment}>
                  <img className="arrows" src={upsideVector} alt="Upp arrow" />
                </div>
              </div>
              <div>{item.coffeCount}</div>
              <div
                onClick={() => {
                  deleteItem(item.coffeTitle);

                  /*  console.log("test");
                  console.log(
                    "coffeeList",
                    coffeeList.slice(1, coffeeList.length)
                  ); */
                }}
              >
                <div onClick={decrement}>
                  <img className="arrows" src={Vector} alt="Down arrow" />
                </div>
              </div>
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
            <div>{total} Kr</div>
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
