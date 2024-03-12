import "./profile_pic.scss";
import { useStore } from "../../store";

const Profile_pic = () => {
  const totaltSpenderat = useStore((state) => state.totaltSpenderat);

  /*   const Display = () => {
    return users.?((order) => {
      return (
        <li className="order-list " key={item.id}>
        <article>
          <section>{order.orderNr}</section>
          <section>{order.dateOfOrder}</section>
          </article>
          <article>
          <section>Total ordersumma</section>
          <section>{order.totalordersumma}</section>
          </article>
            <img src="src\assets\user-line.svg" alt="" className="user-line-faded" />

        </li>
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
         
          <img src="src\assets\user-line.svg" alt="" className="user-line" />
          <section className="user-totalt-spenderat">
            <section>Total spenderat</section>
            <section>{order.totaltSpenderat}</section>
          </section>
        </main>
      </article>
      
      );
    });
  }; */

  return <>{/* <ul>{Display}</ul> */}</>;
};

export default Profile_pic;
