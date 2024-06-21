import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import "./SignInModalForm.css";
import api from "../../utils/api";
import ModalWithMessage from "../ModalWithMessage/ModalWithMessage";
import * as yup from "yup";

function SignInModalForm({ onClose, onSignIn }) {
  const [signinData, setSigninData] = useState({ email: null, password: null });
  const [signupData, setSignupData] = useState({
    email: null,
    password: null,
    username: null,
  });
  /**Contains an object of one or more errors with the format {inputError: errorMessage}
   *e.g. {emailError: "This email is invalid", passwordError: "Please add a password"}
   */
  const [formErrors, setFormErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);
  const [isSignInOpen, setIsSignInOpen] = useState(true);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isSignUpSuccess, setIsSignUpSuccess] = useState(false);

  useEffect(() => {
    Object.keys(formErrors).length > 0 &&
      setIsFormValid(
        Object.values(formErrors).every((formError) => formError === null)
      );
  }, [formErrors]);

  const signInSchema = yup.object({
    email: yup
      .string()
      .email("Dirección de correo electrónico no válida")
      .required("Debe ingresar un correo electrónico válido"),
    password: yup.string().required("Debe ingresar un password"),
  });

  const signUpSchema = yup.object({
    email: yup
      .string()
      .email("Dirección de correo electrónico no válida")
      .required("Debe ingresar un correo electrónico válido"),
    password: yup.string().required("Debe ingresar un password"),
    username: yup.string().required("Debe ingresar un nombre de usuario"),
  });

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

  async function handleSignIn() {
    try {
      const response = await api.signin(signinData.email, signinData.password);
      const token = response.token;
      token && localStorage.setItem("token", token);
      onSignIn();
    } catch (err) {
      setSubmitError(err.message);
    }
  }

  async function handleSignUp() {
    try {
      await api.signup(
        signupData.email,
        signupData.password,
        signupData.username
      );
      setIsSignUpOpen(false);
      setIsSignUpSuccess(true);
    } catch (err) {
      setSubmitError(err.message);
    }
  }

  function handleClose() {
    onClose();
  }

  async function isInputValid(input, schema) {
    try {
      await schema.validateAt(input.name, {
        [input.name]: input.value,
      });
      setFormErrors({
        ...formErrors,
        [`${input.name}Error`]: null,
      });
      return true;
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setFormErrors({
          ...formErrors,
          [`${input.name}Error`]: error.message,
        });
        return false;
      }
    }
  }

  async function handleChangeSignin(input) {
    setSubmitError("");
    if (await isInputValid(input, signInSchema)) {
      setSigninData({ ...signinData, [input.name]: input.value });
    }
  }

  async function handleChangeSignup(input) {
    setSubmitError("");
    if (await isInputValid(input, signUpSchema)) {
      setSignupData({ ...signupData, [input.name]: input.value });
    }
  }

  function handleSignInLinkClick(evt) {
    evt.preventDefault();
    setIsSignInOpen(true);
    setIsSignUpOpen(false);
    setSubmitError("");
  }

  function handleSignUpLinkClick(evt) {
    evt.preventDefault();
    setIsSignInOpen(false);
    setIsSignUpOpen(true);
    setSubmitError("");
  }

  return (
    <>
      {isSignInOpen && (
        <ModalWithForm
          title="Iniciar sesión"
          buttonLabel="Iniciar sesión"
          inputs={signInInputs}
          errors={formErrors}
          submitError={submitError}
          isFormValid={isFormValid}
          onSubmit={handleSignIn}
          onClose={handleClose}
          onChange={handleChangeSignin}
        >
          <span className="signin__text">
            o{" "}
            <button
              onClick={handleSignUpLinkClick}
              className="link-button  signin__link-button"
            >
              inscribirse
            </button>
          </span>
        </ModalWithForm>
      )}
      {isSignUpOpen && (
        <ModalWithForm
          title="Inscribirse"
          buttonLabel="Inscribirse"
          inputs={signUpInputs}
          errors={formErrors}
          submitError={submitError}
          isFormValid={isFormValid}
          onSubmit={handleSignUp}
          onClose={handleClose}
          onChange={handleChangeSignup}
        >
          <span className="signin__text">
            o{" "}
            <button
              onClick={handleSignInLinkClick}
              className="link-button signin__link-button"
            >
              iniciar sesión
            </button>
          </span>
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
