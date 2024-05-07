import "./NewsCard.css";

function NewsCard({ card }) {
  return (
    <li className="news-card">
      <img src={card.photo} alt="" className="news-card__photo" />
      <section className="news-card__content">
        <h4 className="news-card__date">{card.date}</h4>
        <h3 className="news-card__title">{card.title}</h3>
        <p className="news-card__description">{card.description}</p>
        <h3 className="news-card__publisher">{card.publisher}</h3>
      </section>
    </li>
  );
}

export default NewsCard;
