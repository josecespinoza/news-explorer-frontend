import "./NewsCard.css";
import bookmark from "../../images/bookmark.svg";
import { useState } from "react";

function NewsCard({ card }) {
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const publishedAt = new Date(card.publishedAt).toLocaleString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  function handleSaveCardClick() {}

  function toogleBookmarkTooltip() {
    setIsTooltipOpen(!isTooltipOpen);
  }

  return (
    <li className="news-card">
      <div className="news-card__bookmark">
        {isTooltipOpen && (
          <div className="news-card__bookmark-tooltip">
            <h6 className="news-card__bookmark-text">
              Inicia sesión para guardar artículos
            </h6>
          </div>
        )}
        <button
          className="button news-card__button"
          onClick={handleSaveCardClick}
          onMouseEnter={toogleBookmarkTooltip}
          onMouseLeave={toogleBookmarkTooltip}
        >
          <div className="button__content">
            <div className="button__icon-container">
              <img
                className="button__icon button__icon_action_bookmark"
                alt="bookmark icon"
                src={bookmark}
              ></img>
            </div>
          </div>
        </button>
      </div>
      <img src={card.urlToImage} alt="" className="news-card__photo" />
      <section className="news-card__content">
        <h4 className="news-card__date">{publishedAt}</h4>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
        <h3 className="news-card__publisher">{card.source.name}</h3>
      </section>
    </li>
  );
}

export default NewsCard;
