/**
 * Firebase authentication utility functions.
 * Provides functions for user authentication, including sign-up, sign-in, and sign-out.
*/

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";

/**
 * Creates a new user account using email and password authentication.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise} A promise resolving to the user credential object.
 */
export const doCreateUserWithEmailAndPassword = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

/**
 * Signs in a user using email and password authentication.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Promise} A promise resolving to the user credential object.
 */
export const doSignInWithEmailAndPassword = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

/**
 * Signs out the currently authenticated user.
 * @returns {Promise} A promise resolving when the user is signed out.
 */
export const doSignOut = () => {
  return auth.signOut();
};
