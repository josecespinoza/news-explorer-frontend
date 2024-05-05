import "./Main.css";

function Main({ cards }) {
  return (
    <main className="main">
      <section className="main__container">
        {cards && (
          <>
            <h2 className="main__title">Resultados de la b&uacute;squeda</h2>
            <ul className="main__news">
              {cards.map((card) => (
                <li className="main__card"></li>
              ))}
            </ul>
            <button className="button main__button">Ver más</button>
          </>
        )}
        {!cards && <section className="main__notfound"></section>}
      </section>
    </main>
  );
}

export default Main;
