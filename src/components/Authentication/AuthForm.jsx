import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../firebase/auth";
import { useState } from "react";
import Button from "../UI/Button";
import { Form } from "react-router-dom";
import FormInput from "./FormInput";
import { isValidInput } from "../../util/validating";

function AuthForm({ isLogin }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    const isValid = isValidInput(value, name);
    setErrorMessage(false);
    if (!isValid) {
      setIsError((prevState) => {
        return { ...prevState, [name]: true };
      });
    } else {
      setIsError((prevState) => {
        return { ...prevState, [name]: false };
      });
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target.form);
    const data = Object.fromEntries(formData);
    console.log(data);

    if (!isSubmitting) {
      setIsSubmitting(true);

      try {
        if (isLogin) {
          await doSignInWithEmailAndPassword(data.email, data.password);
        } else if (!isLogin) {
          await doCreateUserWithEmailAndPassword(data.email, data.password);
        }
        setIsSubmitting(false);
      } catch (err) {
        if (err.code === "auth/invalid-credential") {
          setErrorMessage(
            "The E-Mail and password for the login do not match."
          );
        } else if (err.code === "auth/missing-email") {
          setErrorMessage(
            "This E-Mail is not registered. If you are a new user please sign up."
          );
        } else {
          setErrorMessage(err.code);
        }
        setIsSubmitting(false);
        return;
      }
    }
  }

  return (
    <>
      {errorMessage && <p className="text-red-500 mb-8">{errorMessage}</p>}
      <Form>
        <div className="flex justify-between items-center gap-8">
          <FormInput
            label="Email"
            type="email"
            id="emailLogin"
            name="email"
            onChange={handleChange}
            errorMessage="Please enter a valid email."
            isError={isError.email}
            required
          />
          <FormInput
            label="Password"
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            errorMessage="The password must be at least 8 characters long and contain one number and one special character."
            isError={isError.password}
            required
          />
        </div>
        <Button onClick={handleSubmit}>{isLogin ? "Login" : "Sign up"}</Button>
      </Form>
    </>
  );
}

export default AuthForm;
