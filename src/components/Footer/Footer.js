import { Link } from "react-router-dom";
import githubLogo from "../../images/github.svg";
import facebookLogo from "../../images/facebook.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <section className="footer__container">
        <h4 className="footer__copyright">
          &copy; 2024 Supersite, Powered by News API
        </h4>
        <section className="footer__options">
          <section className="footer__links">
            <Link className="footer__link" to="inicio">
              Inicio
            </Link>
            <a
              className="footer__link"
              rel="noreferrer"
              target="_blank"
              href="https://tripleten.com/"
            >
              Practicum
            </a>
          </section>
          <section className="footer__link-icons">
            <a
              className="footer__link-icon"
              rel="noreferrer"
              target="_blank"
              href="https://github.com/josecespinoza/news-explorer-frontend"
            >
              <img className="footer__icon" alt="github" src={githubLogo}></img>
            </a>
            <a
              className="footer__link-icon"
              rel="noreferrer"
              target="_blank"
              href="https://www.facebook.com/jose.carlos.espinoza"
            >
              <img
                className="footer__icon"
                alt="github"
                src={facebookLogo}
              ></img>
            </a>
          </section>
        </section>
      </section>
    </footer>
  );
}

export default Footer;
