import { NavLink } from "react-router-dom";

const links = [
  { label: "New Arrivals", path: "/new" },
  { label: "Clothing", path: "/clothing" },
  { label: "Electronics", path: "/electronics" },
  { label: "Home Goods", path: "/home" },
  { label: "Sale", path: "/sale" },
];

export default function Sidebar() {
  return (
    <aside className="w-60 bg-white h-screen fixed top-0 left-0 border-r shadow-sm pt-16">
      <nav className="flex flex-col space-y-2 p-4">
        {links.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `px-4 py-2 rounded-md font-medium transition ${
                isActive
                  ? "bg-orange-500 text-white"
                  : "text-gray-700 hover:bg-orange-100 hover:text-orange-600"
              }`
            }
          >
            {link.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}
