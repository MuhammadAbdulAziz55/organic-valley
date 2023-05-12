import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  return (
    <nav>
      <div className="navContainer">
        <div className="navLogo">ORGANIC VALLEY</div>
        <div>
          <ul
            id="navItems"
            className={`${menuVisible ? "#navItems active" : "#navItems"}`}
          >
            <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
              <li className="active">Home</li>
            </Link>
            <Link
              to="/orders"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li>Orders</li>
            </Link>
            <Link
              to="/admin"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li>Admin</li>
            </Link>
            <Link
              to="/deals"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li>Deals</li>
            </Link>
            <Link
              to="/login"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <li>Login</li>
            </Link>
          </ul>
        </div>
        <div id="mobile" onClick={toggleMenu}>
          {menuVisible ? (
            <FontAwesomeIcon className="icon" icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="icon" icon={faBars} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
