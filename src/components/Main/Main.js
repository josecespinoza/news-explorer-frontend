import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";
import api from "../../utils/api";
import AuthContext from "../../contexts/AuthContext";
import { useContext, useEffect, useState } from "react";

function Main({
  cards,
  isNewsListShown,
  isSearching,
  isSearchingMore,
  onClickViewMore,
  isLastPage,
}) {
  const [savedArticles, setSavedArticles] = useState([]);
  const isLoggedIn = useContext(AuthContext);

  useEffect(() => {
    isLoggedIn
      ? api.getArticles().then((articles) => {
          setSavedArticles(articles);
        })
      : setSavedArticles([]);
  }, [isLoggedIn]);

  async function saveArticle(article) {
    try {
      const response = await api.saveArticle({
        keyword: "some text",
        title: article.title,
        description: article.description,
        publishDate: article.publishedAt,
        source: article.source.name,
        url: article.url,
        photo: article.urlToImage,
      });
      setSavedArticles((prevSavedArticles) => [
        ...prevSavedArticles,
        response.article,
      ]);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteArticle(savedArticle) {
    try {
      const response = await api.deleteArticle(savedArticle._id);
      setSavedArticles((prevSavedArticles) =>
        prevSavedArticles.filter((article) => article._id !== savedArticle._id)
      );
    } catch (err) {
      console.log(err);
    }
  }

  function isBookmarked(article) {
    const isBookmarked = savedArticles.some(
      (savedArticle) => savedArticle.url === article.url
    );
    return isBookmarked;
  }

  async function handleArticleBookmark(article) {
    const savedArticle = savedArticles.find(
      (savedArticle) => savedArticle.url === article.url
    );
    console.log("savedArticle", savedArticle);
    !savedArticle ? saveArticle(article) : deleteArticle(savedArticle);
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
                onBookmark={handleArticleBookmark}
              ></NewsCard>
            ))}
          </NewsCardList>
        )}
      </section>
    </main>
  );
}

export default Main;
