import ColorSchemeItem from "./ColorSchemeItem";

function ColorSchemeNav() {
  return (
    <aside className="w-10 h-lvh p-2 flex-col bg-gradient-to-b from-transparent to-gray-950">
      <nav className="pt-96 mt-64">
        <ul className="flex gap-8 rotate-[-90deg] text-white">
          <ColorSchemeItem title="Dark" isActive />
          <ColorSchemeItem title="Light" />
        </ul>
      </nav>
    </aside>
  );
}

export default ColorSchemeNav;
