import { useAuthContext } from "@/context/AuthContext";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { MdClose } from "react-icons/md";
import { FiMenu } from "react-icons/fi";
const links = [
  { path: "/", text: "Home" },
  { path: "about", text: "About" },
  { path: "profile", text: "Profile" },
  { path: "login", text: "Login" },
];
const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const { user, logout }: any = useAuthContext();
  const handleLogout = () => {
    logout();
  };
  const ref: any = useRef();
  useEffect(() => {
    const handler = (event: any) => {
      if (navbarOpen && ref.current && !ref.current?.contains(event.target)) {
        setNavbarOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
    };
  }, [navbarOpen]);
  return (
    <>
      <nav className="navbar">
        <button
          className="toggle"
          onClick={() => setNavbarOpen((prev) => !prev)}
        >
          {navbarOpen ? (
            <MdClose style={{ width: "32px", height: "32px" }} />
          ) : (
            <FiMenu
              style={{
                width: "32px",
                height: "32px",
              }}
            />
          )}
        </button>
        <ul className={`menu-nav${navbarOpen ? " show-menu" : ""}`}>
          {links.map((link) => {
            return (
              <React.Fragment key={link?.text}>
                {link?.path === "login" ? (
                  user === "" && (
                    <li>
                      <NavLink
                        onClick={() => setNavbarOpen(false)}
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "active_class" : undefined
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : link?.path === "profile" ? (
                  user !== "" && (
                    <li>
                      <NavLink
                        onClick={() => setNavbarOpen(false)}
                        to={link.path}
                        className={({ isActive }) =>
                          isActive ? "active_class" : undefined
                        }
                      >
                        {link.text}
                      </NavLink>
                    </li>
                  )
                ) : (
                  <li key={link.text}>
                    <NavLink
                      onClick={() => setNavbarOpen(false)}
                      to={link.path}
                      className={({ isActive }) =>
                        isActive ? "active_class" : undefined
                      }
                    >
                      {link.text}
                    </NavLink>
                  </li>
                )}
              </React.Fragment>
            );
          })}
          {!user && (
            <li className="log-in">
              <span>Log in to edit to-dos</span>
            </li>
          )}
        </ul>
      </nav>
      {user && (
        <div className="logout">
          <p style={{paddingTop: "0.3em"}} >{user}</p>
          {<button className="input-submit" onClick={handleLogout}>Logout</button>}
        </div>
      )}
    </>
  );
};
export default Navbar;
