import { Link } from "react-router-dom";
import githubLogo from "../images/github.svg";
import facebookLogo from "../images/facebook.svg";

function Footer() {
  return (
    <footer className="footer">
      <h4 className="footer__copyright">
        &copy; 2024 Supersite, Powered by News API
      </h4>
      <section className="footer__links">
        <Link className="footer__link" to="inicio">
          Inicio
        </Link>
        <Link className="footer__link" to="inicio">
          Practicum
        </Link>
        <a
          className="footer__link"
          href="https://github.com/josecespinoza/news-explorer-frontend"
        >
          <img
            alt="github"
            className="footer__link-icon"
            src={githubLogo}
          ></img>
        </a>
        <a
          className="footer__link"
          href="https://www.facebook.com/jose.carlos.espinoza"
        >
          <img
            alt="github"
            className="footer__link-icon"
            src={facebookLogo}
          ></img>
        </a>
      </section>
    </footer>
  );
}

export default Footer;
