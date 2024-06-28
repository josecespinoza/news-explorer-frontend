import Preloader from "../PreLoader/Preloader";
import "./NewsCardList.css";
import notFoundLogo from "../../images/not-found_v1.svg";

function NewsCardList({
  children,
  cards,
  title = null,
  isPaginated = false,
  isSearching = false,
  isSearchingMore = false,
  onViewMore = null,
  isLastPage = false,
  customClassName = "",
}) {
  function handleViewMore(evt) {
    evt.preventDefault();
    onViewMore();
  }

  function getClassName() {
    const className = ["news"];
    isSearching && className.push("news_status_loading");
    cards.length === 0 && className.push("news_status_not-found");
    customClassName && className.push(customClassName);
    return className.join(" ");
  }

  return (
    <section className={getClassName()}>
      {!isSearching && cards.length === 0 && (
        <>
          <img
            src={notFoundLogo}
            alt="Not found logo"
            className="news__not-found-image"
          ></img>
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
          {title && (
            <h2 className="news__title news__title_position_left news__title_size_medium">
              {title}
            </h2>
          )}
          <ul className="news__list">{children}</ul>
          {isSearchingMore && (
            <>
              <Preloader></Preloader>
              <h3 className="news__description">Buscando Noticias...</h3>
            </>
          )}
          {!isLastPage && isPaginated && (
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
