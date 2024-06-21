import { useContext } from "react";
import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";
import UserContext from "../../contexts/UserContext";
import SavedNewsHeader from "../SavedNewsHeader/SavedNewsHeader";

function SavedNews({ savedCards, onCardRemove }) {
  const userInfo = useContext(UserContext);

  async function handleCardRemove(card) {
    onCardRemove(card);
  }

  return (
    <main className="main">
      <section className="saved-news">
        <SavedNewsHeader
          username={userInfo.username}
          savedCards={savedCards}
        ></SavedNewsHeader>
        <NewsCardList cards={savedCards} customClassName="saved-news__news">
          {savedCards.map((savedCard, index) => (
            <NewsCard
              key={index}
              card={savedCard}
              isBookmarked={true}
              onBookmark={() => {}}
              onRemove={handleCardRemove}
              mode="saved"
            ></NewsCard>
          ))}
        </NewsCardList>
      </section>
    </main>
  );
}

export default SavedNews;
