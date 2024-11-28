export const validateFormData = (formData) => {
  const errors = {};
  if (!formData.nombre.trim()) errors.nombre = "El nombre es obligatorio.";
  if (!formData.apellido.trim()) errors.apellido = "El apellido es obligatorio.";
  if (!formData.cedula.trim() || isNaN(formData.cedula))
    errors.cedula = "La cédula debe ser un número válido.";
  if (!formData.correo.trim() || !/\S+@\S+\.\S+/.test(formData.correo))
    errors.correo = "El correo no es válido.";
  if (!formData.contraseña.trim() || formData.contraseña.length < 6)
    errors.contraseña = "La contraseña debe tener al menos 6 caracteres.";
  return errors;
};
