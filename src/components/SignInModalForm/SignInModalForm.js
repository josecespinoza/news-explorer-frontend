import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignInModalForm.css";
import api from "../../utils/api";
import ModalWithMessage from "../ModalWithMessage/ModalWithMessage";

function SignInModalForm({ onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  useEffect(() => {
    handleValidation();
  }, [email, password, username]);

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

  async function handleSignUp() {
    try {
      await api.signup(email, password, username);
      setIsSignUpOpen(false);
      setIsSignUpSuccess(true);
    } catch (error) {
      console.log(error);
    }
  }

  function handleClose() {
    /* setIsSignInOpen(true);
    setIsSignUpOpen(false);
    setIsSignUpSuccess(false); */
    onClose();
  }

  function handleValidation() {
    //TODO Form validation
    setIsFormValid(true);
  }

  function handleChange(input) {
    input.name === "email" && setEmail(input.value);
    input.name === "password" && setPassword(input.value);
    input.name === "username" && setUsername(input.value);
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
      {isSignInOpen && (
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
      {isSignUpOpen && (
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
      {isSignUpSuccess && (
        <ModalWithMessage
          message="¡El registro se ha completado con éxito!"
          onClose={handleClose}
        ></ModalWithMessage>
      )}
    </>
  );
}

export default SignInModalForm;
