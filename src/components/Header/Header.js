import { useState } from "react";
import Navigation from "../Navigation/Navigation";
import { useLocation } from "react-router-dom";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

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
      <section className="header__top-bar">
        <section className="header__top-bar-container">
          <Link to="/" className="header__sitename-link">
            <h2 className="header__sitename">NewsExplorer</h2>
          </Link>
          <Navigation
            onSignInClick={handleSignInClick}
            onSignOutClick={handleSignOutClick}
            isLoggedIn={isLoggedIn}
            theme={theme && theme}
          ></Navigation>
        </section>
        <div className="header__top-bar-divider"></div>
      </section>
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

          <SearchForm
            buttonLabel="Buscar"
            onChange={handleChange}
            onSearch={handleSearch}
            placeholder="Introduce un tema"
            customClassName="header__searchbar"
          ></SearchForm>
        </section>
      )}
    </header>
  );
}

export default Header;
