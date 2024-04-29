import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigator">
      <h1 className="navigator__title">NewsExplorer</h1>
      <Link className="navigator__link" to="/inicio">
        Inicio
      </Link>
      <button className="navigator__button">Iniciar sesión</button>
      <div className="navigator__divider"></div>
    </nav>
  );
}

export default Navigation;
