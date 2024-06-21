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
            Este bloque describe al autor del proyecto. Aquí debe indicar tu
            nombre, a qué te dedicas y qué tecnologías de desarrollo conoces.
          </p>
          <p className="about-author__paragraph">
            También puedes hablar de tu experiencia con Practicum, de lo que
            aprendiste allí y de cómo puedes ayudar a los clientes potenciales.
          </p>
        </section>
      </section>
    </section>
  );
}

export default About;
