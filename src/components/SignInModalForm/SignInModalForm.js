import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignInModalForm.css";

function SignInModalForm({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);

  useEffect(() => {
    handleValidation();
  }, [email, password]);

  const signInInputs = [
    {
      label: "Correo Electrónico",
      name: "email",
      type: "text",
      placeholder: "Introduce tu correo electrónico",
      required: true,
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      placeholder: "Introduce tu contraseña",
      required: true,
    },
  ];

  const signUpInputs = [
    {
      label: "Correo Electrónico",
      name: "email",
      type: "text",
      placeholder: "Introduce tu correo electrónico",
      required: true,
    },
    {
      label: "Contraseña",
      name: "password",
      type: "password",
      placeholder: "Introduce tu contraseña",
      required: true,
    },
    {
      label: "Nombre de usuario",
      name: "username",
      type: "text",
      placeholder: "Introduce tu nombre de usuario",
      required: true,
    },
  ];

  function handleSignIn() {}

  function handleSignUp() {}

  function handleClose() {
    onClose();
  }

  function handleValidation() {
    //TODO Form validation
    setIsFormValid(true);
  }

  function handleChange(input) {
    input.name === "email" && setEmail(input.value);
    input.name === "password" && setPassword(input.value);
  }

  function handleSignInLinkClick(evt) {
    evt.preventDefault();
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
  }
  function handleSignUpLinkClick(evt) {
    evt.preventDefault();
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
  }

  return (
    <>
      {isOpen && isSignInOpen && (
        <ModalWithForm
          title="Iniciar sesión"
          buttonLabel="Iniciar sesión"
          inputs={signInInputs}
          isFormValid={isFormValid}
          onSubmit={handleSignIn}
          onClose={handleClose}
          onChange={handleChange}
        >
          <h4 className="signin__text">
            o{" "}
            <a
              href="#"
              onClick={handleSignUpLinkClick}
              className="signin__link"
            >
              inscribirse
            </a>
          </h4>
        </ModalWithForm>
      )}
      {isOpen && isSignUpOpen && (
        <ModalWithForm
          title="Inscribirse"
          buttonLabel="Inscribirse"
          inputs={signUpInputs}
          isFormValid={isFormValid}
          onSubmit={handleSignUp}
          onClose={handleClose}
          onChange={handleChange}
        >
          <h4 className="signin__text">
            o{" "}
            <a
              href="#"
              onClick={handleSignInLinkClick}
              className="signin__link"
            >
              iniciar sesión
            </a>
          </h4>
        </ModalWithForm>
      )}
    </>
  );
}

export default SignInModalForm;
