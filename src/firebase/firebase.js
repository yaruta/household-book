import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { API_KEY } from "../util/token";

// Web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "household-book.firebaseapp.com",
  projectId: "household-book",
  storageBucket: "household-book.firebasestorage.app",
  messagingSenderId: "455525612331",
  appId: "1:455525612331:web:acf094c23b0b766fa1a36e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
