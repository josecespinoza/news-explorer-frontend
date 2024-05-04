import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  return (
    <div className="page">
      <Header></Header>
      <Main></Main>
      <About></About>
      <Footer></Footer>
    </div>
  );
}

export default App;
