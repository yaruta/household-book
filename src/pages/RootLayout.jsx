/**
 * RootLayout component.
 * This component serves as the main layout for the application, including
 * the header, sidebar, theme management, and authentication redirection.
 * @module RootLayout
 * @returns {JSX.Element} The root layout component.
*/

import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import ColorThemeNav from "../components/Layout/ColorThemeSidebar/ColorThemeNav";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useAuth } from "../store/authContext";

function RootLayout() {
  const { userLoggedIn } = useAuth(); // Retrieves authentication state
  const { sidebarIsVisible, theme } = useSelector((state) => state.ui); // Retrieves UI state from Redux store
  const navigate = useNavigate(); // Enables navigation within the app

  useEffect(() => {
    // Redirects to the login page if the user is not logged in
    if (!userLoggedIn) {
      navigate("/auth?mode=login");
    }
  }, []);

  useEffect(() => {
    // Updates the document body class based on the selected theme
    document.body.classList.remove("dark", "light");
    if (theme === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.add("light");
    }
  }, [theme]);

  return (
    <section
      id="main"
      className="w-full h-full bg-gradient-to-b from-50% from-bg-main-color to-90% to-bg-secondary-color  flex justify-start"
    >
      {sidebarIsVisible && <Sidebar />}
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
      <ColorThemeNav /> {/* Renders theme selection navigation */}
    </section>
  );
}

export default RootLayout;
