/**
 * Firebase configuration and initialization.
 * This module sets up Firebase for authentication and storage.
*/

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY } from "../util/token";

import { getStorage } from "firebase/storage";

/**
 * Firebase configuration object containing API credentials and project details.
 */
const firebaseConfig = {
  apiKey: API_KEY, // API key sotred in a separate utility file for security
  authDomain: "household-book.firebaseapp.com",
  projectId: "household-book",
  storageBucket: "household-book.firebasestorage.app",
  messagingSenderId: "455525612331",
  appId: "1:455525612331:web:acf094c23b0b766fa1a36e",
};

/**
 * Initializes Firebase with the given configuration.
 */
const app = initializeApp(firebaseConfig);
/**
 * Firebase authentication instance for handling user authentication.
*/
const auth = getAuth(app);
/**
 * Firebase storage instance for handling file uploads and downloads.
 */
const storage = getStorage(app);

export { app, auth, storage };
