import "./about.scss";
import Rectangle from "../../assets/rectangle.svg";
import { useNavigate } from "react-router-dom";
import FooterImg from "../../assets/header-footer.svg";
import HeaderImg from "../../assets/header-header.svg";

const About = () => {
  const navigate = useNavigate();
  const navigateToNewPage = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Nav");
  };

  return (
    <>
      <article className="aboutcard">
        <img src={HeaderImg} alt="" className="aboutheaderImg" />
        <header className="aboutheader">
          <div className="aboutbag" onClick={() => navigateToNewPage()}>
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
            <img className="imgRectangle" src={Rectangle} alt="navicon" />
          </div>
        </header>
        <main className="aboutmain">
          <h1 className="about-title">Vårt kaffe</h1>
          <p className="about-para">
            Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio,
            grounds dripper, crema, strong whipped, variety extra iced id lungo
            half and half mazagran. Pumpkin spice.
          </p>
          <br />
          <p className="about-para">
            Que dark fair trade, spoon decaffeinated, barista wings whipped, as
            rich aftertaste, con panna milk black, arabica white rich beans
            single shot extra affogato. So affogato macchiato sit extraction
            instant grinder seasonal organic, turkish single shot, single
            origin, and robusta strong to go so dripper. Viennese froth, grounds
            caramelization skinny aromatic cup kopi-luwak, fair trade flavour,
            frappuccino medium, café au lait flavour cultivar ut bar instant
            kopi-luwak.
          </p>
          <br />
          <p className="about-para">
            Roast id macchiato, single shot siphon mazagran milk fair trade est
            aroma a half and half and, so, galão iced to go, whipped as cream
            cup pumpkin spice iced. At extra, rich grinder, brewed to go,
            steamed half and half at, that, percolator macchiato trifecta and
            body as arabica dripper. In galão black java milk sit trifecta,
            robusta, acerbic café au lait instant shop latte. Seasonal bar shop
            filter aroma id, crema, affogato viennese cultivar aftertaste,
            seasonal, percolator cream black, galão flavour, milk aromatic
            turkish skinny crema.
          </p>
        </main>
        <footer className="aboutfooter">
          <div className="aboutfooterimg"> </div>
          <figcaption>Eva Cortado</figcaption>
          {/* <img /> */}
          <figcaption>VD & Grundare</figcaption>
        </footer>
        <img src={FooterImg} alt="" className="aboutfooterImgleaves" />
      </article>
    </>
  );
};

export default About;
