import { NavLink, useLocation } from "react-router-dom";
import '../../styles/Navbar.css';

function Navbar() {

  let location = useLocation().pathname.split("/")[1];

  return (
    <nav className="navbar">
      <div className="home-section">
        <NavLink className={`home-link ${location === "" && "active-page"}`} to="/" >
          Home
        </NavLink>
      </div>
      <div className="spacer" />
      <div className="nav-menu">
        <NavLink className={`topic-link ${location === "projects" && "active-page"}`} to="/projects">
          Projects
        </NavLink>
        <NavLink className={`topic-link ${location === "about" && "active-page"}`} to="/about">
          About
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar;