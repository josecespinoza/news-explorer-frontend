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
  errors,
  submitError,
  isFormValid,
  onChange,
  onSubmit,
  onClose,
}) {
  const [isOpen, setIsOpen] = useState(true);
  const [isToogling, setIsToogling] = useState(true);

  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  function handleAnimationEnd(evt) {
    if (evt.animationName === "fadeOut") {
      setIsOpen(false);
      onClose(evt);
    }
  }

  function toogleModal(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    setIsToogling(false);
  }

  function handleChange(evt) {
    onChange(evt.target);
  }

  function handleSubmit(evt) {
    evt.preventDefault();
    if (!isFormValid) {
      return;
    }
    onSubmit();
  }

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" || evt.type.toLowerCase() === "click"
    );
  }

  function calculateError(inputName) {
    if (!errors) {
      return;
    }

    return errors[`${inputName}Error`] ? errors[`${inputName}Error`] : "";
  }

  return (
    isOpen && (
      <section
        ref={modalRef}
        tabIndex="1"
        onKeyUp={toogleModal}
        className={`modal ${
          isToogling ? "modal_state_open" : "modal_state_close"
        }`}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="modal__backdrop" onClick={toogleModal}></div>
        <div className="modal__close" onClick={toogleModal}>
          <div className="modal__close-container">
            <IconButton
              onClick={toogleModal}
              iconPath={closeButton}
            ></IconButton>
          </div>
        </div>
        <section
          className={`modal__content ${
            isToogling
              ? "modal__content_state_open"
              : "modal__content_state_close"
          }`}
        >
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
                      <p className="modal-form__error">
                        {calculateError(input.name)}
                      </p>
                    </div>
                  );
                })}
            </section>
            <p className="modal-form__error modal-form__error_position_center">
              {submitError}
            </p>
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
