import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import "./Header.css";

function Header({
  onSearch,
  onSignInClick,
  onSignOutClick,
  isLoggedIn,
  theme = false,
}) {
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  function handleSearch(evt) {
    evt.preventDefault();
    searchTerm && onSearch(searchTerm);
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  function handleSignInClick() {
    onSignInClick();
  }

  function handleSignOutClick() {
    onSignOutClick();
  }

  return (
    <header className={`header${theme ? ` header__theme_${theme}` : ""}`}>
      <Navigation
        onSignInClick={handleSignInClick}
        onSignOutClick={handleSignOutClick}
        isLoggedIn={isLoggedIn}
        theme={theme && theme}
      ></Navigation>
      {location.pathname === "/" && (
        <section className="header__content">
          <section className="header__titles">
            <h1 className="header__title">{`¿Qué está pasando
        en el mundo?`}</h1>
            <h3 className="header__subtitle">
              Encuentra las últimas noticias sobre cualquier tema y guárdalas en
              tu cuenta personal.
            </h3>
          </section>

          <form className="searchbar header__searchbar" onSubmit={handleSearch}>
            <input
              className="searchbar__term"
              type="text"
              placeholder="Introduce un tema"
              onChange={handleChange}
            ></input>
            <button className="button searchbar__button">Buscar</button>
          </form>
        </section>
      )}
    </header>
  );
}

export default Header;
