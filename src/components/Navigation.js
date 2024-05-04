import { Link } from "react-router-dom";
import menu from "../images/menu.svg";

function Navigation() {
  return (
    <>
      <nav className="navigator">
        <section className="navigator__container">
          <h2 className="navigator__title">NewsExplorer</h2>
          <button className="button navigator__menu-button"></button>
          <section className="navigator__menu">
            <section className="navigator__links">
              <Link className="navigator__link" to="/inicio">
                Inicio
              </Link>
            </section>
            <button className="button">Iniciar sesión</button>
          </section>
        </section>
        <div className="navigator__divider"></div>
      </nav>
    </>
  );
}

export default Navigation;
