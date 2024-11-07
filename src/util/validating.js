export function isValidInput(value, type) {
  const emailReg = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  const passwordReg = RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
  );

  let isValid;
  if (type === "email") {
    isValid = emailReg.test(value);
  } else if (type === "password") {
    isValid = passwordReg.test(value);
  }

  return isValid;
}
