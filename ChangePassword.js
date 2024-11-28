import React from "react";
import ChangePasswordForm from "./components/ChangePasswordForm";

const ChangePassword = () => {
  return (
    <div style={{ maxWidth: "500px", margin: "auto", padding: "20px" }}>
      <h2>Cambiar Contraseña</h2>
      <ChangePasswordForm />
    </div>
  );
};

export default ChangePassword;
