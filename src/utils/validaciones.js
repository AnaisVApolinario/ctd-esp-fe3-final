export const validateText = (value) => {
  return value.trim().length >5 ? '' : 'Debe ingresar texto mayor a 5 digitos';
};
export const validateEmail = (value) => {
  const emailPattern = /^[a-zA-Z0-9_+&*-]+(?:\.[a-zA-Z0-9_+&*-]+)*@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,7}$/;
  return emailPattern.test(value.trim()) ? '' : 'Debe ingresar un correo electrónico válido.';
};