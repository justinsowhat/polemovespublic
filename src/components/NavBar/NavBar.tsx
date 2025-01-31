import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        <img src="src/assets/logo.PNG" alt="Pole Moves App Logo" />
      </Link>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/privacy">Privacy</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
