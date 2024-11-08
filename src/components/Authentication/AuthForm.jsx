import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidInput } from "../../util/validating";
import { createUserData } from "../../util/http";
import { useMutation } from "@tanstack/react-query";
import { useDispatch } from "react-redux";
import { userActions } from "../../store/user-slice";
import Button from "../UI/Button";
import FormInput from "./FormInput";

function AuthForm({ isLogin }) {
  //isSubmitting and errorMessage states to control the process of authentication with firebase functions
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //formValues and isError states for the form inputs check and submitting
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [isError, setIsError] = useState({
    email: false,
    password: false,
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    mutateAsync,
    isError: isMutationError,
    error,
  } = useMutation({
    mutationFn: createUserData,
    onSuccess: () => {
      console.log("Success");
    },
  });

  function handleChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    setFormValues((prevState) => {
      return { ...prevState, [name]: value };
    });

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

    if (!isSubmitting) {
      setIsSubmitting(true);

      try {
        if (isLogin) {
          await doSignInWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
        } else if (!isLogin) {
          await doCreateUserWithEmailAndPassword(
            formValues.email,
            formValues.password
          );

          const id = await mutateAsync(formValues.email);
          dispatch(userActions.setUserId(id));
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

      navigate("/");
    }
  }

  return (
    <>
      {errorMessage && <p className="text-red-500 mb-8">{errorMessage}</p>}
      <form id="auth-form">
        <div className="flex justify-start items-start gap-8 mb-8">
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
        <div className="flex justify-end">
          <Button onClick={handleSubmit} form="auth-form">
            {isLogin ? "Login" : "Sign up"}
          </Button>
        </div>
      </form>
    </>
  );
}

export default AuthForm;
