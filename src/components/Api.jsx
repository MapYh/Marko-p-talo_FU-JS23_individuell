import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Bag from "../assets/bag.svg";
import Rectangle from "../assets/rectangle.svg";
import Plus from "../assets/plus.svg";
import Line from "../assets/line.svg";
import "./api.scss";
import "./menu.scss";

const menuPageInfo = {
  logo: Bag,
  navLogo: Rectangle,
  plusSign: Plus,
  numberOfItems: 7,
};

let total_eta;
let order_number;

const Api = () => {
  const [Data, setData] = useState([]);
  const [Item, setItem] = useState([]);

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

  const addItemToCart = async (arg, argtwo) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        details: {
          order: [
            {
              name: arg,
              price: argtwo,
            },
          ],
        },
      }),
    };
    const response = await fetch(
      " https://airbean-api-xjlcn.ondigitalocean.app/api/beans/order",
      requestOptions
    );
    const data = await response.json(response);
    setItem(data);
    total_eta = data.eta; //ok
    order_number = data.orderNr; //ok
    console.log(total_eta, order_number);
    /* return { total_eta, order_number }; */
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
    return Data.slice(0, Data.length - 2).map((item) => {
      return (
        <li className="item-list " key={item.id}>
          <div className="item-container">
            <section
              className="plussign  ellipseplus"
              onClick={() => addItemToCart(item.title, item.price)}
            >
              <img className="add-icon" src={menuPageInfo.plusSign} alt="" />
            </section>
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
            <div className="littlebag"></div>
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
