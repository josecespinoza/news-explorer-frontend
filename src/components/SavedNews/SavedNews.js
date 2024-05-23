import api from "../../utils/api";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedCards, onCardRemove }) {
  async function handleCardRemove(card) {
    onCardRemove(card);
  }

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
    <main className="main">
      <section className="saved-news">
        <section className="saved-news__header">
          <h6 className="saved-news__section-title">Artículos guardados</h6>
          <h3 className="saved-news__title">
            {`Elise, tienes ${savedCards.length} artículos 
            guardados`}
          </h3>
          <h5 className="saved-news__legend">
            Por palabras clave:{" "}
            <span className="saved-news__legend_weight_bold">
              {getUniqueKeywords(savedCards)}
            </span>
          </h5>
        </section>
        <NewsCardList cards={savedCards} customClassName="saved-news__news">
          {savedCards.map((savedCard, index) => (
            <NewsCard
              key={index}
              card={savedCard}
              isBookmarked={true}
              onBookmark={() => {}}
              onRemove={handleCardRemove}
              mode="remove"
            ></NewsCard>
          ))}
        </NewsCardList>
      </section>
    </main>
  );
}

export default SavedNews;
