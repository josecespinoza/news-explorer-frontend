import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import cards from "./data/cards.json";
import newsApi from "./utils/api";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);

  function handleNewsSearch(searchTerm) {
    newsApi.getNews(searchTerm).then((result) => {
      setCards(result.articles);
    });
  }

  return (
    <div className="page">
      <Header onSearch={handleNewsSearch}></Header>
      <Main cards={cards}></Main>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
