import { NavLink } from 'react-router-dom';
function linkClass({ isActive }) {
  return isActive
    ? 'text-orange-500 font-semibold'
    : 'text-white hover:text-orange-500 transition-colors';
}

function Navbar() {
  return (
    <nav className="bg-black px-5 py-4 sm:px-10 sm:py-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
      <NavLink to="/" className="text-3xl font-bold text-white">
        Creative<span className="text-orange-500">Studio.</span>
      </NavLink>

      <ul className="flex gap-6 list-none m-0 p-0">
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/add" className={linkClass}>
            Add Project
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;