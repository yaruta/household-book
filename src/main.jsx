import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App.jsx";
import store from "./store/index.js";

/**
 * Renders the main React application inside the root HTML element.
 * * Wraps the application with the Redux Provider for global state management.
 */
createRoot(document.getElementById("root")).render(
  <Provider store={store}> {/* Provides Redux store to the application*/}
    <App /> {/* Main application component*/}
  </Provider>
);
