import "./NewsCard.css";
import unbookmarked from "../../images/unbookmarked.svg";
import bookmarked from "../../images/bookmarked.svg";
import { useContext, useState } from "react";
import AuthContext from "../../contexts/AuthContext";

function NewsCard({ card, isBookmarked, onBookmark }) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const isLoggedIn = useContext(AuthContext);

  const publishDate = new Date(card.publishDate).toLocaleString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  async function handleBookmark() {
    if (!isLoggedIn) {
      return;
    }
    onBookmark(card);
  }

  function toogleBookmarkTooltip() {
    setIsTooltipOpen(!isTooltipOpen);
  }

  return (
    <li className="news-card">
      <div className="news-card__bookmark">
        {isTooltipOpen && !isLoggedIn && (
          <div className="news-card__bookmark-tooltip">
            <h6 className="news-card__bookmark-text">
              Inicia sesión para guardar artículos
            </h6>
          </div>
        )}
        <button
          className="button news-card__button"
          onClick={handleBookmark}
          onMouseEnter={toogleBookmarkTooltip}
          onMouseLeave={toogleBookmarkTooltip}
        >
          <div className="button__content">
            <div className="button__icon-container">
              <img
                className="button__icon button__icon_action_bookmark"
                alt="bookmark icon"
                src={isBookmarked ? bookmarked : unbookmarked}
              ></img>
            </div>
          </div>
        </button>
      </div>
      <img src={card.photo} alt="" className="news-card__photo" />
      <section className="news-card__content">
        <h4 className="news-card__date">{publishDate}</h4>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
        <h3 className="news-card__publisher">{card.source}</h3>
      </section>
    </li>
  );
}

export default NewsCard;
