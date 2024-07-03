import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";
import api from "../../utils/api";

function Main({
  cards,
  savedCards,
  onCardBookmark,
  isNewsListShown,
  isSearching,
  isSearchingMore,
  onClickViewMore,
  isLastPage,
  onError,
}) {
  async function saveCard(card) {
    try {
      const response = await api.saveArticle(card);
      const savedArticle = response.article;
      onCardBookmark(savedArticle, true);
    } catch (err) {
      onError(err.message);
    }
  }
  async function deleteCard(card) {
    try {
      await api.deleteArticle(card._id);
      onCardBookmark(card, false);
    } catch (err) {
      onError(err.message);
    }
  }

  function isBookmarked(card) {
    return savedCards.some((savedCard) => {
      return savedCard && savedCard.url === card.url;
    });
  }

  async function handleCardBookmark(card) {
    const savedCard = savedCards.find(
      (savedCard) => savedCard.url === card.url
    );
    !savedCard ? saveCard(card) : deleteCard(savedCard);
  }

  return (
    <main className="main">
      {isNewsListShown && (
        <NewsCardList
          customClassName="main__news"
          cards={cards}
          title="Resultados de la búsqueda"
          isPaginated={true}
          onViewMore={onClickViewMore}
          isSearching={isSearching}
          isSearchingMore={isSearchingMore}
          isLastPage={isLastPage}
        >
          {cards.map((card, index) => (
            <NewsCard
              key={index}
              card={card}
              isBookmarked={isBookmarked(card)}
              onBookmark={handleCardBookmark}
            ></NewsCard>
          ))}
        </NewsCardList>
      )}
    </main>
  );
}

export default Main;
