import author from "../../images/author.jpg";
import "./About.css";

function About() {
  return (
    <section className="about-author page__about-author">
      <section className="about-author__photo-container">
        <div className="about-author__photo-mask">
          <img className="about-author__photo" alt="author" src={author}></img>
        </div>
      </section>
      <section className="about-author__info">
        <h2 className="about-author__title">Acerca del autor</h2>
        <section className="about-author__description">
          <p className="about-author__paragraph">
            Me llamo José Espinoza, actualmente soy líder de tecnología y estoy
            actualizando mis conocimientos técnicos. He trabajado con distintas
            tecnologías como JavaScript, React y NodeJS utilizando programación
            orientada a objetos.
          </p>
          <p className="about-author__paragraph">
            Como líder de tecnología necesito mantenerme actualizado, y el
            bootcamp de tripleten ha sido clave para mi desarrollo profesional,
            ya que me ha brindado una actualización rápida y eficaz.
          </p>
        </section>
      </section>
    </section>
  );
}

export default About;
