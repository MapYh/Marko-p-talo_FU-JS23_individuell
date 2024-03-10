import "./card.scss";

const Card = (content) => {
  return (
    <>
      <article className="card styling">
        <section className="ellipse ">
          <img src={content.props.logo}></img>
        </section>
        <h1>{content.props.main}</h1>
        <section className="stylingDronedelivery">
          {content.props.section}
        </section>
      </article>
    </>
  );
};

export default Card;
