import "./menu.scss";
import FooterImg from "../../assets/header-footer.svg";
import HeaderImg from "../../assets/header-header.svg";
import Api from "../Api/Api.jsx";

const Menu = () => {
  return (
    <>
      <div className="menu-main">
        <img src={HeaderImg} alt="" className="headerImg" />

        <Api />
        <img src={FooterImg} alt="" className="footerImg" />
      </div>
    </>
  );
};

export default Menu;
