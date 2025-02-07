/**
 * AuthForm component.
 * This component handles user authentication (login and sign-up) using Firebase.
 * It validates user input, manages authentication state, and dispatches user data to the Redux store.
 * 
 * @module AuthForm
 * @param {Object} props - The component props.
 * @param {boolean} props.isLogin - Determines whether the form is for login or sign-up.
 * @returns {JSX.Element} The authentication form component.
*/

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
  //States to control the process of authentication with firebase functions
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  //States for form values and validation errors
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

  // Mutation hook for creating user data in Firebase after successful registration
  const { mutate, isError: isMutationError } = useMutation({
    mutationFn: createUserData,
  });

  /**
   * Handles input changes, validates the input, and updates the state.
   * @param {Object} event - The event object.
   */
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

  /**
   * Handles form submission for login or sign-up.
   * @param {Object} event - The event object.
   */
  async function handleSubmit(event) {
    event.preventDefault();

    if (!isSubmitting) {
      setIsSubmitting(true);

      try {
        if (isLogin) {
          // Login existing user
          await doSignInWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
          const id = await getUserId({ email: formValues.email });
          dispatch(userActions.setUserId(id));
        }
        else if (!isLogin) {
          // Register new user
          await doCreateUserWithEmailAndPassword(
            formValues.email,
            formValues.password
          );
          // Create user id
          const id = Math.floor(Math.random() * 1000000);
          mutate({ email: formValues.email, id: id });
          dispatch(userActions.setUserId(id));
        }

        setIsSubmitting(false);
        navigate("/");
      } catch (err) {
        // Handle authentication errors
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
