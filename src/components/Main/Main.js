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
}) {
  async function saveCard(card) {
    try {
      //TODO: Track searched keyword
      const response = await api.saveArticle({
        keyword: "some text",
        title: card.title,
        description: card.description,
        publishDate: card.publishedAt,
        source: card.source.name,
        url: card.url,
        photo: card.urlToImage,
      });
      const savedArticle = response.article;
      onCardBookmark(savedArticle, true);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteCard(card) {
    try {
      await api.deleteArticle(card._id);
      onCardBookmark(card, false);
    } catch (err) {
      console.log(err);
    }
  }

  function isBookmarked(card) {
    return savedCards.some((savedCard) => savedCard.url === card.url);
  }

  async function handleCardBookmark(card) {
    const savedCard = savedCards.find(
      (savedCard) => savedCard.url === card.url
    );
    !savedCard ? saveCard(card) : deleteCard(savedCard);
  }

  return (
    <main className="main">
      <section className="main__container">
        {isNewsListShown && (
          <NewsCardList
            cards={cards}
            isSearching={isSearching}
            isSearchingMore={isSearchingMore}
            onViewMore={onClickViewMore}
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
      </section>
    </main>
  );
}

export default Main;
