import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import newsApi from "./utils/newsApi";
import { useState } from "react";
import SignInModalForm from "./components/SignInModalForm/SignInModalForm";
import AuthContext from "./contexts/AuthContext";
import api from "./utils/api";

function App() {
  const [articles, setArticles] = useState([]);
  const [savedArticles, setSavedArticles] = useState([]);
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
      result.articles && setArticles(result.articles);
    });
  }

  function handleViewMore() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setIsSearchingMore(true);
    newsApi.getNews(currentSearchTerm, nextPage).then((result) => {
      setIsSearchingMore(false);
      setArticles((prevArticles) => [...prevArticles, ...result.articles]);
    });
  }

  function handleSignInClick() {
    setIsSignInOpen(true);
  }

  function handleSignOutClick() {
    setIsLoggedIn(false);
    localStorage.removeItem("token");
    setSavedArticles([]);
  }

  function handleSignClose() {
    setIsSignInOpen(false);
  }

  async function handleSignIn() {
    setIsSignInOpen(false);
    setIsLoggedIn(true);
    const articles = await api.getArticles();
    setSavedArticles(articles);
  }

  function handleArticleBookmark(article, isBookmark) {
    setSavedArticles((prevSavedArticles) => {
      return isBookmark
        ? [...prevSavedArticles, article]
        : prevSavedArticles.filter(
            (savedArticle) => savedArticle._id !== article._id
          );
    });
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
          cards={articles}
          savedCards={savedArticles}
          onCardBookmark={handleArticleBookmark}
          isNewsListShown={isNewsListShown}
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
