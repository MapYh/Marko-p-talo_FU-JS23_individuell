import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bag from "../../assets/bag.svg";
import Rectangle from "../../assets/rectangle.svg";
import Plus from "../../assets/plus.svg";
import Line from "../../assets/line.svg";
import "./api.scss";
import "../Menu/Menu";
import { useStore } from "../../store.js";

const menuPageInfo = {
  logo: Bag,
  navLogo: Rectangle,
  plusSign: Plus,
};

const Api = () => {
  const [Data, setData] = useState([]);
  const [Item, setItem] = useState([]); //eta, ordernummer
  const increaseQuantity = useStore((state) => state.increaseQuantity);

  const count = useStore((state) => state.count);
  const addToCart = useStore((state) => state.addToCart);
  const setOrderNumber = useStore((state) => state.setOrderNumber);
  const setEta = useStore((state) => state.setEta);

  const fetchData = async () => {
    const url = "//airbean-api-xjlcn.ondigitalocean.app/api/beans/";
    const res = await fetch(url);
    const d = await res.json();

    if (JSON.stringify(d.menu) !== JSON.stringify(Data)) {
      setData(d.menu);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const setOrderNrEta = async (title, price) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        details: {
          order: [
            {
              name: title,
              price: price,
            },
          ],
        },
      }),
    };
    const response = await fetch(
      " https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
      requestOptions
    );
    const data = await response.json(response); //eta
    console.log("1", title);
    console.log("2", price);
    console.log("5", Item);

    setItem(data);
    setOrderNumber(Item.orderNr);
    setEta(Item.eta);

    console.log("api", Item);
  };

  const navigate = useNavigate();
  const navigateToCart = () => {
    // use the navigate function to navigate to /Menu
    navigate("/cart");
  };

  const navigateToNewPage = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
  };

  const Display = () => {
    return Data.slice(0, Data.length).map((item) => {
      return (
        <li className="item-list " key={item.id}>
          <div className="item-container">
            <div
              onClick={() => {
                addToCart(item);
              }}
            >
              <div
                onClick={() => {
                  setOrderNrEta(item.title, item.price);
                }}
              >
                <section
                  className="plussign  ellipseplus"
                  onClick={increaseQuantity}
                >
                  <img
                    className="add-icon"
                    src={menuPageInfo.plusSign}
                    alt=""
                  />
                </section>
              </div>
            </div>
            <div className="item-textcontainer">
              <section className="item_title_line">
                <h3 className="item_title">{item.title}</h3>
                <img className="add-icon" src={Line} alt="" />
              </section>

              <p className="item_desc">{item.desc}</p>
            </div>
            <p className="item_price">{item.price} kr</p>
          </div>
        </li>
      );
    });
  };

  return (
    <>
      <article className="menucard">
        <header className="menuheader">
          <div className="bagleft" onClick={() => navigateToNewPage()}>
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
          </div>
          <div className="bagright" onClick={() => navigateToCart()}>
            <img src={Bag} alt="shopping bag" />
            <div className="littlebag">{count}</div>
          </div>
          <h1>{menuPageInfo.main}</h1>
        </header>
        <section className="menuitem">{Display()}</section>

        <footer className="footer"></footer>
      </article>
    </>
  );
};
export default Api;
