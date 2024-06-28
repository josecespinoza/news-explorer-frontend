import { Link } from "react-router-dom";
import signOutIcon from "../../images/signout.svg";
import signOutIconLight from "../../images/signoutlight.svg";
import "./Navigation.css";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { capitalize } from "../../utils/utils";
import menuButton from "../../images/menu.svg";
import menuButtonLight from "../../images/menulight.svg";
import closeButton from "../../images/close.svg";
import closeButtonLight from "../../images/closelight.svg";
import { useLocation } from "react-router-dom";

function Navigation({ onSignInClick, onSignOutClick, isLoggedIn, theme = "" }) {
  const location = useLocation();

  useEffect(() => {
    setIsMenuMobileOpen(false);
  }, [location]);

  const userInfo = useContext(UserContext);
  const [isMenuMobileOpen, setIsMenuMobileOpen] = useState(false);

  function handleSignInClick() {
    setIsMenuMobileOpen(false);
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
          <button
            className="button navigator__menu-button"
            onClick={handleMenuMobileClick}
          >
            <div className="button__content">
              {!isMenuMobileOpen && (
                <img
                  className="button__icon"
                  alt="menu icon"
                  src={theme === "light" ? menuButtonLight : menuButton}
                ></img>
              )}
              {isMenuMobileOpen && (
                <img
                  className="button__icon"
                  alt="close icon"
                  src={theme === "light" ? closeButtonLight : closeButton}
                ></img>
              )}
            </div>
          </button>
          <section
            className={`navigator__menu${
              !isMenuMobileOpen ? " navigator__menu_status_closed" : ""
            }${theme === "light" ? " navigator__menu_theme_light" : ""}`}
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
      </nav>
    </>
  );
}

export default Navigation;
