import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ cards }) {
  return (
    <main className="main">
      <section className="main__container">
        <h2 className="main__title">Resultados de la b&uacute;squeda</h2>
        <NewsCardList cards={cards}></NewsCardList>
      </section>
    </main>
  );
}

export default Main;
