import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../PreLoader/Preloader";
import "./NewsCardList.css";
import notFoundLogo from "../../images/not-found_v1.svg";

function NewsCardList({ cards, isSearching }) {
  return (
    <>
      {cards.length > 0 && !isSearching && (
        <section className="news">
          <h2 className="news__title news__title_position_left news__title_size_medium">
            Resultados de la b&uacute;squeda
          </h2>
          <ul className="news__list">
            {cards.map((card, id) => (
              <NewsCard key={id} card={card}></NewsCard>
            ))}
          </ul>
          <button className="button news__button">Ver m&aacute;s</button>
        </section>
      )}
      {isSearching && (
        <section className="news news_status_loading">
          <Preloader></Preloader>
          <h3 className="news__description">Buscando Noticias...</h3>
        </section>
      )}
      {cards.length === 0 && !isSearching && (
        <section className="news news_status_not-found">
          <img src={notFoundLogo} className="news__not-found-image"></img>
          <h3 className="news__title news__title_size_small">
            No se encontró nada
          </h3>
          <h4 className="news__description">
            Lo sentimos, pero no hay nada que coincida con tus términos de
            búsqueda.
          </h4>
        </section>
      )}
    </>
  );
}

export default NewsCardList;
