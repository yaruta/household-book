import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

function Sidebar() {
  return (
    <aside className="w-1/4 h-lvh p-6 flex-col bg-gradient-to-b from-gray-950 to-transparent">
      <Logo />
      <MainNavigation />
    </aside>
  );
}

export default Sidebar;
