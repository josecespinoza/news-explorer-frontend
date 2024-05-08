import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  console.log(cards);
  return (
    <section className="news">
      {cards && (
        <>
          <h2 className="main__title">Resultados de la b&uacute;squeda</h2>
          <ul className="news__list">
            {cards.map((card, id) => (
              <NewsCard key={id} card={card}></NewsCard>
            ))}
          </ul>
          <button className="button news__button">Ver más</button>
        </>
      )}
      {!cards && <section className="main__notfound"></section>}
    </section>
  );
}

export default NewsCardList;
