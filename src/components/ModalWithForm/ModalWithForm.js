import "./ModalWithForm.css";

/**
 *
 * @param {string} title - Title of the form modal.
 * @param {string} buttonLabel - Name of the main button, which calls onSubmit.
 * @param {array} inputs - Value-key pair of the label and type of the input e.g [{email: text, password: password}]
 * @param {callback} onSubmit - Callback passed as prop to handle form submitting
 * @returns {*}
 */

function ModalWithForm({ title, buttonLabel, inputs, onSubmit }) {
  return (
    <section className="modal">
      <div className="modal__backdrop"></div>
      <div className="modal__close"></div>
      <section className="modal__content">
        <form className="modal-form" onSubmit={onSubmit}>
          <h3 className="modal-form__title">{title}</h3>
          <section className="modal-form__inputs">
            {inputs &&
              inputs.map((input) => {
                return (
                  <div className="modal-form__inputset">
                    <label htmlFor={input.name} className="modal-form__label">
                      Correo electrónico
                    </label>
                    <input
                      name={input.name}
                      placeholder={input.placeholder}
                      type={input.type}
                      required={input.required}
                      className="modal-form__input"
                    />
                  </div>
                );
              })}
          </section>
          <button className="button modal__button modal__button_status_inactive">
            {buttonLabel}
          </button>
          <h4 className="modal-form__text">
            o{" "}
            <a href="" className="modal-form__link">
              inscribirse
            </a>
          </h4>
        </form>
      </section>
    </section>
  );
}

export default ModalWithForm;
