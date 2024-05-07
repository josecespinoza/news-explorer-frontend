import NewsCard from "../NewsCard/NewsCard";
import "./NewsCardList.css";

function NewsCardList({ cards }) {
  console.log(cards);
  return (
    <>
      {cards && (
        <>
          <ul className="news">
            {cards.map((card, id) => (
              <NewsCard key={id} card={card}></NewsCard>
            ))}
          </ul>
          <button className="button news__button">Ver más</button>
        </>
      )}
      {!cards && <section className="main__notfound"></section>}
    </>
  );
}

export default NewsCardList;
