import NewsCard from "../NewsCard/NewsCard";
import Preloader from "../PreLoader/Preloader";
import "./NewsCardList.css";
import notFoundLogo from "../../images/not-found_v1.svg";

function NewsCardList({
  cards,
  isSearching,
  isSearchingMore,
  onViewMore,
  isLastPage,
}) {
  function handleViewMore(evt) {
    evt.preventDefault();
    onViewMore();
  }

  function getClassName() {
    const className = ["news"];
    isSearching && className.push("news_status_loading");
    cards.length === 0 && className.push("news_status_not-found");
    return className.join(" ");
  }

  return (
    <section className={getClassName()}>
      {!isSearching && cards.length === 0 && (
        <>
          <img src={notFoundLogo} className="news__not-found-image"></img>
          <h3 className="news__title news__title_size_small">
            No se encontró nada
          </h3>
          <h4 className="news__description">
            Lo sentimos, pero no hay nada que coincida con tus términos de
            búsqueda.
          </h4>
        </>
      )}
      {!isSearching && cards.length > 0 && (
        <>
          <h2 className="news__title news__title_position_left news__title_size_medium">
            Resultados de la b&uacute;squeda
          </h2>
          <ul className="news__list">
            {cards.map((card, id) => (
              <NewsCard key={id} card={card}></NewsCard>
            ))}
          </ul>
          {isSearchingMore && (
            <>
              <Preloader></Preloader>
              <h3 className="news__description">Buscando Noticias...</h3>
            </>
          )}
          {!isLastPage && (
            <button className="button news__button" onClick={handleViewMore}>
              Ver m&aacute;s
            </button>
          )}
        </>
      )}
      {isSearching && (
        <>
          <Preloader></Preloader>
          <h3 className="news__description">Buscando Noticias...</h3>
        </>
      )}
    </section>
  );
}

export default NewsCardList;
