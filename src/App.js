import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer";
import About from "./components/About";

import cards from "./data/cards.json";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main cards={cards}></Main>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
