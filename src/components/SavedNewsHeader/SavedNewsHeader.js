import { capitalize } from "../../utils/utils";
import "./SavedNewsHeader.css";

function SavedNewsHeader({ username, savedCards }) {
  function getUniqueKeywords(cards) {
    const keywords = cards.map(
      (card) =>
        card.keyword.substring(0, 1).toUpperCase() +
        card.keyword.substring(1, card.keyword.length)
    );
    const uniqueKeywords = [...new Set(keywords)];
    return `${[...uniqueKeywords].slice(0, 2).join(", ")} y ${
      uniqueKeywords.length
    } más`;
  }

  return (
    <section className="saved-news-header">
      <h6 className="saved-news-header__section-title">Artículos guardados</h6>
      <h3 className="saved-news-header__title">
        {`${capitalize(username)}, tienes ${savedCards.length} artículos 
          guardados`}
      </h3>
      <h5 className="saved-news-header__legend">
        Por palabras clave:{" "}
        <span className="saved-news-header__legend_weight_bold">
          {getUniqueKeywords(savedCards)}
        </span>
      </h5>
    </section>
  );
}

export default SavedNewsHeader;
