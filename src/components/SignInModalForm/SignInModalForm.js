import { useEffect, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";

function SignInModalForm({ isOpen, onClose }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    handleValidation();
  }, []);

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

  function handleSignIn() {}

  function handleClose() {
    onClose();
  }

  function handleValidation() {
    //TODO Form validation
    const isValid = email !== "" && password !== "";
    setIsFormValid(isValid);
  }

  function handleChange(input) {
    input.name === "email" && setEmail(input.value);
    input.name === "password" && setPassword(input.value);
    handleValidation();
  }

  return (
    isOpen && (
      <ModalWithForm
        title="Iniciar sesión"
        buttonLabel="Iniciar sesión"
        inputs={signInInputs}
        isFormValid={isFormValid}
        onSubmit={handleSignIn}
        onClose={handleClose}
        onChange={handleChange}
      ></ModalWithForm>
    )
  );
}

export default SignInModalForm;
