import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";
import newsApi from "./utils/newsApi";
import { useState } from "react";
import SignInModalForm from "./components/SignInModalForm/SignInModalForm";
import SavedNews from "./components/SavedNews/SavedNews";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import AuthContext from "./contexts/AuthContext";
import api from "./utils/api";
import { Route } from "react-router-dom";
import { Switch, useLocation } from "react-router-dom/cjs/react-router-dom.min";

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

  const location = useLocation();

  async function handleNewsSearch(searchTerm) {
    setCurrentSearchTerm(searchTerm);
    setIsNewsListShown(true);
    setIsSearching(true);
    try {
      const result = await newsApi.getNews(searchTerm);
      setCurrentPage(1);
      setTotalPages(
        Math.ceil(result.totalResults / process.env.REACT_APP_NEWS_PAGE_SIZE)
      );
      setIsSearching(false);
      const normalizedArticles =
        result.articles.length <= 0
          ? []
          : result.articles.map((article) => {
              return {
                keyword: searchTerm,
                title: article.title,
                description: article.description,
                publishDate: article.publishedAt,
                source: article.source.name,
                url: article.url,
                photo: article.urlToImage,
              };
            });
      result.articles && setArticles(normalizedArticles);
    } catch (err) {
      console.error(err);
    }
  }

  async function handleViewMore() {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    setIsSearchingMore(true);
    try {
      const result = await newsApi.getNews(currentSearchTerm, nextPage);
      const normalizedArticles =
        result.articles.length <= 0
          ? []
          : result.articles.map((article) => {
              return {
                keyword: currentSearchTerm,
                title: article.title,
                description: article.description,
                publishDate: article.publishedAt,
                source: article.source.name,
                url: article.url,
                photo: article.urlToImage,
              };
            });
      setIsSearchingMore(false);
      setArticles((prevArticles) => [...prevArticles, ...normalizedArticles]);
    } catch (err) {
      console.log(err);
    }
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

  async function handleArticleRemove(article) {
    try {
      const response = api.deleteArticle(article._id);
      setSavedArticles((prevSavedArticles) => {
        return prevSavedArticles.filter(
          (savedArticle) => savedArticle._id !== article._id
        );
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="page">
      <AuthContext.Provider value={isLoggedIn}>
        <Header
          onSearch={handleNewsSearch}
          onSignInClick={handleSignInClick}
          onSignOutClick={handleSignOutClick}
          isLoggedIn={isLoggedIn}
          theme={location.pathname === "/saved-news" && "light"}
        ></Header>
        <Switch>
          <Route exact path="/">
            <>
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
            </>
          </Route>
          <ProtectedRoute path="/saved-news" isLoggedIn={isLoggedIn}>
            <SavedNews
              savedCards={savedArticles}
              onCardRemove={handleArticleRemove}
            ></SavedNews>
          </ProtectedRoute>
        </Switch>
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
