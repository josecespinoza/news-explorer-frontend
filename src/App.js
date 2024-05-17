import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import ModalWithForm from "./components/ModalWithForm/ModalWithForm";
import newsApi from "./utils/api";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingMore, setIsSearchingMore] = useState(false);
  const [isNewsListShown, setIsNewsListShown] = useState(false);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);

  function handleNewsSearch(searchTerm) {
    setCurrentSearchTerm(searchTerm);
    setIsNewsListShown(true);
    setIsSearching(true);
    newsApi.getNews(searchTerm).then((result) => {
      setCurrentPage(1);
      setTotalPages(
        Math.ceil(result.totalResults / process.env.REACT_APP_NEWS_PAGE_SIZE)
      );
      setIsSearching(false);
      result.articles && setCards(result.articles);
    });
  }

  function handleViewMore() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setIsSearchingMore(true);
    newsApi.getNews(currentSearchTerm, nextPage).then((result) => {
      setIsSearchingMore(false);
      setCards((prevCards) => [...prevCards, ...result.articles]);
    });
  }

  const signInInputs = [
    {
      label: "Correo Electrónico",
      name: "email",
      type: "text",
      placeholder: "Introduce tu correo electrónico",
      required: true,
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      placeholder: "Introduce tu contraseña",
      required: true,
    },
  ];

  const handleSignIn = {};

  return (
    <div className="page">
      <Header onSearch={handleNewsSearch}></Header>
      <Main
        isNewsListShown={isNewsListShown}
        cards={cards}
        isSearching={isSearching}
        isSearchingMore={isSearchingMore}
        onClickViewMore={handleViewMore}
        isLastPage={totalPages === currentPage}
      ></Main>
      <About></About>
      <Footer></Footer>
      {false && (
        <ModalWithForm
          title="Iniciar sesión"
          buttonLabel="Iniciar sesión"
          inputs={signInInputs}
          onSubmit={handleSignIn}
        ></ModalWithForm>
      )}
    </div>
  );
}

export default App;
