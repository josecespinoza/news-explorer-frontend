import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../PreLoader/Preloader";

import "./NewsCardList.css";

function NewsCardList({ cards, isSearching }) {
  return (
    <>
      {cards.length > 0 && !isSearching && (
        <section className="news">
          <h2 className="main__title">Resultados de la b&uacute;squeda</h2>
          <ul className="news__list">
            {cards.map((card, id) => (
              <NewsCard key={id} card={card}></NewsCard>
            ))}
          </ul>
          <button className="button news__button">Ver más</button>
        </section>
      )}
      {isSearching && (
        <section className="news">
          <section className="news__loader">
            <Preloader></Preloader>
            <h2 className="news__loading-text">Buscando Noticias</h2>
          </section>
        </section>
      )}
      {!cards.length === 0 && !isSearching && (
        <section className="news">
          <section className="main__notfound"></section>
        </section>
      )}
    </>
  );
}

export default NewsCardList;
