import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import newsApi from "./utils/api";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  function handleNewsSearch(searchTerm) {
    setIsSearching(true);
    newsApi.getNews(searchTerm).then((result) => {
      setIsSearching(false);
      setCards(result.articles);
    });
  }

  return (
    <div className="page">
      <Header onSearch={handleNewsSearch}></Header>
      <Main cards={cards} isSearching={isSearching}></Main>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
