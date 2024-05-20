import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import newsApi from "./utils/newsApi";
import { useState } from "react";
import SignInModalForm from "./components/SignInModalForm/SignInModalForm";
import AuthContext from "./contexts/AuthContext";

function App() {
  const [cards, setCards] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [isSearchingMore, setIsSearchingMore] = useState(false);
  const [isNewsListShown, setIsNewsListShown] = useState(false);
  const [currentSearchTerm, setCurrentSearchTerm] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [isSigninOpen, setIsSignInOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  function handleSignInClick() {
    setIsSignInOpen(true);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
  }

  function handleSignClose() {
    setIsSignInOpen(false);
  }

  function handleSignIn() {
    setIsSignInOpen(false);
    setIsLoggedIn(true);
  }

  return (
    <div className="page">
      <AuthContext.Provider value={isLoggedIn}>
        <Header
          onSearch={handleNewsSearch}
          onSignInClick={handleSignInClick}
          onSignOutClick={handleSignOutClick}
          isLoggedIn={isLoggedIn}
        ></Header>
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
        {isSigninOpen && (
          <SignInModalForm
            onClose={handleSignClose}
            onSignIn={handleSignIn}
          ></SignInModalForm>
        )}
      </AuthContext.Provider>
    </div>
  );
}

export default App;
