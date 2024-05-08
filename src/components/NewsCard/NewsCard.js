import "./NewsCard.css";

function NewsCard({ card }) {
  const publishedAt = new Date(card.publishedAt).toLocaleString("es-PE", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <li className="news-card">
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
