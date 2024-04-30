import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigator">
      <section className="navigator__container">
        <h1 className="navigator__title">NewsExplorer</h1>
        <section className="navigator__options">
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
  );
}

export default Navigation;
