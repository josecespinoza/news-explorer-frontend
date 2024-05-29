import { useEffect, useRef, useState } from "react";
import "./ModalWithForm.css";
import IconButton from "../IconButton/IconButton";
import closeButton from "../../images/close.svg";

/**
 *
 * @param {string} title - Title of the form modal.
 * @param {string} buttonLabel - Name of the main button, which calls onSubmit.
 * @param {array} inputs - Value-key pair of the label and type of the input e.g [{email: text, password: password}]
 * @param {callback} onSubmit - Callback passed as prop to handle form submitting
 * @returns {ModalWithForm}
 */

function ModalWithForm({
  children,
  title,
  buttonLabel,
  inputs,
  isFormValid,
  onChange,
  onSubmit,
  onClose,
}) {
  const [isOpen, setIsOpen] = useState(true);

  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  function handleClose(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    setIsOpen(false);
    onClose();
  }

  function handleChange(evt) {
    onChange(evt.target);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    onSubmit();
  }

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  return (
    isOpen && (
      <section
        ref={modalRef}
        tabIndex="1"
        onKeyUp={handleClose}
        className="modal"
      >
        <div className="modal__backdrop" onClick={handleClose}></div>
        <div className="modal__close">
          <div className="modal__close-container">
            <IconButton
              onClick={handleClose}
              iconPath={closeButton}
            ></IconButton>
          </div>
        </div>
        <section className="modal__content">
          <h3 className="modal__title">{title}</h3>
          <form className="modal-form" onSubmit={handleSubmit}>
            <section className="modal-form__inputs">
              {inputs &&
                inputs.map((input, index) => {
                  return (
                    <div key={index} className="modal-form__inputset">
                      <label htmlFor={input.name} className="modal-form__label">
                        {input.label}
                      </label>
                      <input
                        className="modal-form__input"
                        name={input.name}
                        placeholder={input.placeholder}
                        type={input.type}
                        required={input.required}
                        onChange={handleChange}
                      />
                    </div>
                  );
                })}
            </section>
            <button
              className={`button modal-form__button modal-form__button_status_${
                isFormValid ? "active" : "inactive"
              }`}
            >
              {buttonLabel}
            </button>
            {children}
          </form>
        </section>
      </section>
    )
  );
}

export default ModalWithForm;
