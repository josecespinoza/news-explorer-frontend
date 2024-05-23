import { Link } from "react-router-dom";
import signOutIcon from "../../images/signout.svg";
import signOutIconLight from "../../images/signoutight.svg";
import "./Navigation.css";

function Navigation({ onSignInClick, onSignOutClick, isLoggedIn, theme = "" }) {
  function handleSignInClick() {
    onSignInClick();
  }

  function handleSignOutClick() {
    onSignOutClick();
  }

  return (
    <>
      <nav className="navigator">
        <section className="navigator__container">
          <h2 className="navigator__title">NewsExplorer</h2>
          <button className="button navigator__menu-button"></button>
          <section className="navigator__menu">
            <section className="navigator__links">
              <Link className="navigator__link" to="/">
                Inicio
              </Link>
              {isLoggedIn && (
                <Link className="navigator__link" to="/saved-news">
                  Artículos Guardados
                </Link>
              )}
            </section>
            {!isLoggedIn && (
              <button
                className="button navigator__button"
                onClick={handleSignInClick}
              >
                Iniciar sesión
              </button>
            )}
            {isLoggedIn && (
              <button
                className={`button navigator__button navigator__button_status_loggedin${
                  theme && ` navigator__button_theme_${theme}`
                }`}
                onClick={handleSignOutClick}
              >
                <div className="button__content">
                  <span className="button__text">Elise</span>
                  <img
                    className="button__icon"
                    alt="sign out logo"
                    src={theme === "light" ? signOutIconLight : signOutIcon}
                  ></img>
                </div>
              </button>
            )}
          </section>
        </section>
        <div className="navigator__divider"></div>
      </nav>
    </>
  );
}

export default Navigation;
