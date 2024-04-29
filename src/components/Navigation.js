import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigator">
      <section className="navigator__options">
        <h1 className="navigator__title">NewsExplorer</h1>
        <Link className="navigator__link" to="/inicio">
          Inicio
        </Link>
        <button className="button">Iniciar sesión</button>
      </section>
      <div className="navigator__divider"></div>
    </nav>
  );
}

export default Navigation;
