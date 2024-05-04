import Navigation from "./Navigation";

function Header() {
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
      <div className="searchbar header__searchbar">
        <input
          className="searchbar__term"
          type="text"
          placeholder="Introduce un tema"
        ></input>
        <button className="button searchbar__button">Buscar</button>
      </div>
    </header>
  );
}

export default Header;
