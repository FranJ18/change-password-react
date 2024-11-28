import React from "react";
import Swal from "sweetalert2";
import FormInput from "./FormInput";
import useForm from "../hooks/useForm";
import { validateFormData } from "../utils/validationRules";

const ChangePasswordForm = () => {
  const initialState = {
    nombre: "",
    apellido: "",
    cedula: "",
    correo: "",
    contraseña: "",
  };

  const { formData, errors, handleChange, validate, resetForm } = useForm(
    initialState,
    validateFormData
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      Swal.fire({
        icon: "success",
        title: "Cambio de contraseña exitoso",
        text: "Los datos han sido actualizados correctamente.",
      });
      resetForm();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormInput
        id="nombre"
        label="Nombre"
        value={formData.nombre}
        onChange={handleChange}
        error={errors.nombre}
      />
      <FormInput
        id="apellido"
        label="Apellido"
        value={formData.apellido}
        onChange={handleChange}
        error={errors.apellido}
      />
      <FormInput
        id="cedula"
        label="Cédula"
        value={formData.cedula}
        onChange={handleChange}
        error={errors.cedula}
      />
      <FormInput
        id="correo"
        label="Correo"
        type="email"
        value={formData.correo}
        onChange={handleChange}
        error={errors.correo}
      />
      <FormInput
        id="contraseña"
        label="Contraseña"
        type="password"
        value={formData.contraseña}
        onChange={handleChange}
        error={errors.contraseña}
      />
      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#4CAF50",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Cambiar Contraseña
      </button>
    </form>
  );
};

export default ChangePasswordForm;
