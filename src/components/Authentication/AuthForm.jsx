import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { isValidInput } from "../../util/validating";
import { createUserData, getUserId } from "../../util/http";
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

  // useMutation-hook for creating a user data in firebase after successful registration
  const { mutate, isError: isMutationError } = useMutation({
    mutationFn: createUserData,
  });

  // function for onChange event on the input fields to get the value and validate the data.
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

  // function for handling submit event on the AuthForm
  async function handleSubmit(event) {
    event.preventDefault();

    if (!isSubmitting) {
      setIsSubmitting(true);

      try {
        //checking, if the mode in the path is 'login', then do login
        if (isLogin) {
          await doSignInWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
          const id = await getUserId({ email: formValues.email });
          dispatch(userActions.setUserId(id));
        }
        // otherwise sign up
        else if (!isLogin) {
          await doCreateUserWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
          //creating id for the user
          const id = Math.floor(Math.random() * 1000000);
          mutate({ email: formValues.email, id: id });
          dispatch(userActions.setUserId(id));
        }

        setIsSubmitting(false);
        navigate("/");
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
      {isMutationError && (
        <p>Didn't manage to create user. Please try again later.</p>
      )}
      <form id="auth-form" className="w-full">
        <div className="flex justify-between items-start gap-8 mb-8 w-full max-lg:flex-col">
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
