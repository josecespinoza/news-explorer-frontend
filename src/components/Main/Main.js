import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ cards }) {
  return (
    <main className="main">
      <section className="main__container">
        <NewsCardList cards={cards}></NewsCardList>
      </section>
    </main>
  );
}

export default Main;
