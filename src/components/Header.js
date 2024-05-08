import { useState } from "react";
import Navigation from "./Navigation";

function Header({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  function handleSearch(evt) {
    evt.preventDefault();
    onSearch(searchTerm);
  }

  function handleChange(evt) {
    setSearchTerm(evt.target.value);
  }

  return (
    <header className="header">
      <Navigation></Navigation>
      <section className="header__titles">
        <h1 className="header__title">{`¿Qué está pasando
        en el mundo?`}</h1>
        <h3 className="header__subtitle">
          Encuentra las últimas noticias sobre cualquier tema y guárdalas en tu
          cuenta personal.
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
    </header>
  );
}

export default Header;
