import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebase/firebase";
import { createContext, useContext, useEffect, useState } from "react";

/**
 * Creates an authentication context to manage user authentication state.
 */
const AuthContext = createContext();

/**
 * Custom hook to access the authentication context.
 * @returns {Object} The authentication context value.
 */
export function useAuth() {
  return useContext(AuthContext);
}

/**
 * Provides authentication state to the application.
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The child components that need authentication context.
 * @returns {JSX.Element} The authentication provider component.
 */
export default function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null); // Stores the currently authenticated user
  const [userLoggedIn, setUserLoggedIn] = useState(false); // Tracks if a user is logged
  const [loading, setLoading] = useState(true); // Indicates if authentication state is still loading

  useEffect(() => {
    /**
     * Listens for authentication state changes and updates the user state accordingly.
     * @returns {Function} Unsubscribe function to clean up the listener.
     */
    const unsubscribe = onAuthStateChanged(auth, initializeUser);
    return unsubscribe;
  }, []);

  /**
   * Initializes the user state based on Firebase authentication.
   * @param {Object|null} user - The authenticated user object from Firebase, or null if logged out.
   */
  async function initializeUser(user) {
    if (user) {
      setCurrentUser({ ...user });
      setUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setUserLoggedIn(false);
    }
    setLoading(false);
  }

  /**
   * Authentication context value containing user data and authentication state.
   */
  const value = {
    currentUser,
    userLoggedIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
