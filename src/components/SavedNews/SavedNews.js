import NewsCard from "../NewsCard/NewsCard";
import NewsCardList from "../NewsCardList/NewsCardList";
import "./SavedNews.css";

function SavedNews({ savedCards }) {
  return (
    <main className="main">
      <section className="saved-news">
        <section className="saved-news__header">
          <h6 className="saved-news__section-title">Artículos guardados</h6>
          <h3 className="saved-news__title">
            {`Elise, tienes 5 artículos 
            guardados`}
          </h3>
          <h5 className="saved-news__legend">
            Por palabras clave:{" "}
            <span className="saved-news__legend_weight_bold">
              Naturaleza, Yellowstone, y 2 más
            </span>
          </h5>
        </section>
        <NewsCardList cards={savedCards} customClassName="saved-news__news">
          {savedCards.map((savedCard, index) => (
            <NewsCard
              key={index}
              card={savedCard}
              isBookmarked={false}
              onBookmark={() => {}}
            ></NewsCard>
          ))}
        </NewsCardList>
      </section>
    </main>
  );
}

export default SavedNews;
