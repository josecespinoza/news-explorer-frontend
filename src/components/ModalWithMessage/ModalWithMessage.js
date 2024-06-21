import { useEffect, useRef, useState } from "react";
import "./ModalWithMessage.css";

function ModalWithMessage({ message, onClose }) {
  const [isOpen, setIsOpen] = useState(true);
  const [isToogling, setIsToogling] = useState(true);

  const modalRef = useRef();

  useEffect(() => {
    modalRef.current.focus();
  }, []);

  function toogleModal(evt) {
    if (!isCloseEvent(evt)) {
      return;
    }
    setIsToogling(false);
  }

  function isCloseEvent(evt) {
    return (
      evt.key?.toLowerCase() === "escape" ||
      evt.key?.toLowerCase() === "enter" ||
      evt.type.toLowerCase() === "click"
    );
  }

  function handleAnimationEnd(evt) {
    if (evt.animationName === "fadeOut") {
      setIsOpen(false);
      onClose(evt);
    }
  }

  return (
    isOpen && (
      <section
        className={`modal ${
          isToogling ? "modal_state_open" : "modal_state_close"
        }`}
        ref={modalRef}
        tabIndex="1"
        onKeyUp={toogleModal}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="modal__backdrop" onClick={toogleModal}></div>
        <div className="modal__close"></div>
        <section className="modal__content">
          <section className="modal-message">
            <h3 className="modal-message__message">{message}</h3>
          </section>
        </section>
      </section>
    )
  );
}

export default ModalWithMessage;
