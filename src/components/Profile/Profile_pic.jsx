import "./profile_pic.scss";

const profile_pic = () => {
  return (
    <>
      <article className="profile-content">
        <article className="profile_pic-user">
          <section className="profile_pic-ellipse">
            <section className="profile_pic-pic"></section>
          </section>

          <section className="profile_pic-styling">
            <h2 className="profile_pic-name">test</h2>
            <h5 className="profile_pic-under-name-text">test test</h5>
          </section>
        </article>
        <main className="order_pic-history">
          <h2 className="profile_pic-order-styling">Order historik</h2>
          {/* <ul>{Display}</ul> */}
        </main>
      </article>
    </>
  );
};

export default profile_pic;
