import { NavLink } from "react-router-dom";

const NAV_LINKS = [
  { label: "Characters", to: "/characters" },
  // { label: "Episode", to: "/episode" },
  // { label: "Location", to: "/location" },
  { label: "About", to: "/" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center">
      <ul className="flex gap-4">
        {NAV_LINKS.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className="text-white hover:text-cyan-950"
              activeClassName="text-cyan-950"
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
