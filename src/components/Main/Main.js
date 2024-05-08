import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({ cards, isSearching }) {
  return (
    <main className="main">
      <section className="main__container">
        <NewsCardList cards={cards} isSearching={isSearching}></NewsCardList>
      </section>
    </main>
  );
}

export default Main;
