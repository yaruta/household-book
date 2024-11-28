import Logo from "./Logo";
import MainNavigation from "./MainNavigation";

function Sidebar() {
  return (
    <aside className="w-1/4 h-lvh p-6 flex-col bg-gradient-to-b from-sections-bg-1 to-sections-bg-2/10 sticky left-0 top-0 max-lg:w-1/3 max-md:w-1/2">
      <Logo />
      <MainNavigation />
    </aside>
  );
}

export default Sidebar;
