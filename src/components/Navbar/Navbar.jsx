import { useContext, useState } from "react";
import "./navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/AuthProvider";
import { toast } from "react-hot-toast";
const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [openModal, setOpenModal] = useState(false);
  const location = useLocation();
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Your has been logged out successfully");
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      })
      .catch((e) => console.error(e));
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
            <Link
              to="/"
              className={`navLink ${location.pathname === "/" ? "active" : ""}`}
            >
              <li>Home</li>
            </Link>
            <Link
              className={`navLink ${
                location.pathname === "/orders" ? "active" : ""
              }`}
              to="/orders"
            >
              <li>Orders</li>
            </Link>
            <Link
              className={`navLink ${
                location.pathname === "/admin" ? "active" : ""
              }`}
              to="/admin"
            >
              <li>Admin</li>
            </Link>
            <Link
              className={`navLink ${
                location.pathname === "/deals" ? "active" : ""
              }`}
              to="/deals"
            >
              <li>Deals</li>
            </Link>
            {user?.uid ? (
              <div onClick={() => setOpenModal(!openModal)}>
                {user?.photoUrl ? (
                  <img src={user?.photoURL} alt="" className="userPhoto" />
                ) : (
                  <img
                    src="https://i.ibb.co/cTPWD5X/Avatar-face.png"
                    alt=""
                    className="userPhoto"
                  />
                )}
              </div>
            ) : (
              <Link
                className={`navLink ${
                  location.pathname === "/login" ? "active" : ""
                }`}
                to="/login"
              >
                <li>Login</li>
              </Link>
            )}
          </ul>
        </div>

        {openModal && (
          <div className="profileModal">
            <button onClick={handleLogOut} className="logoutButton">
              Logout
            </button>
          </div>
        )}

        <div id="mobile" onClick={toggleMenu}>
          {menuVisible ? (
            <FontAwesomeIcon className="navIcon" icon={faTimes} />
          ) : (
            <FontAwesomeIcon className="navIcon" icon={faBars} />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
