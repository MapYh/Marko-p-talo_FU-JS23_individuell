import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navigate = useNavigate();

  const navigateToNewPage = () => {
    // use the navigate function to navigate to /Menu
    navigate("/Menu");
  };

  return (
    <article className="navcard">
      <header className="navheader"></header>
      <main className="navmain">
        <div onClick={() => navigateToNewPage()}>Menu</div>
        <div onClick={() => navigateToNewPage()}>Vårt kaffe</div>
        <div onClick={() => navigateToNewPage()}>Min profil</div>
        <div onClick={() => navigateToNewPage()}>Orderstatus</div>
      </main>
      <footer className="navfooter"></footer>
    </article>
  );
};

export default Nav;
