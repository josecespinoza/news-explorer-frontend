import { Link } from "react-router-dom";
import signOutIcon from "../../images/signout.svg";
import signOutIconLight from "../../images/signoutight.svg";
import "./Navigation.css";
import { useContext, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { capitalize } from "../../utils/utils";

function Navigation({ onSignInClick, onSignOutClick, isLoggedIn, theme = "" }) {
  const userInfo = useContext(UserContext);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  function handleSignInClick() {
    onSignInClick();
  }

  function handleSignOutClick() {
    onSignOutClick();
  }

  function handleMenuMobileClick() {
    setIsMenuMobileOpen(!isMenuMobileOpen);
  }

  return (
    <>
      <nav className="navigator">
        <section className="navigator__container">
          <h2 className="navigator__title">NewsExplorer</h2>
          <button
            className="button navigator__menu-button"
            onClick={handleMenuMobileClick}
          ></button>
          <section
            className={`navigator__menu${
              !isMenuMobileOpen ? "" : " navigator__menu_status_closed"
            }`}
          >
            <section className="navigator__menu-container">
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
                    theme ? ` navigator__button_theme_${theme}` : ""
                  }`}
                  onClick={handleSignOutClick}
                >
                  <div className="button__content">
                    <span className="button__text">
                      {userInfo?.username && capitalize(userInfo.username)}
                    </span>
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
        </section>
        <div className="navigator__divider"></div>
      </nav>
    </>
  );
}

export default Navigation;
