import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import ColorThemeNav from "../components/Layout/ColorThemeSidebar/ColorThemeNav";
import { useSelector } from "react-redux";
import { useEffect } from "react";

function RootLayout() {
  const {sidebarIsVisible, theme} = useSelector((state) => state.ui);

  useEffect(() => {
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
      className="w-full h-lvh bg-gradient-to-b from-50% from-bg-main-color to-90% to-bg-secondary-color  flex justify-start"
    >
      {sidebarIsVisible && <Sidebar />}
      <main className="w-full">
        <Header />
        <Outlet />
      </main>
      <ColorThemeNav />
    </section>
  );
}

export default RootLayout;
