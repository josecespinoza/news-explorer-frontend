import NewsCardList from "../NewsCardList/NewsCardList";
import "./Main.css";

function Main({
  cards,
  isNewsListShown,
  isSearching,
  isSearchingMore,
  onClickViewMore,
  isLastPage,
}) {
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
          ></NewsCardList>
        )}
      </section>
    </main>
  );
}

export default Main;
