import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header/Header";
import Sidebar from "../components/Layout/Sidebar/Sidebar";
import ColorSchemeNav from "../components/Layout/ColorSchemeSidebar/ColorSchemeNav";
import { useSelector } from "react-redux";

function RootLayout() {
  const isSidebar = useSelector((state) => state.ui.sidebarIsVisible);

  return (
    <>
      <section className="w-full h-lvh bg-gradient-to-b from-50% from-gray-900 to-90% to-gray-800 flex justify-start">
        {isSidebar && <Sidebar />}
        <main className="w-full">
          <Header />
          <Outlet />
        </main>
        <ColorSchemeNav />
      </section>
    </>
  );
}

export default RootLayout;
