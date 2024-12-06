import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { validateEmail, validateText } from "../utils/validaciones";

const Form = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
  });
  const [error, setError] = useState({
    nombre: "",
    email: "",
  });
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevDentist) => ({
      ...prevDentist,
      [name]: value,
    }));

    if (name === "nombre") {
      setError((prev) => ({
        ...prev,
        nombre: validateText(value),
      }));
    }

    if (name === "email") {
      setError((prev) => ({
        ...prev,
        email: validateEmail(value),
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const messageName = validateText(formData.nombre);
    const messageEmail = validateEmail(formData.email);
    setError({
      nombre: messageName || "",
      email: messageEmail || "",
    });

    if (!messageName && !messageEmail) {
      setSuccess(true);
      console.log(
        `Datos del dentista: Nombre: ${formData.nombre}, Email: ${formData.email}`
      );
    }
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="input__container">
          <Input
            id="nombre"
            label="Nombre"
            value={formData.nombre}
            placeholder="Nombre"
            onChange={handleChange}
          >
            {error.nombre && (
              <span className="form__error">{error.nombre}</span>
            )}
          </Input>
          <Input
            id="email"
            label="Email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          >
            {error.email && <span className="form__error">{error.email}</span>}
          </Input>
        </div>
        {success && (
          <span className="form__success">
            Gracias {formData.nombre}, te contactaremos cuando antes vía mail
          </span>
        )}
        <Button text="Enviar" />
      </form>
    </div>
  );
};

export default Form;
