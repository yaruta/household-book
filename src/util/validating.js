/**
 * Validates user input based on the specified type.
 * @param {string} value - The input value to validate.
 * @param {string} type - The type of input to validate ('email' or 'password').
 * @returns {boolean} True if the input is valid, otherwise false.
*/
export function isValidInput(value, type) {
  // Regular expression for validating email format
  const emailReg = RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/);
  // Regular expression for validating password (at least 8 characters, one letter, one number, one special character)
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

/**
 * Validates item input based on the specified type.
 * @param {string|number} value - The input value to validate.
 * @param {string} type - The type of input to validate ('title' or 'amount').
 * @returns {boolean} True if the input is valid, otherwise false.
*/
export function isValidItemInput(value, type) {
  let isValid;
  if (type === "title") {
    isValid = value.trim() !== "";
  } else if (type === "amount") {
    isValid = !isNaN(value);
  }

  return isValid;
}
