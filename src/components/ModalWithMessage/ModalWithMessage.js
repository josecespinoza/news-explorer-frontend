import { useState } from "react";
import "./ModalWithMessage.css";

function ModalWithMessage({ message, onClose }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClose() {
    setIsOpen(false);
    onClose();
  }

  return (
    isOpen && (
      <section className="modal">
        <div className="modal__backdrop" onClick={handleClose}></div>
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
